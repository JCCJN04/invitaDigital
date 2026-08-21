"use server"

import { cookies } from "next/headers"
import { supabase } from "@/lib/supabase"

/**
 * Validates panel login credentials for a specific event slug
 */
export async function loginPanelAction(slug: string, passwordInput: string) {
  try {
    const cleanSlug = slug.trim().toLowerCase()
    const cleanPass = passwordInput.trim()

    if (!cleanPass) {
      return { success: false, error: "Por favor ingresa tu contraseña o código de acceso." }
    }

    // 1. Fetch event from database
    const { data: event, error } = await supabase
      .from("events")
      .select("*")
      .eq("slug", cleanSlug)
      .maybeSingle()

    if (error || !event) {
      return { success: false, error: "Evento no encontrado." }
    }

    // 2. Validate password dynamically against database record
    const eventSlug = event.slug.toLowerCase()
    const validPasswords = [
      (event as any).admin_password,
      `${eventSlug}2026`,
      event.host_phone?.replace(/[^0-9]/g, ""),
      event.host_phone?.replace(/[^0-9]/g, "").slice(-4),
    ].filter(Boolean)

    const isMatch = validPasswords.some((p) => p && p.toLowerCase() === cleanPass.toLowerCase())

    if (!isMatch) {
      return {
        success: false,
        error: "Contraseña incorrecta. Por favor verifica e intenta de nuevo.",
      }
    }

    // 3. Set secure HTTP-only session cookie for 30 days
    const cookieStore = await cookies()
    cookieStore.set(`panel_auth_${cleanSlug}`, "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      sameSite: "lax",
    })

    return { success: true }
  } catch (err: any) {
    console.error("Login error:", err)
    return { success: false, error: err.message || "Error al autenticar." }
  }
}

/**
 * Logs out and clears the session cookie
 */
export async function logoutPanelAction(slug: string) {
  try {
    const cleanSlug = slug.trim().toLowerCase()
    const cookieStore = await cookies()
    cookieStore.delete(`panel_auth_${cleanSlug}`)
    return { success: true }
  } catch (err: any) {
    return { success: false, error: err.message }
  }
}

/**
 * Checks if current user has an active session for this event
 */
export async function isPanelAuthenticated(slug: string): Promise<boolean> {
  try {
    const cleanSlug = slug.trim().toLowerCase()
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get(`panel_auth_${cleanSlug}`)
    return sessionCookie?.value === "authenticated"
  } catch {
    return false
  }
}
