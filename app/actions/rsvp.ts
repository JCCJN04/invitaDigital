"use server"

import { supabase, type Guest } from "@/lib/supabase"
import { revalidatePath } from "next/cache"

interface SubmitRsvpParams {
  guestId?: string
  eventSlug: string
  token?: string | null
  attending: "confirmed" | "declined"
  passes: number
  guestName?: string
  phone?: string
  notes?: string
}

export async function submitRsvpAction(params: SubmitRsvpParams) {
  try {
    const {
      guestId,
      eventSlug,
      token,
      attending,
      passes,
      guestName,
      phone,
      notes,
    } = params

    // If existing guest by ID or token
    if (guestId || token) {
      let query = supabase.from("guests").update({
        rsvp_status: attending,
        passes_confirmed: attending === "confirmed" ? passes : 0,
        notes: notes || null,
        confirmed_at: new Date().toISOString(),
      })

      if (guestId) {
        query = query.eq("id", guestId)
      } else if (token) {
        query = query.eq("token", token)
      }

      const { data, error } = await query.select().single()

      if (error) {
        console.error("Error in update guest RSVP action:", error)
        return { success: false, error: error.message }
      }

      revalidatePath(`/boda/${eventSlug}`)
      revalidatePath(`/panel/${eventSlug}`)
      return { success: true, guest: data as Guest }
    }

    // Otherwise, create new guest for general invitation
    const { data: event, error: eventErr } = await supabase
      .from("events")
      .select("id")
      .eq("slug", eventSlug)
      .single()

    if (eventErr || !event) {
      return { success: false, error: "Evento no encontrado." }
    }

    const generatedToken = "g_" + Math.random().toString(36).substring(2, 10)
    const { data: newGuest, error: insertErr } = await supabase
      .from("guests")
      .insert({
        event_id: event.id,
        token: generatedToken,
        name: (guestName || "Invitado").trim(),
        phone: phone?.trim() || null,
        passes_assigned: passes,
        passes_confirmed: attending === "confirmed" ? passes : 0,
        rsvp_status: attending,
        notes: notes || null,
        confirmed_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (insertErr) {
      console.error("Error inserting guest RSVP action:", insertErr)
      return { success: false, error: insertErr.message }
    }

    revalidatePath(`/boda/${eventSlug}`)
    revalidatePath(`/panel/${eventSlug}`)
    return { success: true, guest: newGuest as Guest }
  } catch (err: any) {
    console.error("Error in submitRsvpAction:", err)
    return { success: false, error: err.message || "Error al procesar la confirmación." }
  }
}

export async function addGuestAction(
  eventId: string,
  eventSlug: string,
  guestData: {
    name: string
    phone?: string | null
    passes_assigned: number
    table_assigned?: string | null
  }
) {
  try {
    const generatedToken = "g_" + Math.random().toString(36).substring(2, 10)
    const { data, error } = await supabase
      .from("guests")
      .insert({
        event_id: eventId,
        token: generatedToken,
        name: guestData.name.trim(),
        phone: guestData.phone?.trim() || null,
        passes_assigned: Math.max(1, Number(guestData.passes_assigned) || 2),
        passes_confirmed: 0,
        rsvp_status: "pending",
        table_assigned: guestData.table_assigned?.trim() || null,
      })
      .select()
      .single()

    if (error) {
      console.error("Error adding guest action:", error)
      return { success: false, error: error.message }
    }

    revalidatePath(`/boda/${eventSlug}`)
    revalidatePath(`/panel/${eventSlug}`)
    return { success: true, guest: data as Guest }
  } catch (err: any) {
    console.error("Error in addGuestAction:", err)
    return { success: false, error: err.message || "Error al agregar invitado." }
  }
}

export async function updateGuestTableAction(
  guestId: string,
  eventSlug: string,
  tableAssigned: string | null
) {
  try {
    const { data, error } = await supabase
      .from("guests")
      .update({ table_assigned: tableAssigned })
      .eq("id", guestId)
      .select()
      .single()

    if (error) {
      console.error("Error updating table action:", error)
      return { success: false, error: error.message }
    }

    revalidatePath(`/boda/${eventSlug}`)
    revalidatePath(`/panel/${eventSlug}`)
    return { success: true, guest: data as Guest }
  } catch (err: any) {
    console.error("Error in updateGuestTableAction:", err)
    return { success: false, error: err.message || "Error al actualizar la mesa." }
  }
}

export async function updateGuestPassesAction(
  guestId: string,
  eventSlug: string,
  newPasses: number
) {
  try {
    const safePasses = Math.max(1, Math.min(20, Number(newPasses) || 1))

    // Only allow updating if status is pending
    const { data: existingGuest, error: fetchErr } = await supabase
      .from("guests")
      .select("id, rsvp_status")
      .eq("id", guestId)
      .single()

    if (fetchErr || !existingGuest) {
      return { success: false, error: "Invitado no encontrado." }
    }

    if (existingGuest.rsvp_status === "confirmed") {
      return {
        success: false,
        error: "No se pueden modificar los pases de un invitado que ya confirmó su asistencia.",
      }
    }

    const { data, error } = await supabase
      .from("guests")
      .update({ passes_assigned: safePasses })
      .eq("id", guestId)
      .select()
      .single()

    if (error) {
      console.error("Error updating passes action:", error)
      return { success: false, error: error.message }
    }

    revalidatePath(`/boda/${eventSlug}`)
    revalidatePath(`/panel/${eventSlug}`)
    return { success: true, guest: data as Guest }
  } catch (err: any) {
    console.error("Error in updateGuestPassesAction:", err)
    return { success: false, error: err.message || "Error al actualizar los pases." }
  }
}

export interface RawImportGuest {
  name: string
  phone?: string | null
  passes_assigned?: number
  table_assigned?: string | null
  notes?: string | null
}

export async function batchImportGuestsAction(
  eventId: string,
  eventSlug: string,
  guestsList: RawImportGuest[]
) {
  try {
    if (!guestsList || guestsList.length === 0) {
      return { success: false, error: "No se proporcionaron invitados para importar." }
    }

    const payload = guestsList.map((g) => ({
      event_id: eventId,
      token: "g_" + Math.random().toString(36).substring(2, 10),
      name: (g.name || "Invitado").trim(),
      phone: g.phone?.trim() || null,
      passes_assigned: Number(g.passes_assigned) > 0 ? Number(g.passes_assigned) : 2,
      passes_confirmed: 0,
      rsvp_status: "pending" as const,
      table_assigned: g.table_assigned?.trim() || null,
      notes: g.notes?.trim() || null,
    }))

    const { data, error } = await supabase
      .from("guests")
      .insert(payload)
      .select()

    if (error) {
      console.error("Error in batchImportGuestsAction:", error)
      return { success: false, error: error.message }
    }

    revalidatePath(`/boda/${eventSlug}`)
    revalidatePath(`/panel/${eventSlug}`)
    return { success: true, count: data?.length || 0, guests: data as Guest[] }
  } catch (err: any) {
    console.error("Error in batchImportGuestsAction:", err)
    return { success: false, error: err.message || "Error al importar invitados." }
  }
}
