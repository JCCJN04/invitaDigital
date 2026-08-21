"use client"

import React, { useEffect, useState, useRef } from "react"
import { supabase, type Event, type Guest } from "@/lib/supabase"
import {
  addGuestAction,
  updateGuestTableAction,
  updateGuestPassesAction,
  batchImportGuestsAction,
  type RawImportGuest,
} from "@/app/actions/rsvp"
import { logoutPanelAction } from "@/app/actions/panel-auth"
import Link from "next/link"
import {
  Users,
  CheckCheck,
  CheckCircle2,
  Clock,
  Hourglass,
  XCircle,
  Search,
  Download,
  Plus,
  Copy,
  Sparkles,
  Loader2,
  LogOut,
  LayoutGrid,
  MapPin,
  Edit2,
  Check,
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Layers,
  Eye,
  Info,
  Trash2,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Calendar,
  User,
  Phone,
  MessageCircle,
  MessageSquareQuote,
  FileSpreadsheet,
  FileText,
  Upload,
  ChevronDown,
  FileUp,
  Table,
  Crown,
  Wine,
  Camera,
  DoorOpen,
  Music2,
  Flower2,
  Ticket,
  Armchair,
  Compass,
} from "lucide-react"

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

interface PanelClientViewProps {
  initialEvent: Event
  initialGuests: Guest[]
  slug: string
}

interface FloorTable {
  id: string
  label: string
  x: number
  y: number
  type: "rectangle" | "round"
  capacity: number
}

const DEFAULT_FLOOR_TABLES: FloorTable[] = [
  { id: "Mesa Principal", label: "Mesa de Novios / Principal", x: 50, y: 22, type: "rectangle", capacity: 12 },
  { id: "Mesa 1", label: "Mesa 1", x: 24, y: 44, type: "round", capacity: 10 },
  { id: "Mesa 2", label: "Mesa 2", x: 76, y: 44, type: "round", capacity: 10 },
  { id: "Mesa 3", label: "Mesa 3", x: 20, y: 64, type: "round", capacity: 10 },
  { id: "Mesa 4", label: "Mesa 4", x: 50, y: 68, type: "round", capacity: 10 },
  { id: "Mesa 5", label: "Mesa 5", x: 80, y: 64, type: "round", capacity: 10 },
  { id: "Mesa 6", label: "Mesa 6", x: 24, y: 84, type: "round", capacity: 10 },
  { id: "Mesa 7", label: "Mesa 7", x: 76, y: 84, type: "round", capacity: 10 },
]

export function PanelClientView({
  initialEvent,
  initialGuests,
  slug,
}: PanelClientViewProps) {
  const [event, setEvent] = useState<Event>(initialEvent)
  const [guests, setGuests] = useState<Guest[]>(initialGuests)
  const [activeTab, setActiveTab] = useState<"guests" | "seating">("guests")
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState<"all" | "confirmed" | "pending" | "declined">("all")
  const [copiedToken, setCopiedToken] = useState<string | null>(null)

  // Import modal state
  const [isImportModalOpen, setIsImportModalOpen] = useState(false)
  const [importText, setImportText] = useState("")
  const [parsedGuests, setParsedGuests] = useState<RawImportGuest[]>([])
  const [importing, setImporting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Seating Floor Plan state
  const [floorTables, setFloorTables] = useState<FloorTable[]>(DEFAULT_FLOOR_TABLES)
  const [selectedTable, setSelectedTable] = useState<string>("Mesa Principal")
  const [isNewTableModalOpen, setIsNewTableModalOpen] = useState(false)
  const [newTableName, setNewTableName] = useState("")
  const [newTableCapacity, setNewTableCapacity] = useState(10)
  const [updatingGuestId, setUpdatingGuestId] = useState<string | null>(null)

  // Add guest modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [newName, setNewName] = useState("")
  const [newPhone, setNewPhone] = useState("")
  const [newPasses, setNewPasses] = useState(2)
  const [newTable, setNewTable] = useState("")
  const [addingGuest, setAddingGuest] = useState(false)
  const [detailGuest, setDetailGuest] = useState<Guest | null>(null)

  // Realtime subscription for live updates
  useEffect(() => {
    if (!event?.id) return

    const channel = supabase
      .channel(`guests-realtime-${event.id}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "guests",
          filter: `event_id=eq.${event.id}`,
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setGuests((prev) => [payload.new as Guest, ...prev])
          } else if (payload.eventType === "UPDATE") {
            setGuests((prev) =>
              prev.map((g) => (g.id === payload.new.id ? (payload.new as Guest) : g))
            )
          } else if (payload.eventType === "DELETE") {
            setGuests((prev) => prev.filter((g) => g.id === payload.old.id))
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [event.id])

  // Summary Metrics calculations
  const totalAssignedPasses = guests.reduce((sum, g) => sum + g.passes_assigned, 0)
  const confirmedPasses = guests
    .filter((g) => g.rsvp_status === "confirmed")
    .reduce((sum, g) => sum + (g.passes_confirmed > 0 ? g.passes_confirmed : g.passes_assigned), 0)
  const pendingPasses = guests
    .filter((g) => g.rsvp_status === "pending")
    .reduce((sum, g) => sum + g.passes_assigned, 0)
  const declinedPasses = guests
    .filter((g) => g.rsvp_status === "declined")
    .reduce((sum, g) => sum + g.passes_assigned, 0)

  const confirmedGuestsCount = guests.filter((g) => g.rsvp_status === "confirmed").length
  const pendingGuestsCount = guests.filter((g) => g.rsvp_status === "pending").length
  const declinedGuestsCount = guests.filter((g) => g.rsvp_status === "declined").length

  const confirmationRate = totalAssignedPasses > 0 ? Math.round((confirmedPasses / totalAssignedPasses) * 100) : 0

  // Countdown timer for wedding date
  const [timeLeft, setTimeLeft] = useState<{ days: string; hours: string; min: string; sec: string }>({
    days: "00",
    hours: "00",
    min: "00",
    sec: "00",
  })

  useEffect(() => {
    const targetDate = new Date(event.event_date).getTime()

    const calculate = () => {
      const now = Date.now()
      const diff = targetDate - now
      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", min: "00", sec: "00" })
        return
      }
      const pad = (n: number) => String(Math.max(0, n)).padStart(2, "0")
      setTimeLeft({
        days: pad(Math.floor(diff / 86400000)),
        hours: pad(Math.floor((diff % 86400000) / 3600000)),
        min: pad(Math.floor((diff % 3600000) / 60000)),
        sec: pad(Math.floor((diff % 60000) / 1000)),
      })
    }

    calculate()
    const interval = setInterval(calculate, 1000)
    return () => clearInterval(interval)
  }, [event.event_date])

  // Seating calculations
  const tableGroups = guests.reduce((acc, guest) => {
    const table = guest.table_assigned?.trim() || "Sin Asignar"
    if (!acc[table]) acc[table] = []
    acc[table].push(guest)
    return acc
  }, {} as Record<string, Guest[]>)

  const unassignedGuests = tableGroups["Sin Asignar"] || []
  const totalAssignedSeats = guests
    .filter((g) => g.table_assigned && g.table_assigned.trim() !== "")
    .reduce((sum, g) => sum + (g.passes_confirmed > 0 ? g.passes_confirmed : g.passes_assigned), 0)

  // Ensure any custom table in guests is in floorTables
  useEffect(() => {
    const existingTableNames = new Set(floorTables.map((t) => t.id))
    const extraTables: FloorTable[] = []

    Object.keys(tableGroups).forEach((table) => {
      if (table !== "Sin Asignar" && !existingTableNames.has(table)) {
        extraTables.push({
          id: table,
          label: table,
          x: 50,
          y: 50,
          type: "round",
          capacity: 10,
        })
      }
    })

    if (extraTables.length > 0) {
      setFloorTables((prev) => [...prev, ...extraTables])
    }
  }, [guests])

  // Filtered guests for list view
  const filteredGuests = guests.filter((g) => {
    const matchesSearch =
      g.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (g.phone ? g.phone.includes(searchTerm) : false)

    const matchesStatus = statusFilter === "all" ? true : g.rsvp_status === statusFilter

    return matchesSearch && matchesStatus
  })

  // Copy personalized link to clipboard
  const handleCopyLink = (guestToken: string) => {
    const origin = typeof window !== "undefined" ? window.location.origin : "https://www.invitacionesdigitalesmty.com.mx"
    const url = `${origin}/${slug}?guest=${guestToken}`
    navigator.clipboard.writeText(url)
    setCopiedToken(guestToken)
    setTimeout(() => setCopiedToken(null), 2000)
  }

  // Update guest table assignment via Server Action
  const handleUpdateGuestTable = async (guestId: string, newTableVal: string | null) => {
    setUpdatingGuestId(guestId)
    try {
      const cleanTable = newTableVal && newTableVal.trim() !== "" ? newTableVal.trim() : null
      const res = await updateGuestTableAction(guestId, slug, cleanTable)

      if (!res.success) {
        throw new Error(res.error || "Error al actualizar mesa")
      }

      setGuests((prev) =>
        prev.map((g) => (g.id === guestId ? { ...g, table_assigned: cleanTable } : g))
      )
    } catch (err: any) {
      console.error("Error updating table:", err)
      alert("Error al actualizar la mesa: " + err.message)
    } finally {
      setUpdatingGuestId(null)
    }
  }

  // Update guest assigned passes via Server Action (only allowed if pending)
  const handleUpdateGuestPasses = async (guestId: string, newPasses: number) => {
    try {
      const passesNum = Math.max(1, Math.min(20, newPasses))
      const res = await updateGuestPassesAction(guestId, slug, passesNum)
      if (!res.success) {
        throw new Error(res.error || "Error al actualizar los pases.")
      }

      setGuests((prev) =>
        prev.map((g) => (g.id === guestId ? { ...g, passes_assigned: passesNum } : g))
      )
    } catch (err: any) {
      console.error("Error updating passes:", err)
      alert(err.message || "Error al actualizar pases")
    }
  }

  // Add new table to floor plan
  const handleCreateNewTable = () => {
    if (!newTableName.trim()) return
    const id = newTableName.trim()

    if (!floorTables.some((t) => t.id.toLowerCase() === id.toLowerCase())) {
      const newTableObj: FloorTable = {
        id,
        label: id,
        x: 50,
        y: 50,
        type: id.toLowerCase().includes("principal") || id.toLowerCase().includes("novios") ? "rectangle" : "round",
        capacity: newTableCapacity || 10,
      }
      setFloorTables((prev) => [...prev, newTableObj])
      setSelectedTable(id)
    }

    setIsNewTableModalOpen(false)
    setNewTableName("")
  }

  // EXPORT: EXECUTIVE PDF (Direct in-place print/download without opening blank page)
  const handleExportPDF = () => {
    if (typeof window === "undefined") return

    const iframe = document.createElement("iframe")
    iframe.style.position = "fixed"
    iframe.style.right = "0"
    iframe.style.bottom = "0"
    iframe.style.width = "0"
    iframe.style.height = "0"
    iframe.style.border = "none"
    iframe.setAttribute("aria-hidden", "true")
    document.body.appendChild(iframe)

    const doc = iframe.contentWindow?.document
    if (!doc) return

    const formatNotesForPDF = (notes?: string | null) => {
      if (!notes || notes.trim() === "" || notes.trim() === "—") return '<span style="color: #bbb;">—</span>'
      const items = notes.split(" | ")
      return items
        .map((item) => {
          const colonIdx = item.indexOf(": ")
          if (colonIdx !== -1) {
            const label = item.substring(0, colonIdx)
            const val = item.substring(colonIdx + 2)
            return `<div style="margin-bottom: 3px; line-height: 1.4;"><strong style="color: #6F4E38;">${label}:</strong> <span>${val}</span></div>`
          }
          return `<div style="color: #444; font-style: italic;">"${item}"</div>`
        })
        .join("")
    }

    const rowsHtml = guests
      .map(
        (g, idx) => `
      <tr style="border-bottom: 1px solid #e5e0d8; ${idx % 2 === 0 ? "background: #fdfbf8;" : ""}">
        <td style="padding: 10px 12px; font-weight: bold; color: #2C2925;">${g.name}</td>
        <td style="padding: 10px 12px; color: #666; font-family: monospace;">${g.phone || "—"}</td>
        <td style="padding: 10px 12px; text-align: center; font-weight: bold;">${g.passes_confirmed > 0 ? g.passes_confirmed : g.passes_assigned}</td>
        <td style="padding: 10px 12px; text-align: center;">
          <span style="padding: 3px 8px; border-radius: 12px; font-size: 10px; font-weight: bold; ${
            g.rsvp_status === "confirmed"
              ? "background: #e6f7ed; color: #0d8244;"
              : g.rsvp_status === "pending"
              ? "background: #fef4e6; color: #b45309;"
              : "background: #fde8e8; color: #9b1c1c;"
          }">
            ${g.rsvp_status === "confirmed" ? "CONFIRMADO" : g.rsvp_status === "pending" ? "PENDIENTE" : "CANCELADO"}
          </span>
          ${
            g.confirmed_at
              ? `<div style="font-size: 9px; color: #777; font-family: monospace; margin-top: 3px;">${new Date(g.confirmed_at).toLocaleString("es-MX", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}</div>`
              : ""
          }
        </td>
        <td style="padding: 10px 12px; font-size: 11px; max-width: 280px;">${formatNotesForPDF(g.notes)}</td>
      </tr>
    `
      )
      .join("")

    doc.open()
    doc.write(`
      <!DOCTYPE html>
      <html lang="es">
        <head>
          <title>Reporte de Invitados — ${event.title}</title>
          <meta charset="utf-8" />
          <style>
            @page { size: portrait; margin: 15mm; }
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #2C2925; margin: 0; padding: 15px; }
            .header { border-bottom: 2px solid #8C3A5A; padding-bottom: 12px; margin-bottom: 15px; display: flex; justify-content: space-between; align-items: flex-end; }
            .title { font-size: 22px; font-weight: bold; color: #8C3A5A; margin: 0; }
            .subtitle { font-size: 11px; color: #666; margin-top: 4px; }
            .metrics-box { display: flex; gap: 12px; margin-bottom: 15px; }
            .metric { background: #FAF8F5; border: 1px solid #E8E4DC; padding: 8px 14px; border-radius: 8px; flex: 1; }
            .metric-label { font-size: 9px; text-transform: uppercase; color: #777; font-weight: bold; letter-spacing: 0.05em; }
            .metric-val { font-size: 18px; font-weight: bold; color: #2C2925; margin-top: 2px; }
            table { width: 100%; border-collapse: collapse; text-align: left; font-size: 11px; }
            th { background: #8C3A5A; color: white; padding: 8px 10px; font-size: 10px; text-transform: uppercase; letter-spacing: 0.05em; }
            .footer { margin-top: 25px; font-size: 9px; color: #888; text-align: center; border-top: 1px solid #eee; padding-top: 8px; }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1 class="title">${event.title}</h1>
              <div class="subtitle">Anfitriones: <strong>${event.host_name}</strong> · Fecha: ${new Date(event.event_date).toLocaleDateString("es-MX", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div>
            </div>
            <div style="text-align: right; font-size: 10px; color: #8C3A5A; font-weight: bold;">
              InvitacionesDigitalesMTY<br>
              <span style="color: #666; font-size: 9px; font-weight: normal;">Reporte Oficial de Asistencia RSVP</span>
            </div>
          </div>

          <div class="metrics-box">
            <div class="metric">
              <div class="metric-label">Pases Confirmados</div>
              <div class="metric-val" style="color: #0d8244;">${confirmedPasses}</div>
            </div>
            <div class="metric">
              <div class="metric-label">Pases Pendientes</div>
              <div class="metric-val" style="color: #b45309;">${pendingPasses}</div>
            </div>
            <div class="metric">
              <div class="metric-label">Cancelados</div>
              <div class="metric-val" style="color: #9b1c1c;">${declinedPasses}</div>
            </div>
            <div class="metric">
              <div class="metric-label">Total Pases Asignados</div>
              <div class="metric-val">${totalAssignedPasses} (${guests.length} familias)</div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>Invitado</th>
                <th>Teléfono</th>
                <th style="text-align: center;">Pases</th>
                <th style="text-align: center;">Estatus</th>
                <th>Notas / Respuestas</th>
              </tr>
            </thead>
            <tbody>
              ${rowsHtml}
            </tbody>
          </table>

          <div class="footer">
            Generado el ${new Date().toLocaleString("es-MX")} · Sistema de Confirmaciones de InvitacionesDigitalesMTY
          </div>
        </body>
      </html>
    `)
    doc.close()

    setTimeout(() => {
      iframe.contentWindow?.focus()
      iframe.contentWindow?.print()
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe)
        }
      }, 3000)
    }, 400)
  }

  // PARSE IMPORT TEXT
  const handleParseImportText = (text: string) => {
    setImportText(text)
    if (!text.trim()) {
      setParsedGuests([])
      return
    }

    const lines = text.split("\n")
    const results: RawImportGuest[] = []

    lines.forEach((line) => {
      const cleanLine = line.trim()
      if (!cleanLine) return

      const parts = cleanLine.split(/[,;\t|]+/).map((p) => p.trim())

      if (parts.length >= 1) {
        const name = parts[0]
        let passes = 2
        let table = ""
        let phone = ""

        for (let i = 1; i < parts.length; i++) {
          const part = parts[i]
          const numMatch = part.match(/\b(\d+)\s*(pases?|personas?|boletos?)?\b/i)

          if (/^(\+?\d[\d\s\-()]{7,})$/.test(part.replace(/\s+/g, ""))) {
            phone = part
          } else if (numMatch && !isNaN(parseInt(numMatch[1])) && parseInt(numMatch[1]) <= 20) {
            passes = parseInt(numMatch[1])
          } else if (/mesa/i.test(part) || /principal/i.test(part)) {
            table = part
          } else if (!table && isNaN(Number(part))) {
            table = part
          }
        }

        if (name && name.length >= 2) {
          results.push({
            name,
            passes_assigned: passes,
            table_assigned: table || null,
            phone: phone || null,
          })
        }
      }
    })

    setParsedGuests(results)
  }

  // Handle File Upload for Import (.csv or .txt)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (event) => {
      const content = event.target?.result as string
      if (content) {
        handleParseImportText(content)
      }
    }
    reader.readAsText(file)
  }

  // Download Sample Template CSV
  const handleDownloadTemplate = () => {
    const templateContent =
      "data:text/csv;charset=utf-8,\uFEFF" +
      "Nombre de Invitado,Pases,Mesa,Telefono\n" +
      "Carlos Mendoza,2,Mesa 3,+528180836435\n" +
      "Familia Gómez,4,Mesa Principal,+529611316161\n" +
      "Mariana Torres,1,Mesa 1,+525512345678\n" +
      "Rodrigo & Sofía,2,Mesa 2,+528199887766\n"

    const encodedUri = encodeURI(templateContent)
    const link = document.createElement("a")
    link.setAttribute("href", encodedUri)
    link.setAttribute("download", `plantilla_invitados_ejemplo.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Commit Batch Import to Supabase
  const handleCommitImport = async () => {
    if (parsedGuests.length === 0 || !event?.id) return

    setImporting(true)
    try {
      const res = await batchImportGuestsAction(event.id, slug, parsedGuests)
      if (!res.success) {
        throw new Error(res.error || "Error al importar los invitados.")
      }

      if (res.guests) {
        setGuests((prev) => [...res.guests, ...prev])
      }

      setIsImportModalOpen(false)
      setImportText("")
      setParsedGuests([])
      alert(`¡Éxito! Se importaron ${res.count} invitados correctamente.`)
    } catch (err: any) {
      console.error("Error committing import:", err)
      alert("Error al importar: " + err.message)
    } finally {
      setImporting(false)
    }
  }

  // Add new guest submit via robust Server Action
  const handleAddGuest = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!event?.id || !newName.trim()) return

    setAddingGuest(true)
    try {
      const res = await addGuestAction(event.id, slug, {
        name: newName.trim(),
        phone: newPhone.trim() || null,
        passes_assigned: newPasses,
        table_assigned: newTable.trim() || null,
      })

      if (!res.success) {
        throw new Error(res.error || "Error al agregar invitado.")
      }

      if (res.guest) {
        setGuests((prev) => [res.guest!, ...prev])
      }

      setIsAddModalOpen(false)
      setNewName("")
      setNewPhone("")
      setNewPasses(2)
      setNewTable("")
    } catch (err: any) {
      console.error("Error adding guest:", err)
      alert(err.message || "Error al agregar invitado.")
    } finally {
      setAddingGuest(false)
    }
  }

  const selectedTableObj = floorTables.find((t) => t.id === selectedTable) || {
    id: selectedTable,
    label: selectedTable,
    capacity: 10,
  }
  const selectedTableGuests = selectedTable ? tableGroups[selectedTable] || [] : []
  const selectedTableSeats = selectedTableGuests.reduce(
    (sum, g) => sum + (g.passes_confirmed > 0 ? g.passes_confirmed : g.passes_assigned),
    0
  )

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-foreground font-sans selection:bg-primary/20 pb-20">
      
      {/* Top Floating Luxury Header matching main site */}
      <div className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#FAF8F5]/90 border-b border-border/60 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5 flex items-center justify-between gap-2">
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-sm shadow-sm">
              i
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-foreground tracking-tight text-xs sm:text-base leading-none">
                InvitacionesDigitales<span className="text-primary font-serif">MTY</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5 hidden xs:block">
                Panel del Anfitrión
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <Link
              href={`/${slug}`}
              target="_blank"
              className="px-2.5 sm:px-3.5 py-1.5 rounded-full border border-border bg-card hover:bg-secondary text-[11px] sm:text-xs font-serif font-semibold text-foreground flex items-center gap-1.5 transition-all shadow-xs shrink-0"
              title="Abrir Invitación General del Evento"
            >
              <Eye className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.5} />
              <span className="hidden sm:inline">Ver Invitación General</span>
              <span className="sm:hidden">Invitación</span>
            </Link>

            <button
              onClick={async () => {
                await logoutPanelAction(slug)
                window.location.reload()
              }}
              className="px-2.5 sm:px-3 py-1.5 rounded-full border border-border bg-card hover:bg-destructive/10 hover:text-destructive hover:border-destructive/30 text-[11px] sm:text-xs font-serif font-semibold text-muted-foreground flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              title="Cerrar sesión del panel"
            >
              <LogOut className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="hidden xs:inline">Salir</span>
            </button>
            
            <div className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 sm:px-3 py-1 rounded-full border border-emerald-200 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>En Vivo</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 space-y-6 sm:space-y-8">
        
        {/* Event Hero Banner */}
        <div className="relative bg-card rounded-3xl p-5 sm:p-8 border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] uppercase font-bold tracking-[0.2em] font-serif flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-primary" strokeWidth={1.5} />
                Panel Exclusivo
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                {new Date(event.event_date).toLocaleDateString("es-MX", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
              {event.title}
            </h1>

            <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.5} />
              <span>Anfitriones: <strong className="text-foreground font-semibold">{event.host_name}</strong></span>
            </p>
          </div>

          {/* Action Buttons: PDF & + Nuevo Invitado (Mobile First 2-col grid) */}
          <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-2.5 w-full sm:w-auto">
            {/* Export PDF Document */}
            <button
              onClick={handleExportPDF}
              className="w-full sm:w-auto px-3.5 sm:px-5 py-2.5 rounded-full border border-border bg-card hover:bg-secondary text-xs font-serif font-bold text-foreground flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:shadow"
              title="Descargar Reporte en PDF"
            >
              <FileText className="w-4 h-4 text-primary shrink-0" strokeWidth={1.5} />
              <span>Descargar PDF</span>
            </button>

            {/* Add Guest Button */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="w-full sm:w-auto px-3.5 sm:px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-serif font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
            >
              <UserPlus className="w-4 h-4 shrink-0" strokeWidth={1.5} />
              <span>+ Nuevo</span>
            </button>
          </div>
        </div>

        {/* GUEST LIST & RSVP METRICS */}
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            {/* Cuenta Regresiva Oficial para la Boda */}
            <div className="bg-card p-5 sm:p-6 rounded-3xl border border-primary/20 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-serif border border-primary/20 shadow-2xs shrink-0">
                  <Clock className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-serif font-bold tracking-widest text-primary block">
                    Cuenta Regresiva Oficial
                  </span>
                  <h3 className="font-serif font-bold text-base sm:text-lg text-foreground">
                    Tiempo restante para el gran día de {event.host_name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-serif">
                    {new Date(event.event_date).toLocaleDateString("es-MX", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
                  </p>
                </div>
              </div>

              {/* Countdown Circles Grid */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="bg-secondary/40 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-border text-center shadow-2xs min-w-[65px] sm:min-w-[75px]">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-foreground block">{timeLeft.days}</span>
                  <span className="text-[9px] uppercase font-serif font-bold text-muted-foreground tracking-wider">Días</span>
                </div>
                <div className="bg-secondary/40 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-border text-center shadow-2xs min-w-[65px] sm:min-w-[75px]">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-foreground block">{timeLeft.hours}</span>
                  <span className="text-[9px] uppercase font-serif font-bold text-muted-foreground tracking-wider">Horas</span>
                </div>
                <div className="bg-secondary/40 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-border text-center shadow-2xs min-w-[65px] sm:min-w-[75px]">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-foreground block">{timeLeft.min}</span>
                  <span className="text-[9px] uppercase font-serif font-bold text-muted-foreground tracking-wider">Min</span>
                </div>
                <div className="bg-secondary/40 px-3 py-2.5 sm:px-4 sm:py-3 rounded-2xl border border-border text-center shadow-2xs min-w-[65px] sm:min-w-[75px]">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-primary block">{timeLeft.sec}</span>
                  <span className="text-[9px] uppercase font-serif font-bold text-muted-foreground tracking-wider">Seg</span>
                </div>
              </div>
            </div>

            {/* Metrics Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {/* Card 1: Confirmados */}
              <div className="bg-card p-4 sm:p-6 rounded-3xl border border-emerald-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-serif font-semibold text-muted-foreground">Pases Confirmados</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                    <CheckCheck className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mt-2.5 sm:mt-3">
                  <div className="flex items-baseline gap-2">
                    <p className="font-serif text-2xl sm:text-4xl font-bold text-foreground">
                      {confirmedPasses}
                    </p>
                    <span className="text-xs font-serif text-muted-foreground">/ {totalAssignedPasses}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-emerald-600 font-bold mt-0.5 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {confirmedGuestsCount} {confirmedGuestsCount === 1 ? "familia confirmada" : "familias confirmadas"}
                  </p>
                </div>
              </div>

              {/* Card 2: Pendientes */}
              <div className="bg-card p-4 sm:p-6 rounded-3xl border border-amber-500/30 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-serif font-semibold text-muted-foreground">Pases Pendientes</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <Hourglass className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mt-2.5 sm:mt-3">
                  <div className="flex items-baseline gap-2">
                    <p className="font-serif text-2xl sm:text-4xl font-bold text-foreground">
                      {pendingPasses}
                    </p>
                    <span className="text-xs font-serif text-muted-foreground">/ {totalAssignedPasses}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-amber-600 font-bold mt-0.5">
                    {pendingGuestsCount} {pendingGuestsCount === 1 ? "familia pendiente" : "familias pendientes"}
                  </p>
                </div>
              </div>

              {/* Card 3: Cancelados */}
              <div className="bg-card p-4 sm:p-6 rounded-3xl border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-serif font-semibold text-muted-foreground">Cancelados</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-destructive/10 text-destructive flex items-center justify-center">
                    <UserMinus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="mt-2.5 sm:mt-3">
                  <div className="flex items-baseline gap-2">
                    <p className="font-serif text-2xl sm:text-4xl font-bold text-foreground">
                      {declinedPasses}
                    </p>
                    <span className="text-xs font-serif text-muted-foreground">pases</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-muted-foreground font-bold mt-0.5">
                    {declinedGuestsCount} {declinedGuestsCount === 1 ? "familia cancelada" : "familias canceladas"}
                  </p>
                </div>
              </div>

              {/* Card 4: Total Pases & Confirmación */}
              <div className="bg-card p-4 sm:p-6 rounded-3xl border border-primary/30 shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-serif font-semibold text-muted-foreground">Total Pases</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs font-serif">
                    {confirmationRate}%
                  </div>
                </div>
                <div className="mt-2.5 sm:mt-3">
                  <p className="font-serif text-2xl sm:text-4xl font-bold text-foreground">
                    {totalAssignedPasses}
                  </p>
                  <div className="w-full bg-secondary rounded-full h-1.5 mt-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full transition-all duration-500"
                      style={{ width: `${confirmationRate}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* List & Table Wrapper */}
            <div className="bg-card rounded-3xl border border-border shadow-[0_8px_30px_rgba(0,0,0,0.03)] overflow-hidden">
              
              {/* Search & Filters */}
              <div className="p-4 sm:p-6 border-b border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" strokeWidth={1.5} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar por nombre..."
                    className="w-full pl-9 pr-4 py-2.5 text-xs rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 font-serif"
                  />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 w-full sm:w-auto">
                  {[
                    { id: "all", label: "Todos", count: guests.length },
                    { id: "confirmed", label: "Confirmados", count: confirmedGuestsCount },
                    { id: "pending", label: "Pendientes", count: pendingGuestsCount },
                    { id: "declined", label: "Cancelados", count: declinedGuestsCount },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setStatusFilter(tab.id as any)}
                      className={`w-full px-3 py-2 sm:px-3.5 sm:py-1.5 rounded-xl sm:rounded-full text-xs font-serif font-semibold transition-all cursor-pointer flex items-center justify-between sm:justify-center gap-1.5 ${
                        statusFilter === tab.id
                          ? "bg-primary text-primary-foreground shadow-xs font-bold"
                          : "bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary"
                      }`}
                    >
                      <span className="truncate">{tab.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-sans font-bold shrink-0 ${statusFilter === tab.id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
                        {tab.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* MOBILE GUEST LIST VIEW (< md screens) — Luxury App-Like Contact Cards */}
              <div className="block md:hidden divide-y divide-border/60">
                {filteredGuests.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground font-serif text-xs px-4">
                    No se encontraron invitados con los filtros seleccionados.
                  </div>
                ) : (
                  filteredGuests.map((guest) => {
                    const isConfirmed = guest.rsvp_status === "confirmed"
                    const isDeclined = guest.rsvp_status === "declined"
                    const isPending = guest.rsvp_status === "pending"

                    return (
                      <div
                        key={guest.id}
                        className="p-4 bg-card hover:bg-secondary/15 transition-colors space-y-3"
                      >
                        {/* Header: Avatar + Guest Name + RSVP Badge */}
                        <div className="flex items-start justify-between gap-2.5">
                          <div className="flex items-start gap-3 min-w-0 flex-1">
                            <div className="w-10 h-10 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-sm shrink-0 border border-primary/20 shadow-2xs mt-0.5">
                              {guest.name.charAt(0).toUpperCase()}
                            </div>

                            <div className="min-w-0 flex-1">
                              <h4 className="font-serif font-bold text-sm text-foreground leading-snug break-words">
                                {guest.name}
                              </h4>
                              {guest.phone && (
                                <p className="text-[11px] text-muted-foreground font-mono mt-0.5">
                                  {guest.phone}
                                </p>
                              )}
                            </div>
                          </div>

                          {/* Status Badge with Live Timestamp */}
                          <div className="shrink-0 flex flex-col items-end">
                            {isConfirmed && (
                              <>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-serif font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 shadow-2xs">
                                  <CheckCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
                                  Confirmado
                                </span>
                                {guest.confirmed_at && (
                                  <span className="text-[9px] text-muted-foreground font-mono mt-1 text-right">
                                    {new Date(guest.confirmed_at).toLocaleString("es-MX", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      second: "2-digit",
                                      hour12: true,
                                    })}
                                  </span>
                                )}
                              </>
                            )}
                            {isPending && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-serif font-bold bg-amber-500/10 text-amber-700 border border-amber-500/25 shadow-2xs">
                                <Hourglass className="w-3 h-3 text-amber-600 shrink-0" strokeWidth={1.5} />
                                Pendiente
                              </span>
                            )}
                            {isDeclined && (
                              <>
                                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-serif font-bold bg-destructive/10 text-destructive border border-destructive/20 shadow-2xs">
                                  <UserMinus className="w-3.5 h-3.5 text-destructive" strokeWidth={1.5} />
                                  No asistirá
                                </span>
                                {guest.confirmed_at && (
                                  <span className="text-[9px] text-muted-foreground font-mono mt-1 text-right">
                                    {new Date(guest.confirmed_at).toLocaleString("es-MX", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      second: "2-digit",
                                      hour12: true,
                                    })}
                                  </span>
                                )}
                              </>
                            )}
                          </div>
                        </div>

                        {/* Mid Row: Passes Info / Editor */}
                        <div className="flex items-center justify-between text-xs bg-secondary/30 px-3 py-2 rounded-xl border border-border/40">
                          <span className="text-muted-foreground font-serif">Pases asignados:</span>
                          {isPending ? (
                            <div className="flex items-center gap-1.5">
                              <select
                                value={guest.passes_assigned}
                                onChange={(e) => handleUpdateGuestPasses(guest.id, parseInt(e.target.value))}
                                className="bg-background font-serif font-bold text-xs text-foreground px-2 py-0.5 rounded-lg border border-border focus:outline-none cursor-pointer"
                                title="Cambiar pases asignados"
                              >
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                                  <option key={num} value={num}>
                                    {num} {num === 1 ? "pase" : "pases"}
                                  </option>
                                ))}
                              </select>
                              <span className="text-[9px] text-amber-700 bg-amber-500/10 px-1.5 py-0.2 rounded font-serif font-bold uppercase">Editar</span>
                            </div>
                          ) : (
                            <span className="font-serif font-bold text-foreground">
                              {(() => {
                                const kids = guest.children_count ?? 0
                                const adults = guest.passes_assigned - kids
                                if (guest.passes_confirmed > 0) {
                                  return `${guest.passes_confirmed} confirmados de ${guest.passes_assigned}`
                                }
                                if (kids > 0) {
                                  return `${adults} adulto${adults !== 1 ? 's' : ''} + ${kids} niño${kids !== 1 ? 's' : ''}`
                                }
                                return `${guest.passes_assigned} pases`
                              })()}
                            </span>
                          )}
                        </div>

                        {/* Form Responses (if guest submitted details) */}
                        {guest.notes && (
                          <button
                            onClick={() => setDetailGuest(guest)}
                            className="w-full text-left bg-primary/5 hover:bg-primary/10 transition-all rounded-xl p-2.5 border border-primary/20 flex items-center justify-between gap-2 cursor-pointer shadow-2xs group"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <MessageSquareQuote className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
                              <span className="font-serif font-bold text-xs text-primary truncate">
                                Ver Respuestas del Cuestionario
                              </span>
                            </div>
                            <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full font-serif font-bold uppercase tracking-wider shrink-0">
                              Ver Detalle →
                            </span>
                          </button>
                        )}

                        {/* Bottom Row: Copy Personalized Invitation Link */}
                        <button
                          onClick={() => handleCopyLink(guest.token)}
                          className={`w-full py-2.5 rounded-full border text-xs font-serif font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-[0.98] ${
                            copiedToken === guest.token
                              ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                              : "bg-background hover:bg-secondary text-foreground border-border"
                          }`}
                          title="Copiar enlace personalizado del invitado"
                        >
                          <Copy className="w-3.5 h-3.5" strokeWidth={1.5} />
                          <span>{copiedToken === guest.token ? "¡Enlace Copiado al Portapapeles!" : "Copiar Enlace Personal"}</span>
                        </button>
                      </div>
                    )
                  })
                )}
              </div>

              {/* DESKTOP / TABLET TABLE VIEW (hidden on mobile) */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-muted/40 text-muted-foreground uppercase text-[10px] tracking-wider border-b border-border font-serif">
                    <tr>
                      <th className="py-3.5 px-6 font-bold">Invitado</th>
                      <th className="py-3.5 px-4 font-bold">Pases Asignados</th>
                      <th className="py-3.5 px-4 font-bold">Estatus RSVP</th>
                      <th className="py-3.5 px-4 font-bold">Notas / Respuestas</th>
                      <th className="py-3.5 px-6 font-bold text-right">Enlace Personal</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {filteredGuests.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="py-12 text-center text-muted-foreground font-serif">
                          No se encontraron invitados con los filtros seleccionados.
                        </td>
                      </tr>
                    ) : (
                      filteredGuests.map((guest) => {
                        const isConfirmed = guest.rsvp_status === "confirmed"
                        const isDeclined = guest.rsvp_status === "declined"
                        const isPending = guest.rsvp_status === "pending"

                        return (
                          <tr
                            key={guest.id}
                            className="hover:bg-muted/20 transition-colors group"
                          >
                            <td className="py-4 px-6">
                              <p className="font-serif font-bold text-sm text-foreground">{guest.name}</p>
                              {guest.phone && (
                                <p className="text-[11px] text-muted-foreground font-mono">
                                  {guest.phone}
                                </p>
                              )}
                            </td>

                            <td className="py-4 px-4 whitespace-nowrap font-serif">
                              {isConfirmed ? (
                                <div className="flex flex-col">
                                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                                    <CheckCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
                                    {guest.passes_confirmed} {guest.passes_confirmed === 1 ? "pase confirmado" : "pases confirmados"}
                                  </span>
                                  <span className="text-[10px] text-muted-foreground">
                                    {(() => {
                                      const kids = guest.children_count ?? 0
                                      const adults = guest.passes_assigned - kids
                                      if (kids > 0) return `de ${adults} adulto${adults !== 1 ? 's' : ''} + ${kids} niño${kids !== 1 ? 's' : ''} asignados`
                                      return `(de ${guest.passes_assigned} asignados)`
                                    })()}
                                  </span>
                                </div>
                              ) : isPending ? (
                                <div className="flex items-center gap-2">
                                  <select
                                    value={guest.passes_assigned}
                                    onChange={(e) => handleUpdateGuestPasses(guest.id, parseInt(e.target.value))}
                                    className="text-xs border border-border/80 rounded-xl bg-background px-2.5 py-1.5 font-serif font-bold text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer hover:border-primary/50 transition-colors shadow-2xs"
                                    title="Cambiar pases asignados para este invitado pendiente"
                                  >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20].map((num) => (
                                      <option key={num} value={num}>
                                        {num} {num === 1 ? "pase" : "pases"}
                                      </option>
                                    ))}
                                  </select>
                                  <span className="text-[10px] text-amber-700 bg-amber-500/10 px-2 py-0.5 rounded-full font-medium border border-amber-500/20">
                                    Editable
                                  </span>
                                </div>
                              ) : (
                                <span className="text-muted-foreground text-xs">
                                  {(() => {
                                    const kids = guest.children_count ?? 0
                                    const adults = guest.passes_assigned - kids
                                    if (kids > 0) return `${adults} adulto${adults !== 1 ? 's' : ''} + ${kids} niño${kids !== 1 ? 's' : ''} (Cancelado)`
                                    return `${guest.passes_assigned} pases (Cancelado)`
                                  })()}
                                </span>
                              )}
                            </td>

                            <td className="py-4 px-4 whitespace-nowrap">
                              {isConfirmed && (
                                <div className="flex flex-col">
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-serif font-bold bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 w-fit">
                                    <CheckCheck className="w-3.5 h-3.5" strokeWidth={1.5} />
                                    Confirmado
                                  </span>
                                  {guest.confirmed_at && (
                                    <span className="text-[10px] text-muted-foreground font-mono mt-1 flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-emerald-600 shrink-0" />
                                      {new Date(guest.confirmed_at).toLocaleString("es-MX", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: true,
                                      })}
                                    </span>
                                  )}
                                </div>
                              )}
                              {isPending && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-serif font-bold bg-amber-500/10 text-amber-600 border border-amber-500/20">
                                  <Hourglass className="w-3.5 h-3.5" strokeWidth={1.5} />
                                  Pendiente
                                </span>
                              )}
                              {isDeclined && (
                                <div className="flex flex-col">
                                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-serif font-bold bg-destructive/10 text-destructive border border-destructive/20 w-fit">
                                    <UserMinus className="w-3.5 h-3.5" strokeWidth={1.5} />
                                    No asistirá
                                  </span>
                                  {guest.confirmed_at && (
                                    <span className="text-[10px] text-muted-foreground font-mono mt-1 flex items-center gap-1">
                                      <Clock className="w-3 h-3 text-destructive shrink-0" />
                                      {new Date(guest.confirmed_at).toLocaleString("es-MX", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                        second: "2-digit",
                                        hour12: true,
                                      })}
                                    </span>
                                  )}
                                </div>
                              )}
                            </td>



                            <td className="py-4 px-4 whitespace-nowrap">
                              {guest.notes ? (
                                <button
                                  onClick={() => setDetailGuest(guest)}
                                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all text-xs font-serif font-semibold cursor-pointer shadow-2xs group"
                                  title="Ver respuestas completas del formulario"
                                >
                                  <MessageSquareQuote className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform shrink-0" />
                                  <span>Ver Respuestas</span>
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                </button>
                              ) : (
                                <span className="text-muted-foreground">—</span>
                              )}
                            </td>

                            <td className="py-4 px-6 text-right whitespace-nowrap">
                              <div className="flex items-center justify-end">
                                <button
                                  onClick={() => handleCopyLink(guest.token)}
                                  className="px-3.5 py-1.5 rounded-full border border-border bg-background hover:bg-secondary text-[11px] font-serif font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs hover:border-primary/40"
                                  title="Copiar enlace personalizado"
                                >
                                  <Copy className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                                  <span>{copiedToken === guest.token ? "¡Copiado!" : "Copiar Link"}</span>
                                </button>
                              </div>
                            </td>
                          </tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

      {/* Add Guest Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md bg-card text-card-foreground rounded-3xl shadow-2xl border border-border overflow-hidden p-6 sm:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h3 className="font-serif text-2xl font-bold text-foreground">
                Agregar Nuevo Invitado
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddGuest} className="space-y-4">
              <div>
                <label className="block text-xs font-serif font-bold text-foreground mb-1.5">
                  Nombre de la Familia / Invitado *
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="Ej. Familia Gómez o Carlos Mendoza"
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm font-serif focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold text-foreground mb-1.5">
                  Teléfono / WhatsApp (Opcional)
                </label>
                <input
                  type="tel"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  placeholder="Ej. +52 81 1234 5678"
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm font-serif focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div>
                <label className="block text-xs font-serif font-bold text-foreground mb-1.5">
                  Pases Asignados *
                </label>
                <input
                  type="number"
                  min={1}
                  max={20}
                  required
                  value={newPasses}
                  onChange={(e) => setNewPasses(parseInt(e.target.value) || 1)}
                  className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm font-serif focus:outline-none focus:ring-2 focus:ring-primary/40"
                />
              </div>

              <div className="pt-3 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="w-full py-3 rounded-full border border-border text-xs font-serif font-bold text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={addingGuest}
                  className="w-full py-3 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-serif font-bold uppercase tracking-wider cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2 shadow-md shadow-primary/20"
                >
                  {addingGuest ? <Loader2 className="w-4 h-4 animate-spin" /> : "Guardar Invitado"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* MODAL: DETALLE COMPLETO DE RESPUESTAS DEL FORMULARIO */}
      {detailGuest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-card text-card-foreground rounded-3xl shadow-2xl border border-border p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-lg border border-primary/20 shadow-2xs">
                  {detailGuest.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground">
                    {detailGuest.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-serif">
                    Respuestas del Formulario de Confirmación
                  </p>
                </div>
              </div>

              <button
                onClick={() => setDetailGuest(null)}
                className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-secondary/40 p-3.5 rounded-2xl border border-border space-y-1">
                <span className="text-[10px] uppercase font-serif font-bold text-muted-foreground tracking-wider block">
                  Estatus RSVP
                </span>
                <p className="font-serif font-bold text-sm text-foreground flex items-center gap-1.5">
                  {detailGuest.rsvp_status === "confirmed" ? (
                    <>
                      <CheckCheck className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600">Asistirá</span>
                    </>
                  ) : detailGuest.rsvp_status === "declined" ? (
                    <span className="text-destructive">No asistirá</span>
                  ) : (
                    <span className="text-amber-600">Pendiente</span>
                  )}
                </p>
              </div>

              <div className="bg-secondary/40 p-3.5 rounded-2xl border border-border space-y-1">
                <span className="text-[10px] uppercase font-serif font-bold text-muted-foreground tracking-wider block">
                  Pases Confirmados
                </span>
                <p className="font-serif font-bold text-sm text-foreground">
                  {detailGuest.passes_confirmed > 0
                    ? detailGuest.passes_confirmed
                    : detailGuest.rsvp_status === "confirmed"
                    ? detailGuest.passes_assigned
                    : 0}{" "}
                  de {detailGuest.passes_assigned} asignados
                </p>
              </div>
            </div>

            {/* Questions and Answers Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-serif font-bold uppercase tracking-wider text-muted-foreground">
                Cuestionario Respondido
              </h4>

              <div className="space-y-2.5">
                {detailGuest.notes ? (
                  detailGuest.notes.split(" | ").map((item, idx) => {
                    const colonIndex = item.indexOf(": ")
                    const label = colonIndex !== -1 ? item.substring(0, colonIndex) : "Nota"
                    const val = colonIndex !== -1 ? item.substring(colonIndex + 2) : item
                    
                    return (
                      <div key={idx} className="bg-background p-3.5 rounded-2xl border border-border space-y-1">
                        <span className="text-[11px] font-serif font-bold text-primary block tracking-wide">
                          {label}
                        </span>
                        <p className="text-xs text-foreground font-sans leading-relaxed">
                          {val}
                        </p>
                      </div>
                    )
                  })
                ) : (
                  <div className="bg-secondary/30 p-4 rounded-2xl border border-border text-center text-xs text-muted-foreground italic font-serif">
                    El invitado aún no ha registrado notas ni restricciones alimenticias adicionales.
                  </div>
                )}
              </div>
            </div>

            {/* Confirmation Timestamp */}
            {detailGuest.confirmed_at && (
              <div className="bg-secondary/40 p-3.5 rounded-2xl border border-border flex items-center justify-between text-xs">
                <span className="font-serif text-muted-foreground flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  <span>Respondido el:</span>
                </span>
                <span className="font-mono font-bold text-foreground">
                  {new Date(detailGuest.confirmed_at).toLocaleString("es-MX", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            )}

            <div className="pt-2 flex items-center gap-3 border-t border-border">
              <button
                onClick={() => setDetailGuest(null)}
                className="w-full py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-serif font-bold uppercase tracking-wider cursor-pointer shadow-sm transition-all"
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
