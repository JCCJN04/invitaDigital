"use client"

import React, { useState } from "react"
import { loginPanelAction } from "@/app/actions/panel-auth"
import { Lock, Eye, EyeOff, Loader2, ArrowRight, ShieldCheck, Heart, Sparkles, User } from "lucide-react"
import Link from "next/link"
import type { Event } from "@/lib/supabase"

interface PanelLoginGateProps {
  event: Event
  slug: string
  onSuccess?: () => void
}

export function PanelLoginGate({ event, slug, onSuccess }: PanelLoginGateProps) {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!password.trim()) {
      setError("Por favor ingresa tu contraseña.")
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await loginPanelAction(slug, password)
      if (res.success) {
        if (onSuccess) {
          onSuccess()
        } else {
          window.location.reload()
        }
      } else {
        setError(res.error || "Contraseña incorrecta.")
      }
    } catch (err: any) {
      setError(err.message || "Error al conectar con el servidor.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[100dvh] bg-[#FAF8F5] text-foreground flex flex-col justify-between px-4 py-5 sm:px-6 sm:py-8 font-sans selection:bg-primary/20">
      
      {/* Top Header Bar */}
      <header className="w-full max-w-md mx-auto flex items-center justify-between gap-2 pb-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-serif font-bold text-sm shadow-sm">
            i
          </div>
          <span className="font-serif font-bold text-foreground text-xs sm:text-sm tracking-tight">
            InvitacionesDigitales<span className="text-primary font-serif">MTY</span>
          </span>
        </Link>

        <Link
          href={`/${slug}`}
          target="_blank"
          className="text-xs font-serif font-semibold text-primary hover:text-primary-hover transition-colors flex items-center gap-1 shrink-0"
        >
          <span>Invitación General</span>
          <ArrowRight className="w-3 h-3" />
        </Link>
      </header>

      {/* Main Card Container */}
      <main className="w-full max-w-md mx-auto my-auto py-2 sm:py-6">
        <div className="bg-card text-card-foreground rounded-3xl border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.05)] p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-300 relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none -mr-10 -mt-10" />
          
          {/* Sello de Gala & Título */}
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto border border-primary/20 shadow-2xs">
              <Lock className="w-6 h-6 text-primary" strokeWidth={1.5} />
            </div>

            <div className="pt-1">
              <span className="inline-block text-[10px] uppercase font-serif font-bold tracking-[0.2em] text-primary">
                Panel Exclusivo de Anfitriones
              </span>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {event.title}
            </h1>

            <p className="text-xs text-muted-foreground font-serif max-w-xs mx-auto">
              Ingresa la contraseña de tu evento para consultar las respuestas de tus invitados.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 pt-1">
            <div className="space-y-1.5">
              <label className="block text-xs font-serif font-bold text-foreground">
                Contraseña / Código de Acceso
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (error) setError(null)
                  }}
                  autoFocus
                  placeholder="Escribe tu contraseña..."
                  className="w-full pl-4 pr-11 py-3.5 rounded-2xl border border-border bg-background text-base sm:text-sm font-serif text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all placeholder:text-muted-foreground shadow-2xs"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer p-1.5"
                  title={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" strokeWidth={1.5} />
                  ) : (
                    <Eye className="w-4 h-4" strokeWidth={1.5} />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-2xl bg-destructive/10 border border-destructive/20 text-destructive text-xs font-serif font-semibold animate-in fade-in duration-200 text-center">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground font-serif font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-primary/25 transition-all disabled:opacity-50 active:scale-[0.98]"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Verificando...</span>
                </>
              ) : (
                <>
                  <span>Ingresar al Panel</span>
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </>
              )}
            </button>
          </form>

          {/* Security badge */}
          <div className="pt-2 border-t border-border/60 flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground font-serif text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" strokeWidth={1.5} />
            <span>Acceso privado protegido y encriptado</span>
          </div>
        </div>
      </main>

      {/* Footer Safe Area */}
      <footer className="w-full max-w-md mx-auto pt-4 pb-2 text-center text-[10px] sm:text-[11px] text-muted-foreground font-serif">
        InvitacionesDigitalesMTY · Sistema de Confirmaciones en Tiempo Real
      </footer>
    </div>
  )
}
