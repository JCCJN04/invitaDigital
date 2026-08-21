import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined",
  },
})

export type Event = {
  id: string
  slug: string
  title: string
  event_type: "boda" | "xv" | "bautizo" | "cumpleanos" | "corporativo"
  event_date: string
  venue_name?: string | null
  venue_address?: string | null
  venue_maps_url?: string | null
  host_name: string
  host_phone?: string | null
  host_email?: string | null
  plan: "basico" | "premium" | "deluxe"
  has_whatsapp_addon: boolean
  whatsapp_tier?: "basico" | "premium" | "deluxe" | null
  has_seating_addon: boolean
  created_at: string
}

export type Guest = {
  id: string
  event_id: string
  token: string
  name: string
  phone?: string | null
  passes_assigned: number
  children_count?: number | null
  passes_confirmed: number
  rsvp_status: "pending" | "confirmed" | "declined"
  table_assigned?: string | null
  qr_code_url?: string | null
  whatsapp_sent: boolean
  whatsapp_sent_at?: string | null
  whatsapp_delivered: boolean
  confirmed_at?: string | null
  notes?: string | null
  created_at: string
}

export type WhatsappLog = {
  id: string
  event_id: string
  guest_id: string
  template_name: string
  twilio_message_sid?: string | null
  status: "queued" | "sent" | "delivered" | "failed" | "read"
  error_message?: string | null
  created_at: string
}
