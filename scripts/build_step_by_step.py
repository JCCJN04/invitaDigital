import os

target_rsvp_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx"

step_by_step_code = """\"use client\";

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

  // Multi-step form state (Matching Tally page breaks)
  // Step 1: Attendance
  // Step 2: Number of passes
  // Step 3: Food allergies
  // Step 4: Dietary preferences
  // Step 5: Special requirements
  // Step 6: Wishes message & submit
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [attending, setAttending] = useState<\"confirmed\" | \"declined\" | null>(null);
  const [passesToConfirm, setPassesToConfirm] = useState<number>(1);
  
  // Specific questions
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

  const handleNext = () => {
    if (currentStep === 1) {
      if (!attending) {
        alert(\"Por favor selecciona una opción para continuar.\");
        return;
      }
      // Tally logic: If declined, jump straight to wishes message step (Step 6)
      if (attending === \"declined\") {
        setCurrentStep(6);
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep === 6 && attending === \"declined\") {
      setCurrentStep(1);
      return;
    }
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleConfirm = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!guest || !attending) return;

    setSubmitting(true);
    try {
      const notesParts: string[] = [];
      if (attending === \"confirmed\") {
        if (hasAllergies === \"yes\" && allergiesText.trim()) {
          notesParts.push(`Alergias: ${allergiesText.trim()}`);
        }
        if (hasDietaryRestrictions === \"yes\" && dietaryText.trim()) {
          notesParts.push(`Preferencia alimentaria: ${dietaryText.trim()}`);
        }
        if (specialRequirements.trim()) {
          notesParts.push(`Requerimientos especiales: ${specialRequirements.trim()}`);
        }
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

  // Total steps for progress
  const totalSteps = attending === \"declined\" ? 2 : 6;
  const stepDisplay = attending === \"declined\" ? (currentStep === 1 ? 1 : 2) : currentStep;

  return (
    <div>
      {/* ── PASE DE ACCESO VIP ── */}
      <div
        style={{
          margin: \"0 0 1.25rem 0\",
          padding: \"1.4rem 1.2rem\",
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
            margin: \"0 0 0.4rem 0\",
            fontWeight: 600,
          }}
        >
          Pase de Acceso
        </p>

        <h3
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"1.4rem\",
            fontWeight: 500,
            color: \"#3a3028\",
            margin: \"0.15rem 0 0.4rem 0\",
            lineHeight: 1.3,
            fontStyle: \"italic\",
          }}
        >
          {guest.name}
        </h3>

        <div style={{ margin: \"0.5rem auto 0.4rem\", display: \"flex\", alignItems: \"center\", gap: \"0.5rem\", justifyContent: \"center\" }}>
          <div style={{ width: 24, height: 1, background: \"rgba(74,74,56,0.2)\" }} />
          <span style={{ color: \"#8B6248\", fontSize: \"0.6rem\" }}>✦</span>
          <div style={{ width: 24, height: 1, background: \"rgba(74,74,56,0.2)\" }} />
        </div>

        <p
          style={{
            fontFamily: \"var(--font-cormorant), serif\",
            fontSize: \"1.02rem\",
            color: \"#5C5040\",
            margin: 0,
          }}
        >
          Hemos reservado con cariño <strong>{guest.passes_assigned} {guest.passes_assigned === 1 ? \"lugar\" : \"lugares\"}</strong> en tu honor.
        </p>
      </div>

      {/* ── ESTADO FINAL: RESPUESTA ENVIADA ── */}
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
            onClick={() => {
              setSubmitted(false);
              setCurrentStep(1);
            }}
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
        <div>
          {/* ── BARRA DE PROGRESO DE PREGUNTAS TALLY ── */}
          <div style={{ display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\", marginBottom: \"1.25rem\" }}>
            <span style={{ fontFamily: \"var(--font-montserrat), sans-serif\", fontSize: \"0.75rem\", color: \"#8B6248\", fontWeight: 600, textTransform: \"uppercase\", letterSpacing: \"0.1em\" }}>
              Pregunta {stepDisplay} de {totalSteps}
            </span>
            <div style={{ display: \"flex\", gap: \"4px\" }}>
              {Array.from({ length: totalSteps }, (_, i) => (
                <div
                  key={i}
                  style={{
                    width: \"18px\",
                    height: \"3px\",
                    borderRadius: \"2px\",
                    background: i + 1 <= stepDisplay ? \"#8B6248\" : \"rgba(139,98,72,0.2)\",
                    transition: \"background 0.3s\",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════
              PÁGINA 1: INTRO WEDDING PLANNER + ASISTENCIA
          ══════════════════════════════════════════════════════ */}
          {currentStep === 1 && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <div
                style={{
                  margin: \"0 0 1.25rem 0\",
                  padding: \"0.85rem 1rem\",
                  borderRadius: \"0.6rem\",
                  background: \"rgba(139,98,72,0.05)\",
                  border: \"1px solid rgba(139,98,72,0.15)\",
                  textAlign: \"center\",
                }}
              >
                <p
                  style={{
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"0.95rem\",
                    color: \"#5C5040\",
                    lineHeight: 1.55,
                    margin: 0,
                    fontStyle: \"italic\",
                  }}
                >
                  ¡Hola! Soy <strong>Paulett Sol</strong>, Eventologist y Wedding Planner de esta celebración.<br />
                  Para ayudarnos a preparar cada detalle, te pedimos responder este breve formulario. ✨
                </p>
              </div>

              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.15rem\",
                  color: \"#3a3028\",
                  fontWeight: 600,
                  marginBottom: \"0.35rem\",
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
                  margin: \"0 0 1rem 0\",
                }}
              >
                (Agradecemos confirmar tu asistencia antes del <strong>2 de Noviembre</strong>)
              </p>

              <div style={{ display: \"flex\", flexDirection: \"column\", gap: \"0.75rem\", marginBottom: \"1.5rem\" }}>
                <button
                  type=\"button\"
                  onClick={() => setAttending(\"confirmed\")}
                  style={{
                    padding: \"0.95rem 1rem\",
                    borderRadius: \"0.5rem\",
                    border: attending === \"confirmed\" ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                    background: attending === \"confirmed\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                    color: attending === \"confirmed\" ? \"#8B6248\" : \"#4B5563\",
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1.05rem\",
                    fontWeight: 600,
                    cursor: \"pointer\",
                    textAlign: \"left\",
                    display: \"flex\",
                    alignItems: \"center\",
                    justifyContent: \"space-between\",
                    transition: \"all 0.2s\",
                  }}
                >
                  <span>Sí, con mucho gusto asistiré.</span>
                  {attending === \"confirmed\" && <span style={{ color: \"#8B6248\" }}>✓</span>}
                </button>

                <button
                  type=\"button\"
                  onClick={() => setAttending(\"declined\")}
                  style={{
                    padding: \"0.95rem 1rem\",
                    borderRadius: \"0.5rem\",
                    border: attending === \"declined\" ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                    background: attending === \"declined\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                    color: attending === \"declined\" ? \"#8B6248\" : \"#4B5563\",
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1.05rem\",
                    fontWeight: 600,
                    cursor: \"pointer\",
                    textAlign: \"left\",
                    display: \"flex\",
                    alignItems: \"center\",
                    justifyContent: \"space-between\",
                    transition: \"all 0.2s\",
                  }}
                >
                  <span>Lamentablemente no podré asistir.</span>
                  {attending === \"declined\" && <span style={{ color: \"#8B6248\" }}>✓</span>}
                </button>
              </div>

              <button
                type=\"button\"
                onClick={handleNext}
                style={{
                  width: \"100%\",
                  padding: \"0.85rem 1.5rem\",
                  borderRadius: \"2rem\",
                  border: \"none\",
                  background: attending ? \"linear-gradient(135deg, #8B6248, #6F4E38)\" : \"#D1C7BD\",
                  color: \"#FFF\",
                  fontFamily: \"var(--font-cinzel), serif\",
                  fontSize: \"0.85rem\",
                  letterSpacing: \"0.15em\",
                  textTransform: \"uppercase\",
                  fontWeight: 600,
                  cursor: attending ? \"pointer\" : \"not-allowed\",
                  boxShadow: attending ? \"0 4px 14px rgba(139,98,72,0.25)\" : \"none\",
                }}
              >
                Siguiente →
              </button>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PÁGINA 2: NÚMERO DE PASES (SI ASISTE)
          ══════════════════════════════════════════════════════ */}
          {currentStep === 2 && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.15rem\",
                  color: \"#3a3028\",
                  fontWeight: 600,
                  marginBottom: \"0.5rem\",
                  textAlign: \"center\",
                }}
              >
                ¿Cuántos pases confirmas?
              </p>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"0.95rem\",
                  color: \"#7A6B58\",
                  textAlign: \"center\",
                  margin: \"0 0 1.25rem 0\",
                }}
              >
                (Tu invitación incluye hasta un máximo de <strong>{guest.passes_assigned} {guest.passes_assigned === 1 ? \"pase\" : \"pases\"}</strong>)
              </p>

              <div style={{ display: \"flex\", gap: \"0.6rem\", justifyContent: \"center\", flexWrap: \"wrap\", marginBottom: \"1.75rem\" }}>
                {Array.from({ length: guest.passes_assigned }, (_, i) => i + 1).map((num) => (
                  <button
                    key={num}
                    type=\"button\"
                    onClick={() => setPassesToConfirm(num)}
                    style={{
                      width: \"48px\",
                      height: \"48px\",
                      borderRadius: \"0.5rem\",
                      border: passesToConfirm === num ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                      background: passesToConfirm === num ? \"#8B6248\" : \"#FFF\",
                      color: passesToConfirm === num ? \"#FFF\" : \"#5C5040\",
                      fontFamily: \"var(--font-cormorant), serif\",
                      fontSize: \"1.2rem\",
                      fontWeight: 600,
                      cursor: \"pointer\",
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>

              <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 2fr\", gap: \"0.75rem\" }}>
                <button
                  type=\"button\"
                  onClick={handleBack}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"2rem\",
                    border: \"1px solid rgba(139,98,72,0.3)\",
                    background: \"#FFF\",
                    color: \"#8B6248\",
                    fontFamily: \"var(--font-cinzel), serif\",
                    fontSize: \"0.8rem\",
                    letterSpacing: \"0.1em\",
                    textTransform: \"uppercase\",
                    cursor: \"pointer\",
                  }}
                >
                  ← Atrás
                </button>
                <button
                  type=\"button\"
                  onClick={handleNext}
                  style={{
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
                    cursor: \"pointer\",
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PÁGINA 3: ALERGIAS ALIMENTARIAS (TALLY PÁGINA 3)
          ══════════════════════════════════════════════════════ */}
          {currentStep === 3 && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.15rem\",
                  color: \"#3a3028\",
                  fontWeight: 600,
                  marginBottom: \"1.25rem\",
                  textAlign: \"center\",
                }}
              >
                ¿Tienes alguna alergia alimentaria que debamos considerar?
              </p>

              <div style={{ display: \"flex\", flexDirection: \"column\", gap: \"0.75rem\", marginBottom: \"1.25rem\" }}>
                <button
                  type=\"button\"
                  onClick={() => setHasAllergies(\"no\")}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"0.5rem\",
                    border: hasAllergies === \"no\" ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                    background: hasAllergies === \"no\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                    color: hasAllergies === \"no\" ? \"#8B6248\" : \"#4B5563\",
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1.05rem\",
                    fontWeight: 600,
                    cursor: \"pointer\",
                    textAlign: \"left\",
                    display: \"flex\",
                    alignItems: \"center\",
                    justifyContent: \"space-between\",
                  }}
                >
                  <span>No.</span>
                  {hasAllergies === \"no\" && <span style={{ color: \"#8B6248\" }}>✓</span>}
                </button>

                <button
                  type=\"button\"
                  onClick={() => setHasAllergies(\"yes\")}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"0.5rem\",
                    border: hasAllergies === \"yes\" ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                    background: hasAllergies === \"yes\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                    color: hasAllergies === \"yes\" ? \"#8B6248\" : \"#4B5563\",
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1.05rem\",
                    fontWeight: 600,
                    cursor: \"pointer\",
                    textAlign: \"left\",
                    display: \"flex\",
                    alignItems: \"center\",
                    justifyContent: \"space-between\",
                  }}
                >
                  <span>Sí. ¿Cuál?</span>
                  {hasAllergies === \"yes\" && <span style={{ color: \"#8B6248\" }}>✓</span>}
                </button>
              </div>

              {hasAllergies === \"yes\" && (
                <div style={{ marginBottom: \"1.5rem\" }}>
                  <input
                    type=\"text\"
                    value={allergiesText}
                    onChange={(e) => setAllergiesText(e.target.value)}
                    placeholder=\"Indica tus alergias (ej. nueces, mariscos, cacahuate...)\"
                    style={{
                      width: \"100%\",
                      padding: \"0.75rem 0.85rem\",
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
              )}

              <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 2fr\", gap: \"0.75rem\", marginTop: \"1rem\" }}>
                <button
                  type=\"button\"
                  onClick={handleBack}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"2rem\",
                    border: \"1px solid rgba(139,98,72,0.3)\",
                    background: \"#FFF\",
                    color: \"#8B6248\",
                    fontFamily: \"var(--font-cinzel), serif\",
                    fontSize: \"0.8rem\",
                    letterSpacing: \"0.1em\",
                    textTransform: \"uppercase\",
                    cursor: \"pointer\",
                  }}
                >
                  ← Atrás
                </button>
                <button
                  type=\"button\"
                  onClick={handleNext}
                  style={{
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
                    cursor: \"pointer\",
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PÁGINA 4: RESTRICCIONES ALIMENTARIAS (TALLY PÁGINA 4)
          ══════════════════════════════════════════════════════ */}
          {currentStep === 4 && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.15rem\",
                  color: \"#3a3028\",
                  fontWeight: 600,
                  marginBottom: \"0.25rem\",
                  textAlign: \"center\",
                }}
              >
                ¿Tienes alguna restricción o preferencia alimentaria?
              </p>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"0.9rem\",
                  color: \"#7A6B58\",
                  textAlign: \"center\",
                  margin: \"0 0 1.25rem 0\",
                }}
              >
                (Vegetariano, vegano, sin gluten, intolerancia a la lactosa)
              </p>

              <div style={{ display: \"flex\", flexDirection: \"column\", gap: \"0.75rem\", marginBottom: \"1.25rem\" }}>
                <button
                  type=\"button\"
                  onClick={() => setHasDietaryRestrictions(\"no\")}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"0.5rem\",
                    border: hasDietaryRestrictions === \"no\" ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                    background: hasDietaryRestrictions === \"no\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                    color: hasDietaryRestrictions === \"no\" ? \"#8B6248\" : \"#4B5563\",
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1.05rem\",
                    fontWeight: 600,
                    cursor: \"pointer\",
                    textAlign: \"left\",
                    display: \"flex\",
                    alignItems: \"center\",
                    justifyContent: \"space-between\",
                  }}
                >
                  <span>No.</span>
                  {hasDietaryRestrictions === \"no\" && <span style={{ color: \"#8B6248\" }}>✓</span>}
                </button>

                <button
                  type=\"button\"
                  onClick={() => setHasDietaryRestrictions(\"yes\")}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"0.5rem\",
                    border: hasDietaryRestrictions === \"yes\" ? \"2px solid #8B6248\" : \"1px solid rgba(139,98,72,0.25)\",
                    background: hasDietaryRestrictions === \"yes\" ? \"rgba(139,98,72,0.08)\" : \"#FFF\",
                    color: hasDietaryRestrictions === \"yes\" ? \"#8B6248\" : \"#4B5563\",
                    fontFamily: \"var(--font-cormorant), serif\",
                    fontSize: \"1.05rem\",
                    fontWeight: 600,
                    cursor: \"pointer\",
                    textAlign: \"left\",
                    display: \"flex\",
                    alignItems: \"center\",
                    justifyContent: \"space-between\",
                  }}
                >
                  <span>Sí.</span>
                  {hasDietaryRestrictions === \"yes\" && <span style={{ color: \"#8B6248\" }}>✓</span>}
                </button>
              </div>

              {hasDietaryRestrictions === \"yes\" && (
                <div style={{ marginBottom: \"1.5rem\" }}>
                  <input
                    type=\"text\"
                    value={dietaryText}
                    onChange={(e) => setDietaryText(e.target.value)}
                    placeholder=\"Alergias, vegetariano, vegano, sin gluten…\"
                    style={{
                      width: \"100%\",
                      padding: \"0.75rem 0.85rem\",
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
              )}

              <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 2fr\", gap: \"0.75rem\", marginTop: \"1rem\" }}>
                <button
                  type=\"button\"
                  onClick={handleBack}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"2rem\",
                    border: \"1px solid rgba(139,98,72,0.3)\",
                    background: \"#FFF\",
                    color: \"#8B6248\",
                    fontFamily: \"var(--font-cinzel), serif\",
                    fontSize: \"0.8rem\",
                    letterSpacing: \"0.1em\",
                    textTransform: \"uppercase\",
                    cursor: \"pointer\",
                  }}
                >
                  ← Atrás
                </button>
                <button
                  type=\"button\"
                  onClick={handleNext}
                  style={{
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
                    cursor: \"pointer\",
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PÁGINA 5: REQUERIMIENTOS ESPECIALES (TALLY PÁGINA 5)
          ══════════════════════════════════════════════════════ */}
          {currentStep === 5 && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.15rem\",
                  color: \"#3a3028\",
                  fontWeight: 600,
                  marginBottom: \"0.25rem\",
                  textAlign: \"center\",
                }}
              >
                ¿Hay algún requerimiento especial para que disfrutes del evento?
              </p>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"0.9rem\",
                  color: \"#7A6B58\",
                  textAlign: \"center\",
                  margin: \"0 0 1.25rem 0\",
                }}
              >
                (Movilidad reducida, silla de ruedas, acceso especial, etc.)
              </p>

              <div style={{ marginBottom: \"1.5rem\" }}>
                <textarea
                  value={specialRequirements}
                  onChange={(e) => setSpecialRequirements(e.target.value)}
                  placeholder=\"Cuéntanos aquí...\"
                  rows={3}
                  style={{
                    width: \"100%\",
                    padding: \"0.75rem 0.85rem\",
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

              <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 2fr\", gap: \"0.75rem\" }}>
                <button
                  type=\"button\"
                  onClick={handleBack}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"2rem\",
                    border: \"1px solid rgba(139,98,72,0.3)\",
                    background: \"#FFF\",
                    color: \"#8B6248\",
                    fontFamily: \"var(--font-cinzel), serif\",
                    fontSize: \"0.8rem\",
                    letterSpacing: \"0.1em\",
                    textTransform: \"uppercase\",
                    cursor: \"pointer\",
                  }}
                >
                  ← Atrás
                </button>
                <button
                  type=\"button\"
                  onClick={handleNext}
                  style={{
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
                    cursor: \"pointer\",
                  }}
                >
                  Siguiente →
                </button>
              </div>
            </div>
          )}

          {/* ══════════════════════════════════════════════════════
              PÁGINA 6: MENSAJE O BUENOS DESEOS + BOTÓN FINAL ENVIAR
          ══════════════════════════════════════════════════════ */}
          {currentStep === 6 && (
            <div style={{ animation: \"fadeIn 0.3s ease-in-out\" }}>
              <p
                style={{
                  fontFamily: \"var(--font-cormorant), serif\",
                  fontSize: \"1.15rem\",
                  color: \"#3a3028\",
                  fontWeight: 600,
                  marginBottom: \"0.5rem\",
                  textAlign: \"center\",
                }}
              >
                Si lo deseas, puedes dejarnos un mensaje o buenos deseos:
              </p>

              <div style={{ marginBottom: \"1.5rem\" }}>
                <textarea
                  value={wishesMessage}
                  onChange={(e) => setWishesMessage(e.target.value)}
                  placeholder=\"¡Tus buenos deseos son bienvenidos!\"
                  rows={3}
                  style={{
                    width: \"100%\",
                    padding: \"0.75rem 0.85rem\",
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

              <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 2fr\", gap: \"0.75rem\" }}>
                <button
                  type=\"button\"
                  onClick={handleBack}
                  style={{
                    padding: \"0.85rem 1rem\",
                    borderRadius: \"2rem\",
                    border: \"1px solid rgba(139,98,72,0.3)\",
                    background: \"#FFF\",
                    color: \"#8B6248\",
                    fontFamily: \"var(--font-cinzel), serif\",
                    fontSize: \"0.8rem\",
                    letterSpacing: \"0.1em\",
                    textTransform: \"uppercase\",
                    cursor: \"pointer\",
                  }}
                >
                  ← Atrás
                </button>
                <button
                  type=\"button\"
                  onClick={() => handleConfirm()}
                  disabled={submitting}
                  style={{
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
                  {submitting ? \"Enviando...\" : (attending === \"confirmed\" ? \"Confirmar Asistencia\" : \"Enviar Respuesta\")}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
"""

with open(target_rsvp_path, "w", encoding="utf-8") as f:
    f.write(step_by_step_code)

print("Saved step-by-step Tally flow in GuestPassAndRsvp.tsx successfully!")
