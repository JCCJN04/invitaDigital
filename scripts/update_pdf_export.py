import re

panel_file = r"c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\components\panel-client-view.tsx"

with open(panel_file, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update handleExportPDF to use in-place hidden iframe
new_handle_export_pdf = """  // EXPORT: EXECUTIVE PDF (Direct in-place print/download without opening blank page)
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
        </td>
        <td style="padding: 10px 12px; color: #555; font-size: 11px;">${g.notes || "—"}</td>
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
  }"""

# Replace old handleExportPDF
pattern_export = r'\/\/\s*EXPORT 2: EXECUTIVE BANQUET PDF[\s\S]*?printWindow\.focus\(\)[\s\S]*?printWindow\.print\(\)[\s\S]*?\}'

if re.search(pattern_export, code):
    code = re.sub(pattern_export, new_handle_export_pdf.strip(), code)
    print("1. Replaced handleExportPDF with in-place iframe printing")
else:
    print("Warning: pattern_export not matched")

# 2. Update hero action buttons: Keep only PDF and + Nuevo Invitado
old_hero_buttons = """          {/* Clean Action Buttons: Excel, PDF, Import & + Nuevo Invitado */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-wrap">
            {/* Export Excel (.CSV) */}
            <button
              onClick={handleExportCSV}
              className="px-3.5 sm:px-4 py-2.5 rounded-full border border-border bg-background hover:bg-secondary text-xs font-serif font-bold text-foreground flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:shadow"
              title="Descargar tabla en formato Excel (.CSV)"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" strokeWidth={1.5} />
              <span>Excel</span>
            </button>

            {/* Export PDF Document */}
            <button
              onClick={handleExportPDF}
              className="px-3.5 sm:px-4 py-2.5 rounded-full border border-border bg-background hover:bg-secondary text-xs font-serif font-bold text-foreground flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs hover:shadow"
              title="Generar e imprimir Reporte Oficial en PDF"
            >
              <FileText className="w-4 h-4 text-[#8C3A5A]" strokeWidth={1.5} />
              <span>PDF</span>
            </button>

            {/* Import Button */}
            <button
              onClick={() => setIsImportModalOpen(true)}
              className="px-3.5 sm:px-4 py-2.5 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-xs font-serif font-bold text-primary flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs"
              title="Importar lista de invitados desde archivo o texto"
            >
              <FileUp className="w-4 h-4" strokeWidth={1.5} />
              <span>Importar</span>
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

new_hero_buttons = """          {/* Action Buttons: PDF & + Nuevo Invitado */}
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

if old_hero_buttons in code:
    code = code.replace(old_hero_buttons, new_hero_buttons)
    print("2. Replaced action buttons (removed Excel & Importar, enhanced Descargar PDF)")
else:
    print("Warning: old_hero_buttons not matched exactly")

with open(panel_file, "w", encoding="utf-8") as f:
    f.write(code)

print("Cleaned panel-client-view.tsx successfully!")
