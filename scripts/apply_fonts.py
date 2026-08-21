import os

target_rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"
page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

# 1. Update GuestPassAndRsvp.tsx with pure project typography
rsvp_code = """\"use client\";

import React, { useState, useEffect } from \"react\";
import Script from \"next/script\";

interface GuestData {
  id: string;
  name: string;
  token: string;
  passes_assigned: number;
  passes_confirmed: number;
  rsvp_status: \"pending\" | \"confirmed\" | \"declined\";
  table_assigned?: string | null;
  notes?: string | null;
}

export default function GuestPassAndRsvp() {
  const [guest, setGuest] = useState<GuestData | null>(null);
  const [loading, setLoading] = useState(true);
  const [attending, setAttending] = useState<\"confirmed\" | \"declined\">(\"confirmed\");
  const [passesToConfirm, setPassesToConfirm] = useState<number>(1);
  const [dietaryNotes, setDietaryNotes] = useState<string>(\"\");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || \"https://mnswhidquvjaaviyqtfi.supabase.co\";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uc3doaWRxdXZqYWF2aXlxdGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMDQ3MjUsImV4cCI6MjEwMjU4MDcyNX0.E_m3pf6zyzCl50b2LF4lEtbo8NyVaqAjF0Xwb1iytPw\";

  useEffect(() => {
    if (typeof window === \"undefined\") return;

    const params = new URLSearchParams(window.location.search);
    const token = params.get(\"guest\") || params.get(\"token\") || params.get(\"p\");

    if (!token) {
      setLoading(false);
      return;
    }

    fetch(`${supabaseUrl}/rest/v1/guests?token=eq.${token}&select=*`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const g = data[0] as GuestData;
          setGuest(g);
          setPassesToConfirm(g.passes_confirmed > 0 ? g.passes_confirmed : g.passes_assigned);
          if (g.rsvp_status === \"confirmed\" || g.rsvp_status === \"declined\") {
            setSubmitted(true);
            setAttending(g.rsvp_status);
          }
        }
      })
      .catch((err) => console.error(\"Error fetching guest details:\", err))
      .finally(() => setLoading(false));
  }, [supabaseUrl, supabaseKey]);

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guest) return;

    setSubmitting(true);
    try {
      const payload = {
        rsvp_status: attending,
        passes_confirmed: attending === \"confirmed\" ? passesToConfirm : 0,
        confirmed_at: new Date().toISOString(),
        notes: dietaryNotes ? `${guest.notes ? guest.notes + \" | \" : \"\"}${dietaryNotes}` : guest.notes,
      };

      const res = await fetch(`${supabaseUrl}/rest/v1/guests?id=eq.${guest.id}`, {
        method: \"PATCH\",
        headers: {
          apikey: supabaseKey,
          Authorization: `Bearer ${supabaseKey}`,
          \"Content-Type\": \"application/json\",
          Prefer: \"return=representation\",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        setGuest((prev) => (prev ? { ...prev, ...payload } : null));
      } else {
        alert(\"Hubo un detalle al guardar tu confirmación. Por favor intenta de nuevo.\");
      }
    } catch (err) {
      console.error(\"Error confirming RSVP:\", err);
      alert(\"Error de conexión. Por favor verifica tu internet.\");
    } finally {
      setSubmitting(false);
    }
  };

  // If no guest token, render standard Tally embed
  if (!guest && !loading) {
    return (
      <>
        <iframe
          data-tally-src=\"https://tally.so/embed/1ADYGl?hideTitle=1&transparentBackground=1&dynamicHeight=1\"
          loading=\"lazy\"
          width=\"100%\"
          height={320}
          scrolling=\"no\"
          style={{ display: \"block\", border: \"none\" }}
          title=\"RSVP — Boda Carla & Ángel\"
          allow=\"clipboard-write\"
        />
        <Script
          src=\"https://tally.so/widgets/embed.js\"
          strategy=\"afterInteractive\"
          onLoad={() => {
            // @ts-ignore
            if (typeof Tally !== \"undefined\") Tally.loadEmbeds();
          }}
        />
      </>
    );
  }

  if (loading) {
    return (
      <div style={{ textAlign: \"center\", padding: \"2rem 1rem\", color: \"#8B6248\" }}>
        <p style={{ fontFamily: \"var(--font-cormorant), serif\", fontSize: \"1.1rem\", fontStyle: \"italic\" }}>
          Cargando tu pase personalizado...
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* ── PASE DE ENTRADA VIP PERSONALIZADO ── */}
      <div
        style={{
          margin: \"0 0 1.75rem 0\",
          padding: \"1.75rem 1.25rem\",
          borderRadius: \"0.75rem\",
          background: \"linear-gradient(135deg, rgba(255,255,255,0.95), rgba(250,244,235,0.95))\",
          border: \"1px solid rgba(139,98,72,0.25)\",
          boxShadow: \"0 8px 24px rgba(139,98,72,0.06)\",
          textAlign: \"center\",
        }}
      >
        <p
          className=\"v2-section-label\"
          style={{
            fontFamily: \"var(--font-cinzel), serif\",
            fontSize: \"0.72rem\",
            letterSpacing: \"0.22em\",
            textTransform: \"uppercase\",
            color: \"#8B6248\",
            margin: \"0 0 0.5rem 0\",
          }}
        >
          Pase de Acceso
        </p>

        <h3
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"1.45rem\",
            fontWeight: 500,
            color: \"#3a3028\",
            margin: \"0.25rem 0 0.6rem 0\",
            lineHeight: 1.3,
            fontStyle: \"italic\",
          }}
        >
          {guest.name}
        </h3>

        <div style={{ margin: \"0.75rem auto 0.5rem\", display: \"flex\", alignItems: \"center\", gap: \"0.5rem\", justifyContent: \"center\" }}>
          <div style={{ width: 28, height: 1, background: \"rgba(74,74,56,0.2)\" }} />
          <span style={{ color: \"#8B6248\", fontSize: \"0.65rem\" }}>✦</span>
          <div style={{ width: 28, height: 1, background: \"rgba(74,74,56,0.2)\" }} />
        </div>

        <p
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"1.1rem\",
            color: \"#5C5040\",
            margin: \"0.35rem 0 0 0\",
            lineHeight: 1.5,
          }}
        >
          Hemos reservado con cariño <strong>{guest.passes_assigned} {guest.passes_assigned === 1 ? \"lugar\" : \"lugares\"}</strong> en tu honor.
        </p>

        {guest.table_assigned && (
          <p
            style={{
              fontFamily: \"var(--font-montserrat), sans-serif\",
              fontSize: \"0.8rem\",
              letterSpacing: \"0.08em\",
              textTransform: \"uppercase\",
              color: \"#8B6248\",
              fontWeight: 500,
              marginTop: \"0.6rem\",
            }}
          >
            📍 Mesa: {guest.table_assigned}
          </p>
        )}
      </div>

      {/* ── MENSAJE DE CONFIRMACIÓN O FORMULARIO ── */}
      {submitted ? (
        <div
          style={{
            padding: \"1.75rem 1.25rem\",
            borderRadius: \"0.75rem\",
            background: attending === \"confirmed\" ? \"rgba(16,185,129,0.06)\" : \"rgba(139,98,72,0.06)\",
            border: attending === \"confirmed\" ? \"1px solid rgba(16,185,129,0.25)\" : \"1px solid rgba(139,98,72,0.2)\",
            textAlign: \"center\",
          }}
        >
          <span style={{ fontSize: \"1.75rem\", display: \"block\", marginBottom: \"0.5rem\" }}>
            {attending === \"confirmed\" ? \"✨\" : \"💌\"}
          </span>
          <h4
            style={{
              fontFamily: \"var(--font-cormorant), serif\",
              fontSize: \"1.35rem\",
              fontWeight: 500,
              color: attending === \"confirmed\" ? \"#065F46\" : \"#5C5040\",
              margin: \"0 0 0.5rem 0\",
            }}
          >
            {attending === \"confirmed\" ? \"¡Gracias por confirmar tu asistencia!\" : \"Gracias por avisarnos\"}
          </h4>
          <p
            style={{
              fontFamily: \"var(--font-cormorant), serif\",
              fontSize: \"1.05rem\",
              color: \"#5C5040\",
              lineHeight: 1.6,
              margin: \"0 0 1.25rem 0\",
            }}
          >
            {attending === \"confirmed\"
              ? `Hemos registrado ${passesToConfirm} ${passesToConfirm === 1 ? \"pase confirmado\" : \"pases confirmados\"} a nombre de ${guest.name}. ¡Esperamos verte pronto!`
              : \"Lamentamos que no puedas acompañarnos, te tendremos presente en nuestros corazones.\"}
          </p>

          <button
            onClick={() => setSubmitted(false)}
            style={{
              background: \"transparent\",
              border: \"none\",
              fontFamily: \"var(--font-montserrat), sans-serif\",
              color: \"#8B6248\",
              fontSize: \"0.78rem\",
              letterSpacing: \"0.08em\",
              textTransform: \"uppercase\",
              fontWeight: 500,
              cursor: \"pointer\",
              textDecoration: \"underline\",
            }}
          >
            Modificar mi respuesta
          </button>
        </div>
      ) : (
        <form onSubmit={handleConfirm} style={{ textAlign: \"left\" }}>
          <p
            style={{
              fontFamily: \"var(--font-cormorant), serif\",
              fontSize: \"1rem\",
              color: \"#3a3028\",
              fontWeight: 500,
              marginBottom: \"0.75rem\",
              textAlign: \"center\",
            }}
          >
            ¿Nos acompañas a celebrar?
          </p>

          <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 1fr\", gap: \"0.75rem\", marginBottom: \"1.25rem\" }}>
            <button
              type=\"button\"
              onClick={() => setAttending(\"confirmed\")}
              style={{
                padding: \"0.75rem 0.5rem\",
                borderRadius: \"0.5rem\",
                border: attending === \"confirmed\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                background: attending === \"confirmed\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                color: attending === \"confirmed\" ? \"#8B6248\" : \"#7A6B58\",
                fontFamily: \"var(--font-cormorant), serif\",
                fontSize: \"1rem\",
                fontWeight: 500,
                cursor: \"pointer\",
                transition: \"all 0.2s\",
              }}
            >
              Sí, asistiré
            </button>
            <button
              type=\"button\"
              onClick={() => setAttending(\"declined\")}
              style={{
                padding: \"0.75rem 0.5rem\",
                borderRadius: \"0.5rem\",
                border: attending === \"declined\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                background: attending === \"declined\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                color: attending === \"declined\" ? \"#8B6248\" : \"#7A6B58\",
                fontFamily: \"var(--font-cormorant), serif\",
                fontSize: \"1rem\",
                fontWeight: 500,
                cursor: \"pointer\",
                transition: \"all 0.2s\",
              }}
            >
              No podré asistir
            </button>
          </div>

          {attending === \"confirmed\" && (
            <div style={{ marginBottom: \"1.25rem\", textAlign: \"center\" }}>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"0.95rem\",
                  color: \"#3a3028\",
                  marginBottom: \"0.5rem\",
                }}
              >
                Confirmar número de pases (Máximo {guest.passes_assigned}):
              </p>
              <div style={{ display: \"flex\", gap: \"0.5rem\", justifyContent: \"center\", flexWrap: \"wrap\" }}>
                {Array.from({ length: guest.passes_assigned }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type=\"button\"
                    onClick={() => setPassesToConfirm(num)}
                    style={{
                      width: \"40px\",
                      height: \"40px\",
                      borderRadius: \"0.4rem\",
                      border: passesToConfirm === num ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                      background: passesToConfirm === num ? \"#8B6248\" : \"#FFF\",
                      color: passesToConfirm === num ? \"#FFF\" : \"#5C5040\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"1.05rem\",
                      fontWeight: 600,
                      cursor: \"pointer\",
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div style={{ marginBottom: \"1.5rem\" }}>
            <p
              style={{
                fontFamily: \"var(--font-cormorant), serif\",
                fontSize: \"0.95rem\",
                color: \"#3a3028\",
                marginBottom: \"0.4rem\",
              }}
            >
              Restricciones alimenticias o mensaje (opcional):
            </p>
            <textarea
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              placeholder=\"Ej. Vegetariano, alergia a nueces o un mensaje para los novios...\"
              rows={2}
              style={{
                width: \"100%\",
                padding: \"0.65rem 0.85rem\",
                borderRadius: \"0.5rem\",
                border: \"1px solid rgba(139,98,72,0.25)\",
                fontFamily: \"var(--font-cormorant), serif\",
                fontSize: \"1rem\",
                color: \"#3a3028\",
                boxSizing: \"border-box\",
                background: \"#FFF\",
              }}
            />
          </div>

          <button
            type=\"submit\"
            disabled={submitting}
            style={{
              width: \"100%\",
              padding: \"0.85rem 1.5rem\",
              borderRadius: \"2rem\",
              border: \"none\",
              background: \"linear-gradient(135deg, #8B6248, #6F4E38)\",
              color: \"#FFF\",
              fontFamily: \"var(--font-cinzel), serif\",
              fontSize: \"0.85rem\",
              letterSpacing: \"0.15em\",
              textTransform: \"uppercase\",
              fontWeight: 600,
              cursor: submitting ? \"not-allowed\" : \"pointer\",
              boxShadow: \"0 4px 14px rgba(139,98,72,0.25)\",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? \"Guardando...\" : \"Confirmar Asistencia\"}
          </button>
        </form>
      )}
    </div>
  );
}
"""

with open(target_rsvp_path, "w", encoding="utf-8") as f:
    f.write(rsvp_code)
print("Updated GuestPassAndRsvp.tsx with exact typography")

# 2. Update page.tsx envelope seal and top banner with exact project fonts
with open(page_path, "r", encoding="utf-8") as f:
    page_code = f.read()

# Update envelope seal with Cinzel & Cormorant fonts
envelope_seal_old = """              {guest && (
                <div style={{
                  marginTop: "0.85rem",
                  padding: "0.6rem 1.25rem",
                  background: "rgba(255, 255, 255, 0.85)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "2rem",
                  border: "1px solid rgba(197, 160, 89, 0.45)",
                  boxShadow: "0 6px 20px rgba(139, 98, 72, 0.1)",
                  display: "inline-block",
                }}>
                  <span style={{ display: "block", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: "#A67C1E" }}>
                    Invitación Especial Para
                  </span>
                  <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.25rem", fontWeight: 700, color: "#2C2520", margin: "0.15rem 0 0 0", lineHeight: 1.2 }}>
                    {guest.name}
                  </p>
                  <span style={{ display: "inline-block", fontSize: "0.85rem", color: "#6F4E38", fontWeight: 600, marginTop: "0.2rem" }}>
                    🎟️ {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}
                  </span>
                </div>
              )}"""

envelope_seal_new = """              {guest && (
                <div style={{
                  marginTop: "1rem",
                  padding: "0.75rem 1.5rem",
                  background: "rgba(250, 244, 235, 0.92)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "0.75rem",
                  border: "1px solid rgba(139, 98, 72, 0.3)",
                  boxShadow: "0 6px 24px rgba(139, 98, 72, 0.08)",
                  display: "inline-block",
                }}>
                  <p style={{
                    fontFamily: "var(--font-cinzel), serif",
                    fontSize: "0.68rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "#8B6248",
                    margin: "0 0 0.3rem 0",
                    fontWeight: 600
                  }}>
                    Invitación Especial Para
                  </p>
                  <p style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "1.35rem",
                    color: "#3a3028",
                    margin: "0",
                    lineHeight: 1.3,
                    fontStyle: "italic",
                    fontWeight: 500
                  }}>
                    {guest.name}
                  </p>
                  <div style={{ margin: "0.4rem auto 0.3rem", display: "flex", alignItems: "center", gap: "0.4rem", justifyContent: "center" }}>
                    <div style={{ width: 20, height: 1, background: "rgba(74,74,56,0.2)" }} />
                    <span style={{ color: "#8B6248", fontSize: "0.55rem" }}>✦</span>
                    <div style={{ width: 20, height: 1, background: "rgba(74,74,56,0.2)" }} />
                  </div>
                  <p style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "0.98rem",
                    color: "#5C5040",
                    margin: 0,
                    fontWeight: 400
                  }}>
                    {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}
                  </p>
                </div>
              )}"""

if envelope_seal_old in page_code:
    page_code = page_code.replace(envelope_seal_old, envelope_seal_new)
    print("Updated envelope seal typography in page.tsx")

# Update sticky banner typography
sticky_old = """            <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: "#A67C1E" }}>
              Invitación Personalizada
            </span>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", fontWeight: 700, color: "#2C2520", margin: "0.1rem 0" }}>
              {guest.name}
            </p>
            <span style={{ fontSize: "0.8rem", color: "#6F4E38", fontWeight: 600 }}>
              🎟️ {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}
            </span>"""

sticky_new = """            <p style={{
              fontFamily: "var(--font-cinzel), serif",
              fontSize: "0.65rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#8B6248",
              margin: 0,
              fontWeight: 600
            }}>
              Invitación Personalizada
            </p>
            <p style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "1.15rem",
              color: "#3a3028",
              margin: "0.1rem 0",
              fontStyle: "italic",
              fontWeight: 500
            }}>
              {guest.name}
            </p>
            <p style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "0.9rem",
              color: "#5C5040",
              margin: 0
            }}>
              {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}
            </p>"""

if sticky_old in page_code:
    page_code = page_code.replace(sticky_old, sticky_new)
    print("Updated sticky top banner typography in page.tsx")

with open(page_path, "w", encoding="utf-8") as f:
    f.write(page_code)

print("Saved all font harmony updates successfully!")
