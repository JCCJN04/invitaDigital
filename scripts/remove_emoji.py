import re

rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

with open(rsvp_path, "r", encoding="utf-8") as f:
    code = f.read()

# Remove the emoji span from the thank you screen
old_emoji_span = r'<span style=\{\{\s*fontSize:\s*"1\.75rem",\s*display:\s*"block",\s*marginBottom:\s*"0\.5rem"\s*\}\}>\s*✨\s*<\/span>'

if re.search(old_emoji_span, code):
    code = re.sub(old_emoji_span, '', code)
    print("Removed emoji span with regex successfully!")
else:
    # Fallback string replace
    code = code.replace('<span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.5rem" }}>✨</span>', '')
    print("Replaced emoji span with string replace")

with open(rsvp_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Saved GuestPassAndRsvp.tsx successfully!")
