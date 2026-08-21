import re

page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"
rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

# Clean page.tsx
with open(page_path, "r", encoding="utf-8") as f:
    page_code = f.read()

page_code = re.sub(
    r'const supabaseKey = process\.env\.NEXT_PUBLIC_SUPABASE_ANON_KEY \|\| "[^"]+"',
    'const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""',
    page_code
)
page_code = re.sub(
    r'const supabaseUrl = process\.env\.NEXT_PUBLIC_SUPABASE_URL \|\| "[^"]+"',
    'const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""',
    page_code
)

with open(page_path, "w", encoding="utf-8") as f:
    f.write(page_code)

# Clean GuestPassAndRsvp.tsx
with open(rsvp_path, "r", encoding="utf-8") as f:
    rsvp_code = f.read()

rsvp_code = re.sub(
    r'const supabaseKey = process\.env\.NEXT_PUBLIC_SUPABASE_ANON_KEY \|\| "[^"]+"',
    'const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""',
    rsvp_code
)
rsvp_code = re.sub(
    r'const supabaseUrl = process\.env\.NEXT_PUBLIC_SUPABASE_URL \|\| "[^"]+"',
    'const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""',
    rsvp_code
)

with open(rsvp_path, "w", encoding="utf-8") as f:
    f.write(rsvp_code)

print("Secured environment variables and removed hardcoded fallback keys!")
