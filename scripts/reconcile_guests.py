import openpyxl, urllib.request, json

# 1. Read Excel file
excel_path = r'C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\INVITADOS_CARLA_Y_ANGEL_CON_LINKS.xlsx'
wb = openpyxl.load_workbook(excel_path)
sheet = wb.active

excel_guests = []
for row in sheet.iter_rows(min_row=2, values_only=True):
    name = row[0]
    phone = row[1]
    p_assigned = row[2]
    link = row[3] if len(row) > 3 else None
    if name:
        excel_guests.append({
            'name': str(name).strip(),
            'phone': str(phone).strip() if phone else None,
            'passes': int(p_assigned) if p_assigned else 1,
            'link': str(link).strip() if link else None
        })

excel_passes_total = sum(g['passes'] for g in excel_guests)
print(f'Total Guests in Excel: {len(excel_guests)}')
print(f'Total Passes in Excel: {excel_passes_total}')

# 2. Read Supabase Database
with open('.env.local', 'r', encoding='utf-8') as f:
    env = dict(line.strip().split('=', 1) for line in f if '=' in line and not line.startswith('#'))

url = env.get('NEXT_PUBLIC_SUPABASE_URL')
key = env.get('NEXT_PUBLIC_SUPABASE_ANON_KEY')

headers = {
    'apikey': key,
    'Authorization': f'Bearer {key}',
}

req = urllib.request.Request(
    f'{url}/rest/v1/guests?event_id=eq.bc3caeaa-31df-4168-aa73-54e7feda65af&select=*',
    headers=headers
)

with urllib.request.urlopen(req) as resp:
    db_guests = json.loads(resp.read().decode('utf-8'))

db_passes_total = sum(g['passes_assigned'] for g in db_guests)
print(f'Total Guests in Supabase: {len(db_guests)}')
print(f'Total Passes in Supabase: {db_passes_total}')

# 3. Match each guest by name
excel_names = {g['name'].strip().lower(): g for g in excel_guests}
db_names = {g['name'].strip().lower(): g for g in db_guests}

missing_in_db = [name for name in excel_names if name not in db_names]
missing_in_excel = [name for name in db_names if name not in excel_names]

passes_mismatch = []
for name, eg in excel_names.items():
    if name in db_names:
        dg = db_names[name]
        if eg['passes'] != dg['passes_assigned']:
            passes_mismatch.append((eg['name'], eg['passes'], dg['passes_assigned']))

print()
print(f'Missing in DB: {len(missing_in_db)}')
print(f'Missing in Excel: {len(missing_in_excel)}')
print(f'Passes Mismatches: {len(passes_mismatch)}')

print('\nVerification Sample (10 Random Guests):')
for i, g in enumerate(db_guests[:10]):
    print(f"  {i+1}. {g['name']} -> {g['passes_assigned']} pases | token: ?guest={g['token']}")
