panel_file = r"c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\components\panel-client-view.tsx"

with open(panel_file, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Action buttons in hero banner: grid-cols-2 on mobile, flex on desktop
old_hero_actions = """          {/* Action Buttons: PDF & + Nuevo Invitado */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {/* Export PDF Document */}
            <button
              onClick={handleExportPDF}
              className="px-4 sm:px-5 py-2.5 rounded-full border border-border bg-card hover:bg-secondary text-xs font-serif font-bold text-foreground flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow"
              title="Descargar Reporte en PDF"
            >
              <FileText className="w-4 h-4 text-primary" strokeWidth={1.5} />
              <span>Descargar PDF</span>
            </button>

            {/* Add Guest Button */}
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 sm:px-5 py-2.5 rounded-full bg-primary hover:bg-primary-hover text-primary-foreground text-xs font-serif font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" strokeWidth={1.5} />
              <span>Nuevo Invitado</span>
            </button>
          </div>"""

new_hero_actions = """          {/* Action Buttons: PDF & + Nuevo Invitado (Mobile First 2-col grid) */}
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
          </div>"""

if old_hero_actions in code:
    code = code.replace(old_hero_actions, new_hero_actions)
    print("1. Made Hero Action buttons 2-col responsive on mobile")

# 2. Update Mobile Guest Cards to be ultra-clean luxury cards
old_mobile_cards = """              {/* MOBILE GUEST LIST VIEW (< md screens) — Ultra Clean Luxury Contacts */}
              <div className="block md:hidden divide-y divide-border/60">
                {filteredGuests.length === 0 ? (
                  <div className="py-12 text-center text-muted-foreground font-serif text-xs">
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
                        className="p-4 bg-card hover:bg-secondary/20 transition-colors space-y-3"
                      >
                        {/* Row 1: Avatar + Name & Phone + Status Badge */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif font-bold text-sm shrink-0 border border-primary/20 shadow-2xs">
                              {guest.name.charAt(0).toUpperCase()}
                            </div>

                            <div className="min-w-0 flex-1">
                              <h4 className="font-serif font-bold text-sm text-foreground truncate">
                                {guest.name}
                              </h4>
                              <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground mt-0.5 truncate">
                                {guest.phone && (
                                  <span className="font-mono">{guest.phone}</span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div className="shrink-0">
                            {isConfirmed && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-serif font-bold bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 shadow-2xs">
                                <CheckCheck className="w-3.5 h-3.5 text-emerald-600" strokeWidth={1.5} />
                                {guest.passes_confirmed > 0 ? guest.passes_confirmed : guest.passes_assigned} {guest.passes_confirmed === 1 ? "pase" : "pases"}
                              </span>
                            )}
                            {isPending && (
                              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-serif font-bold bg-amber-500/10 text-amber-800 border border-amber-500/25 shadow-2xs">
                                <Hourglass className="w-3 h-3 text-amber-600 shrink-0" strokeWidth={1.5} />
                                <select
                                  value={guest.passes_assigned}
                                  onChange={(e) => handleUpdateGuestPasses(guest.id, parseInt(e.target.value))}
                                  className="bg-transparent font-serif font-bold text-[10px] text-amber-900 focus:outline-none cursor-pointer py-0.5"
                                  title="Editar número de pases asignados"
                                >
                                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                    <option key={num} value={num}>
                                      {num} {num === 1 ? "pase" : "pases"}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            )}
                            {isDeclined && (
                              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-serif font-bold bg-destructive/10 text-destructive border border-destructive/20 shadow-2xs">
                                <UserMinus className="w-3.5 h-3.5 text-destructive" strokeWidth={1.5} />
                                Cancelado
                              </span>
                            )}
                          </div>
                        </div>

                        {guest.notes && (
                          <button
                            onClick={() => setDetailGuest(guest)}
                            className="w-full text-left bg-secondary/50 hover:bg-secondary/80 transition-colors rounded-xl px-3 py-2 text-[11px] text-muted-foreground border border-border/60 flex items-center justify-between gap-2 cursor-pointer shadow-2xs"
                          >
                            <div className="flex items-center gap-1.5 min-w-0">
                              <MessageSquareQuote className="w-3.5 h-3.5 text-primary shrink-0" strokeWidth={1.5} />
                              <span className="italic truncate text-foreground font-sans">"{guest.notes}"</span>
                            </div>
                            <span className="text-[10px] text-primary font-serif font-bold uppercase tracking-wider shrink-0">Ver Detalle →</span>
                          </button>
                        )}

                        <div className="flex items-center justify-end gap-2 pt-2 border-t border-border/40">
                          <button
                            onClick={() => handleCopyLink(guest.token)}
                            className="px-4 py-1.5 rounded-full border border-border bg-background hover:bg-secondary text-xs font-serif font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                            title="Copiar Link"
                          >
                            <Copy className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                            <span>{copiedToken === guest.token ? "¡Enlace Copiado!" : "Copiar Link Personal"}</span>
                          </button>
                        </div>
                      </div>
                    )
                  })
                )}
              </div>"""

new_mobile_cards = """              {/* MOBILE GUEST LIST VIEW (< md screens) — Luxury App-Like Contact Cards */}
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
                              {guest.passes_confirmed > 0 ? `${guest.passes_confirmed} confirmados de ${guest.passes_assigned}` : `${guest.passes_assigned} pases`}
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
              </div>"""

if old_mobile_cards in code:
    code = code.replace(old_mobile_cards, new_mobile_cards)
    print("2. Upgraded Mobile Guest Cards to luxury app-like design")
else:
    print("Warning: old_mobile_cards pattern not matched")

with open(panel_file, "w", encoding="utf-8") as f:
    f.write(code)

print("Saved panel mobile-first upgrades successfully!")
