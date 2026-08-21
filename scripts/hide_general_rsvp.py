page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"
rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

# 1. Update page.tsx to only render RSVP section if guest exists
with open(page_path, "r", encoding="utf-8") as f:
    page_code = f.read()

old_rsvp_sec = """        {/* ══ 8. RSVP ════════════════════════════════════ */}
        <section className="v2-section">
          <div className="v2-card" style={{ overflow: "visible" }}>
            <div className="v2-card-pad">
              <p className="v2-section-label">Confirmación de asistencia</p>
              <h2 className="v2-section-title">¿Nos acompañas?</h2>

              <GuestPassAndRsvp />
            </div>
          </div>
        </section>"""

new_rsvp_sec = """        {/* ══ 8. RSVP (Solo visible con enlace personalizado del invitado) ═════ */}
        {guest && (
          <section className="v2-section">
            <div className="v2-card" style={{ overflow: "visible" }}>
              <div className="v2-card-pad">
                <p className="v2-section-label">Confirmación de asistencia</p>
                <h2 className="v2-section-title">¿Nos acompañas?</h2>

                <GuestPassAndRsvp />
              </div>
            </div>
          </section>
        )}"""

if old_rsvp_sec in page_code:
    page_code = page_code.replace(old_rsvp_sec, new_rsvp_sec)
    print("1. Updated page.tsx: RSVP section only renders when guest is present")
else:
    print("Warning: old_rsvp_sec not matched exactly in page.tsx")

with open(page_path, "w", encoding="utf-8") as f:
    f.write(page_code)

# 2. Update GuestPassAndRsvp.tsx to return null if !guest
with open(rsvp_path, "r", encoding="utf-8") as f:
    rsvp_code = f.read()

old_no_guest = """  if (!guest) {
    return (
      <div style={{ textAlign: "center", padding: "1.5rem 1rem", color: "#5C5040" }}>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}>
          Por favor abre tu invitación desde tu enlace personalizado para confirmar tu asistencia.
        </p>
      </div>
    );
  }"""

new_no_guest = """  if (!guest) {
    return null;
  }"""

if old_no_guest in rsvp_code:
    rsvp_code = rsvp_code.replace(old_no_guest, new_no_guest)
    print("2. Updated GuestPassAndRsvp.tsx: returns null when no guest token")
else:
    print("Warning: old_no_guest not matched in GuestPassAndRsvp.tsx")

with open(rsvp_path, "w", encoding="utf-8") as f:
    f.write(rsvp_code)

print("Saved both updates successfully!")
