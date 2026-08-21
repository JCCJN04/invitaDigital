target_rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

with open(target_rsvp_path, "r", encoding="utf-8") as f:
    code = f.read()

# Let's replace the form portion to dynamically change labels and button text when declined
old_form_part = """          <div style={{ marginBottom: "1.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "0.95rem",
                color: "#3a3028",
                marginBottom: "0.4rem",
              }}
            >
              Restricciones alimenticias o mensaje (opcional):
            </p>
            <textarea
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              placeholder="Ej. Vegetariano, alergia a nueces o un mensaje para los novios..."
              rows={2}
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(139,98,72,0.25)",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1rem",
                color: "#3a3028",
                boxSizing: "border-box",
                background: "#FFF",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "0.85rem 1.5rem",
              borderRadius: "2rem",
              border: "none",
              background: "linear-gradient(135deg, #8B6248, #6F4E38)",
              color: "#FFF",
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: submitting ? "not-allowed" : "pointer",
              boxShadow: "0 4px 14px rgba(139,98,72,0.25)",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? "Guardando..." : "Confirmar Asistencia"}
          </button>"""

new_form_part = """          <div style={{ marginBottom: "1.5rem" }}>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "0.95rem",
                color: "#3a3028",
                marginBottom: "0.4rem",
              }}
            >
              {attending === "confirmed"
                ? "Restricciones alimenticias o mensaje (opcional):"
                : "Mensaje para los novios (opcional):"}
            </p>
            <textarea
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              placeholder={
                attending === "confirmed"
                  ? "Ej. Vegetariano, alergia a mariscos o un lindo mensaje..."
                  : "Escribe tus buenos deseos o un mensaje para Carla & Ángel..."
              }
              rows={2}
              style={{
                width: "100%",
                padding: "0.65rem 0.85rem",
                borderRadius: "0.5rem",
                border: "1px solid rgba(139,98,72,0.25)",
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1rem",
                color: "#3a3028",
                boxSizing: "border-box",
                background: "#FFF",
              }}
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            style={{
              width: "100%",
              padding: "0.85rem 1.5rem",
              borderRadius: "2rem",
              border: "none",
              background: "linear-gradient(135deg, #8B6248, #6F4E38)",
              color: "#FFF",
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              fontWeight: 600,
              cursor: submitting ? "not-allowed" : "pointer",
              boxShadow: "0 4px 14px rgba(139,98,72,0.25)",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting
              ? "Enviando respuesta..."
              : attending === "confirmed"
              ? "Confirmar Asistencia"
              : "Enviar Respuesta"}
          </button>"""

if old_form_part in code:
    code = code.replace(old_form_part, new_form_part)
    with open(target_rsvp_path, "w", encoding="utf-8") as f:
        f.write(code)
    print("Updated GuestPassAndRsvp.tsx form labels and button dynamically!")
else:
    print("Warning: old_form_part string not matched exactly")
