import os

rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

with open(rsvp_path, "r", encoding="utf-8") as f:
    code = f.read()

# Fix the note accumulation bug in handleConfirm
old_payload_part = """      const combinedNotes = notesParts.join(" | ");

      const payload = {
        rsvp_status: attending,
        passes_confirmed: attending === "confirmed" ? passesToConfirm : 0,
        confirmed_at: new Date().toISOString(),
        notes: combinedNotes ? `${guest.notes ? guest.notes + " | " : ""}${combinedNotes}` : guest.notes,
      };"""

new_payload_part = """      const combinedNotes = notesParts.join(" | ");

      const payload = {
        rsvp_status: attending,
        passes_confirmed: attending === "confirmed" ? passesToConfirm : 0,
        confirmed_at: new Date().toISOString(),
        notes: combinedNotes || null,
      };"""

if old_payload_part in code:
    code = code.replace(old_payload_part, new_payload_part)
    with open(rsvp_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Fixed notes accumulation in GuestPassAndRsvp.tsx successfully!")
else:
    print("Warning: old_payload_part not matched in GuestPassAndRsvp.tsx")
