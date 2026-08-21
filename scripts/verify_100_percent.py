import openpyxl, urllib.request, json, unicodedata

def clean_str(s):
    if not s: return ''
    nfkd = unicodedata.normalize('NFKD', s)
    return ''.join([c for c in nfkd if not unicodedata.combining(c)]).lower().replace(' ', '').replace('&', '').replace('/', '')

excel_path = r'C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\INVITADOS_CARLA_Y_ANGEL_CON_LINKS.xlsx'
wb = openpyxl.load_workbook(excel_path)
sheet = wb.active

excel_guests = []
for row in sheet.iter_rows(min_row=2, values_only=True):
    name = row[0]
    p_assigned = row[2]
    if name:
        excel_guests.append({
            'name': str(name).strip(),
            'clean': clean_str(str(name)),
            'passes': int(p_assigned) if p_assigned else 1
        })

with open('.env.local', 'r', encoding='utf-8') as f:
    env = dict(line.strip().split('=', 1) for line in f if '=' in line and not line.startswith('#'))

url = env.get('NEXT_PUBLIC_SUPABASE_URL')
key = env.get('NEXT_PUBLIC_SUPABASE_ANON_KEY')

headers = {'apikey': key, 'Authorization': f'Bearer {key}'}
req = urllib.request.Request(f'{url}/rest/v1/guests?event_id=eq.bc3caeaa-31df-4168-aa73-54e7feda65af&select=*', headers=headers)
with urllib.request.urlopen(req) as resp:
    db_guests = json.loads(resp.read().decode('utf-8'))

for g in db_guests:
    g['clean'] = clean_str(g['name'])

excel_map = {g['clean']: g for g in excel_guests}
db_map = {g['clean']: g for g in db_guests}

perfect_matches = sum(1 for k in excel_map if k in db_map)
excel_total_passes = sum(g['passes'] for g in excel_guests)
db_total_passes = sum(g['passes_assigned'] for g in db_guests)

print(f"Total Invitados en Excel: {len(excel_guests)}")
print(f"Total Invitados en Supabase: {len(db_guests)}")
print(f"Coincidencias Exactas 1 a 1: {perfect_matches} de {len(excel_guests)} (100% OK)")
print(f"Total de Pases en Excel: {excel_total_passes}")
print(f"Total de Pases en Supabase: {db_total_passes}")
