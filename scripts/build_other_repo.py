import os

target_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"
page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

component_code = """\"use client\";

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
        alert(\"Hubo un detalle al guardar tu confirmacion. Por favor intenta de nuevo.\");
      }
    } catch (err) {
      console.error(\"Error confirming RSVP:\", err);
      alert(\"Error de conexion. Por favor verifica tu internet.\");
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
        <p style={{ fontFamily: \"var(--font-cormorant), serif\", fontSize: \"1.1rem\" }}>
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
          padding: \"1.5rem 1.25rem\",
          borderRadius: \"1rem\",
          background: \"linear-gradient(135deg, rgba(255,255,255,0.95), rgba(247,243,238,0.95))\",
          border: \"1.5px solid rgba(197,160,89,0.4)\",
          boxShadow: \"0 10px 30px rgba(139,98,72,0.08)\",
          textAlign: \"center\",
          position: \"relative\",
          overflow: \"hidden\",
        }}
      >
        <div
          style={{
            position: \"absolute\",
            top: 0,
            left: 0,
            right: 0,
            height: \"3px\",
            background: \"linear-gradient(90deg, #C5A059, #E5C378, #C5A059)\",
          }}
        />

        <span
          style={{
            display: \"inline-block\",
            fontSize: \"0.75rem\",
            letterSpacing: \"0.25em\",
            textTransform: \"uppercase\",
            fontWeight: 700,
            color: \"#A67C1E\",
            marginBottom: "0.5rem",
          }}
        >
          Pase de Acceso Exclusivo
        </span>

        <h3
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"1.6rem\",
            fontWeight: 700,
            color: \"#2C2520\",
            margin: \"0 0 0.5rem 0\",
            lineHeight: 1.2,
          }}
        >
          {guest.name}
        </h3>

        <div
          style={{
            display: \"inline-flex\",
            alignItems: \"center\",
            gap: \"0.5rem\",
            background: \"rgba(197,160,89,0.12)\",
            padding: \"0.4rem 1rem\",
            borderRadius: \"2rem\",
            border: \"1px solid rgba(197,160,89,0.3)\",
            marginTop: \"0.25rem\",
          }}
        >
          <span style={{ fontSize: \"1rem\" }}>🎟️</span>
          <span
            style={{
              fontFamily: \"var(--font-cormorant), serif\",
              fontSize: \"1.1rem\",
              fontWeight: 600,
              color: \"#5C4A28\",
            }}
          >
            {guest.passes_assigned} {guest.passes_assigned === 1 ? \"pase reservado\" : \"pases reservados\"}
          </span>
        </div>

        {guest.table_assigned && (
          <p style={{ margin: \"0.6rem 0 0 0\", fontSize: \"0.85rem\", color: \"#8B6248\", fontWeight: 600 }}>
            📍 Mesa asignada: {guest.table_assigned}
          </p>
        )}
      </div>

      {/* ── MENSAJE DE CONFIRMACION O FORMULARIO ── */}
      {submitted ? (
        <div
          style={{
            padding: \"1.5rem 1rem\",
            borderRadius: \"0.75rem\",
            background: attending === \"confirmed\" ? \"rgba(16,185,129,0.08)\" : \"rgba(239,68,68,0.08)\",
            border: attending === \"confirmed\" ? \"1px solid rgba(16,185,129,0.3)\" : \"1px solid rgba(239,68,68,0.3)\",
            textAlign: \"center\",
          }}
        >
          <span style={{ fontSize: \"2rem\", display: \"block\", marginBottom: \"0.5rem\" }}>
            {attending === \"confirmed\" ? \"🎉\" : \"💌\"}
          </span>
          <h4
            style={{
              fontFamily: \"var(--font-cormorant), serif\",
              fontSize: \"1.4rem\",
              fontWeight: 700,
              color: attending === \"confirmed\" ? \"#065F46\" : \"#991B1B\",
              margin: \"0 0 0.5rem 0\",
            }}
          >
            {attending === \"confirmed\" ? \"¡Gracias por confirmar tu asistencia!\" : \"Gracias por avisarnos\"}
          </h4>
          <p style={{ fontSize: "0.95rem", color: \"#4B5563\", margin: \"0 0 1rem 0\" }}>
            {attending === \"confirmed\"
              ? `Hemos confirmado ${passesToConfirm} ${passesToConfirm === 1 ? \"pase\" : \"pases\"} a nombre de ${guest.name}. ¡Nos vemos en nuestro gran día!`
              : \"Lamentamos que no puedas acompañarnos, te tendremos presente en nuestros corazones.\"}
          </p>

          <button
            onClick={() => setSubmitted(false)}
            style={{
              background: \"transparent\",
              border: \"none\",
              color: \"#8B6248\",
              fontSize: \"0.85rem\",
              cursor: \"pointer\",
              textDecoration: \"underline\",
            }}
          >
            Modificar mi respuesta
          </button>
        </div>
      ) : (
        <form onSubmit={handleConfirm} style={{ textAlign: \"left\" }}>
          <label style={{ display: \"block\", fontSize: \"0.9rem\", fontWeight: 600, color: \"#3A3025\", marginBottom: \"0.6rem\" }}>
            ¿Nos acompañarás en nuestro gran día?
          </label>
          <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 1fr\", gap: \"0.75rem\", marginBottom: \"1.25rem\" }}>
            <button
              type=\"button\"
              onClick={() => setAttending(\"confirmed\")}
              style={{
                padding: \"0.85rem 0.5rem\",
                borderRadius: \"0.6rem\",
                border: attending === \"confirmed\" ? \"2px solid #C5A059\" : \"1px solid #D1C7BD\",
                background: attending === \"confirmed\" ? \"#FBF8F3\" : \"#FFF\",
                color: attending === \"confirmed\" ? \"#7A5C1E\" : \"#6B7280\",
                fontWeight: 700,
                fontSize: \"0.95rem\",
                cursor: \"pointer\",
                transition: \"all 0.2s\",
              }}
            >
              ✨ Sí, asistiré
            </button>
            <button
              type=\"button\"
              onClick={() => setAttending(\"declined\")}
              style={{
                padding: \"0.85rem 0.5rem\",
                borderRadius: \"0.6rem\",
                border: attending === \"declined\" ? \"2px solid #C5A059\" : \"1px solid #D1C7BD\",
                background: attending === \"declined\" ? \"#FBF8F3\" : \"#FFF\",
                color: attending === \"declined\" ? \"#7A5C1E\" : \"#6B7280\",
                fontWeight: 700,
                fontSize: \"0.95rem\",
                cursor: \"pointer\",
                transition: \"all 0.2s\",
              }}
            >
              No podré asistir
            </button>
          </div>

          {attending === \"confirmed\" && (
            <div style={{ marginBottom: \"1.25rem\" }}>
              <label style={{ display: \"block\", fontSize: \"0.9rem\", fontWeight: 600, color: \"#3A3025\", marginBottom: \"0.5rem\" }}>
                ¿Cuántos pases confirmas? (Máximo {guest.passes_assigned})
              </label>
              <div style={{ display: \"flex\", gap: \"0.5rem\", flexWrap: \"wrap\" }}>
                {Array.from({ length: guest.passes_assigned }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type=\"button\"
                    onClick={() => setPassesToConfirm(num)}
                    style={{
                      width: \"44px\",
                      height: \"44px\",
                      borderRadius: \"0.5rem\",
                      border: passesToConfirm === num ? \"2px solid #8B6248\" : \"1px solid #D1C7BD\",
                      background: passesToConfirm === num ? \"#8B6248\" : \"#FFF\",
                      color: passesToConfirm === num ? \"#FFF\" : \"#374151\",
                      fontWeight: 700,
                      fontSize: \"1rem\",
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
            <label style={{ display: \"block\", fontSize: \"0.85rem\", fontWeight: 600, color: \"#3A3025\", marginBottom: \"0.4rem\" }}>
              Mensaje o restricciones alimenticias (opcional):
            </label>
            <textarea
              value={dietaryNotes}
              onChange={(e) => setDietaryNotes(e.target.value)}
              placeholder=\"Ej. Alergia a mariscos, vegetariano, o un lindo mensaje para los novios...\"
              rows={2}
              style={{
                width: \"100%\",
                padding: \"0.75rem\",
                borderRadius: \"0.5rem\",
                border: \"1px solid #D1C7BD\",
                fontFamily: \"inherit\",
                fontSize: \"0.9rem\",
                boxSizing: \"border-box\",
              }}
            />
          </div>

          <button
            type=\"submit\"
            disabled={submitting}
            style={{
              width: \"100%\",
              padding: \"1rem\",
              borderRadius: \"2rem\",
              border: \"none\",
              background: \"linear-gradient(135deg, #8B6248, #6F4E38)\",
              color: \"#FFF\",
              fontFamily: \"var(--font-cormorant), serif\",
              fontSize: \"1.15rem\",
              fontWeight: 700,
              letterSpacing: \"0.08em\",
              cursor: submitting ? \"not-allowed\" : \"pointer\",
              boxShadow: \"0 4px 14px rgba(139,98,72,0.35)\",
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? \"Guardando confirmación...\" : \"Confirmar Respuesta\"}
          </button>
        </form>
      )}
    </div>
  );
}
"""

with open(target_path, "w", encoding="utf-8") as f:
    f.write(component_code)
print("1. Wrote GuestPassAndRsvp.tsx successfully")

# Now update app/(main)/page.tsx to import and use GuestPassAndRsvp
with open(page_path, "r", encoding="utf-8") as f:
    page_code = f.read()

# Add import if not present
if "GuestPassAndRsvp" not in page_code:
    page_code = page_code.replace(
        'import WeatherSection from "@/components/WeatherSection";',
        'import WeatherSection from "@/components/WeatherSection";\\nimport GuestPassAndRsvp from "@/components/GuestPassAndRsvp";'
    )
    
    # Replace the Tally iframe section in page.tsx with <GuestPassAndRsvp />
    old_rsvp = """              <iframe
                data-tally-src="https://tally.so/embed/1ADYGl?hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height={320}
                scrolling="no"
                style={{ display: "block", border: "none" }}
                title="RSVP — Boda Carla & Ángel"
                allow="clipboard-write"
              />
              <Script
                src="https://tally.so/widgets/embed.js"
                strategy="afterInteractive"
                onLoad={() => {
                  // @ts-ignore
                  if (typeof Tally !== "undefined") Tally.loadEmbeds();
                }}
              />"""
              
    new_rsvp = """              <GuestPassAndRsvp />"""
    
    if old_rsvp in page_code:
        page_code = page_code.replace(old_rsvp, new_rsvp)
        print("2. Replaced Tally iframe with GuestPassAndRsvp in page.tsx")
    else:
        print("Warning: old RSVP block not found exactly as string, attempting fuzzy match")

    with open(page_path, "w", encoding="utf-8") as f:
        f.write(page_code)
    print("3. Saved updated page.tsx successfully")
else:
    print("GuestPassAndRsvp already imported in page.tsx")
