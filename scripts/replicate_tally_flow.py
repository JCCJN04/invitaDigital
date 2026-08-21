import os

target_rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

full_flow_code = """\"use client\";

import React, { useState, useEffect } from \"react\";

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

  // Form State
  const [step, setStep] = useState<number>(1);
  const [attending, setAttending] = useState<\"confirmed\" | \"declined\" | null>(null);
  const [passesToConfirm, setPassesToConfirm] = useState<number>(1);
  
  // Tally Form specific questions
  const [hasAllergies, setHasAllergies] = useState<\"no\" | \"yes\">(\"no\");
  const [allergiesText, setAllergiesText] = useState<string>(\"\");
  const [hasDietaryRestrictions, setHasDietaryRestrictions] = useState<\"no\" | \"yes\">(\"no\");
  const [dietaryText, setDietaryText] = useState<string>(\"\");
  const [specialRequirements, setSpecialRequirements] = useState<string>(\"\");
  const [wishesMessage, setWishesMessage] = useState<string>(\"\");

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

  const handleConfirm = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!guest || !attending) return;

    setSubmitting(true);
    try {
      // Build comprehensive notes matching Tally answers
      const notesParts: string[] = [];
      if (hasAllergies === \"yes\" && allergiesText) {
        notesParts.push(`Alergias: ${allergiesText}`);
      }
      if (hasDietaryRestrictions === \"yes\" && dietaryText) {
        notesParts.push(`Preferencia alimentaria: ${dietaryText}`);
      }
      if (specialRequirements.trim()) {
        notesParts.push(`Requerimientos especiales: ${specialRequirements.trim()}`);
      }
      if (wishesMessage.trim()) {
        notesParts.push(`Mensaje: ${wishesMessage.trim()}`);
      }

      const combinedNotes = notesParts.join(\" | \");

      const payload = {
        rsvp_status: attending,
        passes_confirmed: attending === \"confirmed\" ? passesToConfirm : 0,
        confirmed_at: new Date().toISOString(),
        notes: combinedNotes ? `${guest.notes ? guest.notes + \" | \" : \"\"}${combinedNotes}` : guest.notes,
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
        alert(\"Hubo un detalle al guardar tu respuesta. Por favor intenta de nuevo.\");
      }
    } catch (err) {
      console.error(\"Error submitting RSVP:\", err);
      alert(\"Error de conexión. Por favor verifica tu internet.\");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: \"center\", padding: \"2rem 1rem\", color: \"#8B6248\" }}>
        <p style={{ fontFamily: \"var(--font-cormorant), serif\", fontSize: \"1.1rem\", fontStyle: \"italic\" }}>
          Cargando tu pase personalizado...
        </p>
      </div>
    );
  }

  if (!guest) {
    return (
      <div style={{ textAlign: \"center\", padding: \"1.5rem 1rem\", color: \"#5C5040\" }}>
        <p style={{ fontFamily: \"var(--font-cormorant), serif\", fontSize: \"1.1rem\" }}>
          Por favor abre tu invitación desde tu enlace personalizado para confirmar tu asistencia.
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* ── PASE DE ACCESO VIP ── */}
      <div
        style={{
          margin: \"0 0 1.5rem 0\",
          padding: \"1.5rem 1.25rem\",
          borderRadius: \"0.75rem\",
          background: \"linear-gradient(135deg, rgba(255,255,255,0.95), rgba(250,244,235,0.95))\",
          border: \"1px solid rgba(139,98,72,0.25)\",
          boxShadow: \"0 8px 24px rgba(139,98,72,0.06)\",
          textAlign: \"center\",
        }}
      >
        <p
          style={{
            fontFamily: \"var(--font-cinzel), serif\",
            fontSize: \"0.72rem\",
            letterSpacing: \"0.22em\",
            textTransform: \"uppercase\",
            color: \"#8B6248\",
            margin: \"0 0 0.5rem 0\",
            fontWeight: 600,
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
            margin: \"0.25rem 0 0.5rem 0\",
            lineHeight: 1.3,
            fontStyle: \"italic\",
          }}
        >
          {guest.name}
        </h3>

        <div style={{ margin: \"0.6rem auto 0.4rem\", display: \"flex\", alignItems: \"center\", gap: \"0.5rem\", justifyContent: \"center\" }}>
          <div style={{ width: 28, height: 1, background: \"rgba(74,74,56,0.2)\" }} />
          <span style={{ color: \"#8B6248\", fontSize: \"0.65rem\" }}>✦</span>
          <div style={{ width: 28, height: 1, background: \"rgba(74,74,56,0.2)\" }} />
        </div>

        <p
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"1.05rem\",
            color: \"#5C5040\",
            margin: 0,
          }}
        >
          Hemos reservado con cariño <strong>{guest.passes_assigned} {guest.passes_assigned === 1 ? \"lugar\" : \"lugares\"}</strong> en tu honor.
        </p>
      </div>

      {/* ── INTRO DE LA WEDDING PLANNER PAULETT SOL (DEL TALLY) ── */}
      <div
        style={{
          margin: \"0 0 1.5rem 0\",
          padding: \"1rem 1.2rem\",
          borderRadius: \"0.6rem\",
          background: \"rgba(139,98,72,0.05)\",
          border: \"1px solid rgba(139,98,72,0.15)\",
          textAlign: \"center\",
        }}
      >
        <p
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"0.98rem\",
            color: \"#5C5040\",
            lineHeight: 1.6,
            margin: 0,
            fontStyle: \"italic\",
          }}
        >
          ¡Hola! Soy <strong>Paulett Sol</strong>, Eventologist y Wedding Planner de esta celebración.<br />
          Para ayudarnos a preparar cada detalle, te pedimos responder este breve formulario. ✨
        </p>
      </div>

      {/* ── ESTADO FINAL: RESPUESTA ENVIADA (CON PANTALLA TALLY) ── */}
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
              fontSize: \"1.4rem\",
              fontWeight: 600,
              color: attending === \"confirmed\" ? \"#065F46\" : \"#3a3028\",
              margin: \"0 0 0.5rem 0\",
            }}
          >
            ¡Gracias por responder!
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
              ? `Muchas gracias por tu apoyo, hemos registrado ${passesToConfirm} ${passesToConfirm === 1 ? \"pase confirmado\" : \"pases confirmados\"} a nombre de ${guest.name}. ¡Será un placer poder atenderlos ese día!`
              : \"Muchas gracias por avisarnos, ¡los novios tendrán presente tu cariño en sus corazones!\"}
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
          {/* ── PREGUNTA 1: ¿PODRÁS ACOMPAÑARNOS? ── */}
          <div style={{ marginBottom: \"1.5rem\" }}>
            <p
              style={{
                fontFamily: \"var(--font-cormorant), serif\",
                fontSize: \"1.1rem\",
                color: \"#3a3028\",
                fontWeight: 600,
                marginBottom: \"0.4rem\",
                textAlign: \"center\",
              }}
            >
              ¿Podrás acompañarnos en este día tan especial?
            </p>
            <p
              style={{
                fontFamily: \"var(--font-cormorant), serif\",
                fontSize: \"0.9rem\",
                color: \"#8B6248\",
                fontStyle: \"italic\",
                textAlign: \"center\",
                margin: \"0 0 0.85rem 0\",
              }}
            >
              (Agradecemos confirmar tu asistencia antes del <strong>2 de Noviembre</strong>)
            </p>

            <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 1fr\", gap: \"0.75rem\" }}>
              <button
                type=\"button\"
                onClick={() => setAttending(\"confirmed\")}
                style={{
                  padding: \"0.85rem 0.5rem\",
                  borderRadius: \"0.5rem\",
                  border: attending === \"confirmed\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                  background: attending === \"confirmed\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                  color: attending === \"confirmed\" ? \"#8B6248\" : \"#7A6B58\",
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.02rem\",
                  fontWeight: 500,
                  cursor: \"pointer\",
                  transition: \"all 0.2s\",
                }}
              >
                Sí, con mucho gusto asistiré
              </button>
              <button
                type=\"button\"
                onClick={() => setAttending(\"declined\")}
                style={{
                  padding: \"0.85rem 0.5rem\",
                  borderRadius: \"0.5rem\",
                  border: attending === \"declined\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                  background: attending === \"declined\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                  color: attending === \"declined\" ? \"#8B6248\" : \"#7A6B58\",
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.02rem\",
                  fontWeight: 500,
                  cursor: \"pointer\",
                  transition: \"all 0.2s\",
                }}
              >
                Lamentablemente no podré asistir
              </button>
            </div>
          </div>

          {/* ── FLUJO CONDICIONAL: SI NO ASISTE -> MENSAJE Y ENVIAR ── */}
          {attending === \"declined\" && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <div style={{ marginBottom: \"1.5rem\" }}>
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1rem\",
                    color: \"#3a3028\",
                    marginBottom: \"0.4rem\",
                  }}
                >
                  Si lo deseas, puedes dejarnos un mensaje o buenos deseos:
                </p>
                <textarea
                  value={wishesMessage}
                  onChange={(e) => setWishesMessage(e.target.value)}
                  placeholder=\"¡Tus buenos deseos son bienvenidos!\"
                  rows={3}
                  style={{
                    width: \"100%\",
                    padding: \"0.75rem\",
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
                {submitting ? \"Enviando respuesta...\" : \"Enviar Respuesta\"}
              </button>
            </div>
          )}

          {/* ── FLUJO CONDICIONAL: SI ASISTE -> PREGUNTAS DETALLADAS DEL TALLY ── */}
          {attending === \"confirmed\" && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              {/* 1. Selector de pases */}
              <div style={{ marginBottom: \"1.5rem\", textAlign: \"center\" }}>
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1rem\",
                    color: \"#3a3028\",
                    fontWeight: 500,
                    marginBottom: \"0.5rem\",
                  }}
                >
                  Número de pases a confirmar (Máximo {guest.passes_assigned}):
                </p>
                <div style={{ display: \"flex\", gap: \"0.5rem\", justifyContent: \"center\", flexWrap: \"wrap\" }}>
                  {Array.from({ length: guest.passes_assigned }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      type=\"button\"
                      onClick={() => setPassesToConfirm(num)}
                      style={{
                        width: \"42px\",
                        height: \"42px\",
                        borderRadius: \"0.4rem\",
                        border: passesToConfirm === num ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                        background: passesToConfirm === num ? \"#8B6248\" : \"#FFF\",
                        color: passesToConfirm === num ? \"#FFF\" : \"#5C5040\",
                        fontFamily: \"var(--font-cormorant), serif\",
                        fontSize: \"1.1rem\",
                        fontWeight: 600,
                        cursor: \"pointer\",
                      }}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Pregunta Tally: ¿Tienes alguna alergia alimentaria? */}
              <div style={{ marginBottom: \"1.5rem\" }}>
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1rem\",
                    color: \"#3a3028\",
                    fontWeight: 600,
                    marginBottom: \"0.4rem\",
                  }}
                >
                  ¿Tienes alguna alergia alimentaria que debamos considerar?
                </p>
                <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 1fr\", gap: \"0.6rem\", marginBottom: \"0.5rem\" }}>
                  <button
                    type=\"button\"
                    onClick={() => setHasAllergies(\"no\")}
                    style={{
                      padding: \"0.65rem 0.5rem\",
                      borderRadius: \"0.4rem\",
                      border: hasAllergies === \"no\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                      background: hasAllergies === \"no\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                      color: hasAllergies === \"no\" ? \"#8B6248\" : \"#7A6B58\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"0.95rem\",
                      cursor: \"pointer\",
                    }}
                  >
                    No
                  </button>
                  <button
                    type=\"button\"
                    onClick={() => setHasAllergies(\"yes\")}
                    style={{
                      padding: \"0.65rem 0.5rem\",
                      borderRadius: \"0.4rem\",
                      border: hasAllergies === \"yes\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                      background: hasAllergies === \"yes\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                      color: hasAllergies === \"yes\" ? \"#8B6248\" : \"#7A6B58\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"0.95rem\",
                      cursor: \"pointer\",
                    }}
                  >
                    Sí, tengo alergia
                  </button>
                </div>
                {hasAllergies === \"yes\" && (
                  <input
                    type=\"text\"
                    value={allergiesText}
                    onChange={(e) => setAllergiesText(e.target.value)}
                    placeholder=\"¿Cuál alergia? (Ej. Maní, mariscos, nueces...)\"
                    style={{
                      width: \"100%\",
                      padding: \"0.65rem 0.85rem\",
                      borderRadius: \"0.4rem\",
                      border: \"1px solid rgba(139,98,72,0.25)\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"0.95rem\",
                      color: \"#3a3028\",
                      boxSizing: \"border-box\",
                      background: \"#FFF\",
                      marginTop: \"0.3rem\",
                    }}
                  />
                )}
              </div>

              {/* 3. Pregunta Tally: ¿Tienes alguna restricción o preferencia alimentaria? */}
              <div style={{ marginBottom: \"1.5rem\" }}>
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1rem\",
                    color: \"#3a3028\",
                    fontWeight: 600,
                    margin: \"0 0 0.15rem 0\",
                  }}
                >
                  ¿Tienes alguna restricción o preferencia alimentaria?
                </p>
                <span style={{ fontSize: \"0.82rem\", color: \"#7A6B58\", display: \"block\", marginBottom: \"0.5rem\" }}>
                  (Vegetariano, vegano, sin gluten, intolerancia a la lactosa)
                </span>
                <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 1fr\", gap: \"0.6rem\", marginBottom: \"0.5rem\" }}>
                  <button
                    type=\"button\"
                    onClick={() => setHasDietaryRestrictions(\"no\")}
                    style={{
                      padding: \"0.65rem 0.5rem\",
                      borderRadius: \"0.4rem\",
                      border: hasDietaryRestrictions === \"no\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                      background: hasDietaryRestrictions === \"no\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                      color: hasDietaryRestrictions === \"no\" ? \"#8B6248\" : \"#7A6B58\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"0.95rem\",
                      cursor: \"pointer\",
                    }}
                  >
                    No
                  </button>
                  <button
                    type=\"button\"
                    onClick={() => setHasDietaryRestrictions(\"yes\")}
                    style={{
                      padding: \"0.65rem 0.5rem\",
                      borderRadius: \"0.4rem\",
                      border: hasDietaryRestrictions === \"yes\" ? \"1.5px solid #8B6248\" : \"1px solid rgba(139,98,72,0.2)\",
                      background: hasDietaryRestrictions === \"yes\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                      color: hasDietaryRestrictions === \"yes\" ? \"#8B6248\" : \"#7A6B58\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"0.95rem\",
                      cursor: \"pointer\",
                    }}
                  >
                    Sí
                  </button>
                </div>
                {hasDietaryRestrictions === \"yes\" && (
                  <input
                    type=\"text\"
                    value={dietaryText}
                    onChange={(e) => setDietaryText(e.target.value)}
                    placeholder=\"Alergias, vegetariano, vegano, sin gluten…\"
                    style={{
                      width: \"100%\",
                      padding: \"0.65rem 0.85rem\",
                      borderRadius: \"0.4rem\",
                      border: \"1px solid rgba(139,98,72,0.25)\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"0.95rem\",
                      color: \"#3a3028\",
                      boxSizing: \"border-box\",
                      background: \"#FFF\",
                      marginTop: \"0.3rem\",
                    }}
                  />
                )}
              </div>

              {/* 4. Pregunta Tally: ¿Hay algún requerimiento especial que debamos considerar? */}
              <div style={{ marginBottom: \"1.5rem\" }}>
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1rem\",
                    color: \"#3a3028\",
                    fontWeight: 600,
                    margin: \"0 0 0.15rem 0\",
                  }}
                >
                  ¿Hay algún requerimiento especial para que disfrutes del evento?
                </p>
                <span style={{ fontSize: \"0.82rem\", color: \"#7A6B58\", display: \"block\", marginBottom: \"0.4rem\" }}>
                  (Movilidad reducida, silla de ruedas, acceso especial, etc.)
                </span>
                <textarea
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder=\"Cuéntanos aquí...\"
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

              {/* 5. Pregunta Tally: Mensaje o buenos deseos */}
              <div style={{ marginBottom: \"1.75rem\" }}>
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1rem\",
                    color: \"#3a3028\",
                    fontWeight: 600,
                    marginBottom: \"0.4rem\",
                  }}
                >
                  Si lo deseas, puedes dejarnos un mensaje o buenos deseos:
                </p>
                <textarea
                  value={wishesMessage}
                  onChange={(e) => setWishesMessage(e.target.value)}
                  placeholder=\"¡Tus buenos deseos son bienvenidos!\"
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

              {/* Botón Confirmar Asistencia */}
              <button
                type=\"submit\"
                disabled={submitting}
                style={{
                  width: \"100%\",
                  padding: \"0.95rem 1.5rem\",
                  borderRadius: \"2rem\",
                  border: \"none\",
                  background: \"linear-gradient(135deg, #8B6248, #6F4E38)\",
                  color: \"#FFF\",
                  fontFamily: \"var(--font-cinzel), serif\",
                  fontSize: \"0.88rem\",
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
            </div>
          )}
        </form>
      )}
    </div>
  );
}
"""

with open(target_rsvp_path, "w", encoding="utf-8") as f:
    f.write(full_flow_code)

print("Saved complete Tally flow in GuestPassAndRsvp.tsx successfully!")
