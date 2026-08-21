import json
import urllib.request
import os

EVENT_ID = "bc3caeaa-31df-4168-aa73-54e7feda65af"

def load_env():
    env = {}
    if os.path.exists(".env.local"):
        with open(".env.local", "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith("#") and "=" in line:
                    k, v = line.split("=", 1)
                    env[k.strip()] = v.strip()
    return env

def main():
    env = load_env()
    supabase_url = env.get("NEXT_PUBLIC_SUPABASE_URL")
    supabase_key = env.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
    
    if not supabase_url or not supabase_key:
        print("Error: No Supabase credentials found in .env.local")
        return
        
    with open("carlayangel_guests.json", "r", encoding="utf-8") as f:
        guests = json.load(f)
        
    headers = {
        "apikey": supabase_key,
        "Authorization": f"Bearer {supabase_key}",
        "Content-Type": "application/json",
        "Prefer": "resolution=merge-duplicates"
    }
    
    # Prepare records for Supabase guests table
    records = []
    for g in guests:
        records.append({
            "event_id": EVENT_ID,
            "name": g["name"],
            "token": g["token"],
            "passes_assigned": g["passes_assigned"],
            "passes_confirmed": 0,
            "rsvp_status": "pending",
            "table_assigned": None,
            "qr_code_url": None,
            "whatsapp_sent": False,
            "whatsapp_delivered": False,
            "notes": g["notes"]
        })
        
    # Batch insert in chunks of 50
    chunk_size = 50
    total_inserted = 0
    for i in range(0, len(records), chunk_size):
        chunk = records[i:i + chunk_size]
        data = json.dumps(chunk).encode("utf-8")
        req = urllib.request.Request(f"{supabase_url}/rest/v1/guests", data=data, headers=headers, method="POST")
        try:
            with urllib.request.urlopen(req) as resp:
                total_inserted += len(chunk)
                print(f"Sincronizados {total_inserted}/{len(records)} invitados...")
        except urllib.error.HTTPError as e:
            print(f"Error HTTP {e.code}: {e.read().decode()}")
            
    print(f"¡Sincronización completada! {total_inserted} invitados registrados en la base de datos.")

if __name__ == "__main__":
    main()
