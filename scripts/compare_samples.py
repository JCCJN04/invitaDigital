import openpyxl, urllib.request, json

wb = openpyxl.load_workbook(r'C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\INVITADOS_CARLA_Y_ANGEL_CON_LINKS.xlsx')
sheet = wb.active

print("Excel first 4 rows:")
for row in list(sheet.iter_rows(min_row=2, max_row=5, values_only=True)):
    print("  ->", repr(row[0]), "| Pases:", row[2])

with open('.env.local', 'r', encoding='utf-8') as f:
    env = dict(line.strip().split('=', 1) for line in f if '=' in line and not line.startswith('#'))

key = env['NEXT_PUBLIC_SUPABASE_ANON_KEY']
url = env['NEXT_PUBLIC_SUPABASE_URL']
headers = {'apikey': key, 'Authorization': f'Bearer {key}'}

req = urllib.request.Request(f'{url}/rest/v1/guests?event_id=eq.bc3caeaa-31df-4168-aa73-54e7feda65af&limit=4', headers=headers)
with urllib.request.urlopen(req) as resp:
    db_items = json.loads(resp.read().decode('utf-8'))

print("\nDB first 4 rows:")
for g in db_items:
    print("  ->", repr(g['name']), "| Pases:", g['passes_assigned'], "| Token:", g['token'])
