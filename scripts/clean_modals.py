panel_file = r"c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\components\panel-client-view.tsx"

with open(panel_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
skip = False

for line in lines:
    if "{/* MODAL: IMPORTAR INVITADOS */}" in line:
        skip = True
    
    if skip:
        if "{/* Add Guest Modal */}" in line:
            skip = False
            new_lines.append("      {/* Add Guest Modal */}\n")
        continue
    else:
        new_lines.append(line)

code = "".join(new_lines)

# Clean isAddModalOpen form inputs (remove mesa selector)
old_passes_grid = """              <div className="grid grid-cols-2 gap-3">
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
                <div>
                  <label className="block text-xs font-serif font-bold text-foreground mb-1.5">
                    Mesa en el Plano
                  </label>
                  <select
                    value={newTable}
                    onChange={(e) => setNewTable(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl border border-border bg-background text-sm font-serif focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
                  >
                    <option value="">Sin mesa</option>
                    {floorTables.map((t) => (
                      <option key={t.id} value={t.id}>{t.label}</option>
                    ))}
                  </select>
                </div>
              </div>"""

new_passes_field = """              <div>
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
              </div>"""

if old_passes_grid in code:
    code = code.replace(old_passes_grid, new_passes_field)
    print("Cleaned isAddModalOpen form inputs")

with open(panel_file, "w", encoding="utf-8") as f:
    f.write(code)

print("Modals cleaned successfully!")
