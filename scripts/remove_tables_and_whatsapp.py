import re

panel_file = r"c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\components\panel-client-view.tsx"

with open(panel_file, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Remove the Seating tab switcher and make guests view direct
old_tabs_and_seating = r'\{\/\* Navigation Segmented Control Tabs \*\/\}([\s\S]*?)\{\/\* VIEW 2: GUESTS LIST & RSVP TABLE \/ RESPONSIVE MOBILE CARDS\s*\*\/\}\s*\{activeTab === "guests" && \('

new_guests_direct = '{/* GUESTS LIST & RSVP TABLE */}\n          ('

if re.search(old_tabs_and_seating, code):
    code = re.sub(old_tabs_and_seating, new_guests_direct, code)
    print("1. Removed Seating tab switcher and 2D floor plan view")
else:
    print("Warning: old_tabs_and_seating pattern not matched")

# Also remove the closing parenthesis of activeTab === 'guests'
code = code.replace(
    '            </div>\n          </div>\n        )}\n      </div>\n\n      {/* MODAL: IMPORTAR INVITADOS */}',
    '            </div>\n          </div>\n        </div>\n\n      {/* MODAL: IMPORTAR INVITADOS */}'
)

# 2. In desktop table header: remove Mesa Asignada and WhatsApp columns
old_thead = """                    <tr>
                      <th className="py-3.5 px-6 font-bold">Invitado</th>
                      <th className="py-3.5 px-4 font-bold">Pases Asignados</th>
                      <th className="py-3.5 px-4 font-bold">Estatus RSVP</th>
                      <th className="py-3.5 px-4 font-bold">Mesa Asignada</th>
                      <th className="py-3.5 px-4 font-bold">
                        <span className="inline-flex items-center gap-1.5">
                          <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
                          WhatsApp
                        </span>
                      </th>
                      <th className="py-3.5 px-4 font-bold">Notas / Mensaje</th>
                      <th className="py-3.5 px-6 font-bold text-right">Enlace Personal</th>
                    </tr>"""

new_thead = """                    <tr>
                      <th className="py-3.5 px-6 font-bold">Invitado</th>
                      <th className="py-3.5 px-4 font-bold">Pases Asignados</th>
                      <th className="py-3.5 px-4 font-bold">Estatus RSVP</th>
                      <th className="py-3.5 px-4 font-bold">Notas / Respuestas</th>
                      <th className="py-3.5 px-6 font-bold text-right">Enlace Personal</th>
                    </tr>"""

if old_thead in code:
    code = code.replace(old_thead, new_thead)
    print("2. Updated desktop table header (removed Mesas & WhatsApp columns)")

# 3. In desktop table row: remove table selector td and whatsapp sent status td
old_row_middle = """                            <td className="py-4 px-4 whitespace-nowrap">
                              <select
                                value={guest.table_assigned || ""}
                                onChange={(e) => handleUpdateGuestTable(guest.id, e.target.value)}
                                className="text-xs border border-border rounded-xl bg-background px-3 py-1.5 font-serif font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer"
                              >
                                <option value="">Sin mesa</option>
                                {floorTables.map((t) => (
                                  <option key={t.id} value={t.id}>{t.label}</option>
                                ))}
                              </select>
                            </td>

                            <td className="py-4 px-4 whitespace-nowrap">
                              {guest.whatsapp_sent ? (
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20">
                                  <WhatsAppIcon className="w-3 h-3 fill-current" />
                                  Enviado
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-muted text-muted-foreground border border-border">
                                  <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                                  Pendiente
                                </span>
                              )}
                            </td>"""

if old_row_middle in code:
    code = code.replace(old_row_middle, "")
    print("3. Removed Mesa select and WhatsApp status cells from desktop rows")

# 4. In desktop actions: remove WhatsApp action button (keep only Copiar Link)
old_actions = """                              <div className="flex items-center justify-end gap-2">
                                <button
                                  onClick={() => handleCopyLink(guest.token)}
                                  className="px-3 py-1.5 rounded-full border border-border bg-background hover:bg-secondary text-[11px] font-serif font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                                  title="Copiar enlace personalizado"
                                >
                                  <Copy className="w-3 h-3 text-muted-foreground" strokeWidth={1.5} />
                                  {copiedToken === guest.token ? "¡Copiado!" : "Copiar Link"}
                                </button>
                                {guest.phone && (
                                  <a
                                    href={`https://wa.me/${guest.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                      `Hola ${guest.name}, te compartimos tu invitación a nuestra ${event.event_type === "boda" ? "boda" : "evento"}: ${typeof window !== "undefined" ? window.location.origin : "https://www.invitacionesdigitalesmty.com.mx"}/${slug}?guest=${guest.token}`
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all flex items-center gap-1.5 text-[11px] font-serif font-bold cursor-pointer shadow-xs"
                                    title="Enviar por WhatsApp"
                                  >
                                    <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
                                    <span>WhatsApp</span>
                                  </a>
                                )}
                              </div>"""

new_actions = """                              <div className="flex items-center justify-end">
                                <button
                                  onClick={() => handleCopyLink(guest.token)}
                                  className="px-3.5 py-1.5 rounded-full border border-border bg-background hover:bg-secondary text-[11px] font-serif font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs hover:border-primary/40"
                                  title="Copiar enlace personalizado"
                                >
                                  <Copy className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                                  <span>{copiedToken === guest.token ? "¡Copiado!" : "Copiar Link"}</span>
                                </button>
                              </div>"""

if old_actions in code:
    code = code.replace(old_actions, new_actions)
    print("4. Removed WhatsApp send button from desktop actions")

# 5. In mobile view: remove table select and WhatsApp send button
old_mobile_bottom = """                        <div className="flex items-center justify-between gap-2 pt-2 border-t border-border/40">
                          <div className="flex-1 min-w-0 max-w-[170px]">
                            <select
                              value={guest.table_assigned || ""}
                              onChange={(e) => handleUpdateGuestTable(guest.id, e.target.value)}
                              className="w-full text-[11px] border border-border rounded-full bg-background px-3 py-1 font-serif font-semibold text-foreground focus:outline-none focus:ring-1 focus:ring-primary cursor-pointer truncate"
                            >
                              <option value="">Cambiar mesa...</option>
                              {floorTables.map((t) => (
                                <option key={t.id} value={t.id}>
                                  {t.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => handleCopyLink(guest.token)}
                              className="px-3 py-1 rounded-full border border-border bg-background hover:bg-secondary text-[11px] font-serif font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
                              title="Copiar Link"
                            >
                              <Copy className="w-3 h-3 text-muted-foreground" strokeWidth={1.5} />
                              <span>{copiedToken === guest.token ? "Listo" : "Copiar"}</span>
                            </button>

                            {guest.phone && (
                              <a
                                href={`https://wa.me/${guest.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                  `Hola ${guest.name}, te compartimos tu invitación a nuestra ${event.event_type === "boda" ? "boda" : "evento"}: ${typeof window !== "undefined" ? window.location.origin : "https://www.invitacionesdigitalesmty.com.mx"}/${slug}?guest=${guest.token}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1 rounded-full bg-[#25D366] text-white hover:bg-[#20ba59] transition-all flex items-center gap-1.5 text-[11px] font-bold cursor-pointer shadow-2xs"
                                title="Enviar WhatsApp"
                              >
                                <WhatsAppIcon className="w-3 h-3 fill-current" />
                                <span>Enviar</span>
                              </a>
                            )}
                          </div>
                        </div>"""

new_mobile_bottom = """                        <div className="flex items-center justify-end gap-2 pt-2 border-t border-border/40">
                          <button
                            onClick={() => handleCopyLink(guest.token)}
                            className="px-4 py-1.5 rounded-full border border-border bg-background hover:bg-secondary text-xs font-serif font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                            title="Copiar Link"
                          >
                            <Copy className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                            <span>{copiedToken === guest.token ? "¡Enlace Copiado!" : "Copiar Link Personal"}</span>
                          </button>
                        </div>"""

if old_mobile_bottom in code:
    code = code.replace(old_mobile_bottom, new_mobile_bottom)
    print("5. Simplified mobile row (kept Copiar Link Personal only)")

with open(panel_file, "w", encoding="utf-8") as f:
    f.write(code)

print("Cleaned panel-client-view.tsx successfully!")

# Also clean GuestPassAndRsvp.tsx in boda carla y angel to remove any table references
other_rsvp = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"
with open(other_rsvp, "r", encoding="utf-8") as f:
    rsvp_code = f.read()

rsvp_code = re.sub(r'\{guest\.table_assigned && \([\s\S]*?\)\}', '', rsvp_code)
with open(other_rsvp, "w", encoding="utf-8") as f:
    f.write(rsvp_code)
print("Cleaned GuestPassAndRsvp.tsx table references!")
