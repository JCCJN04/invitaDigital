rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

with open(rsvp_path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Remove the emoji span from the thank you card
code = code.replace(
    """          <span style={{ fontSize: "1.75rem", display: "block", marginBottom: "0.5rem" }}>
            {attending === "confirmed" ? "✨" : "💌"}
          </span>""",
    ""
)

# 2. Remove the spark emoji from the intro form description
code = code.replace("breve formulario. ✨", "breve formulario.")

with open(rsvp_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Removed all sparkle/envelope emojis from GuestPassAndRsvp.tsx successfully!")
