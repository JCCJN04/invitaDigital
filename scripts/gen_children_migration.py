import sys, io, os
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import openpyxl, re

wb = openpyxl.load_workbook(r'C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\INVITADOS_CARLA_Y_ANGEL_CON_LINKS.xlsx')
ws = wb.active

sql_lines = [
    "-- 1. Agregar columna children_count a la tabla guests",
    "ALTER TABLE guests ADD COLUMN IF NOT EXISTS children_count INT DEFAULT 0;",
    "",
    "-- 2. Actualizar familias con ninos",
]

for row in ws.iter_rows(min_row=2, values_only=True):
    if row[1] and row[3]:
        detalle = str(row[3])
        m = re.search(r'Ni[ñn]os?:\s*(\d+)', detalle, re.IGNORECASE)
        if m:
            kids = int(m.group(1))
            link = row[4] or ''
            token = link.split('guest=')[-1] if 'guest=' in link else ''
            if token:
                sql_lines.append(f"UPDATE guests SET children_count = {kids} WHERE token = '{token}';")

sql = '\n'.join(sql_lines)
print(sql)

os.makedirs(r'c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\docs', exist_ok=True)
with open(r'c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\docs\migration_children_count.sql', 'w', encoding='utf-8') as f:
    f.write(sql)
print("\nSQL guardado en docs/migration_children_count.sql")
