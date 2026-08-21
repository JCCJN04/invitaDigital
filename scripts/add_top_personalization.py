import re

page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

with open(page_path, "r", encoding="utf-8") as f:
    code = f.read()

# 1. Update the component state to fetch guest in PageV2
guest_fetch_code = """export default function PageV2() {
  const [showIntro, setShowIntro] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [guest, setGuest] = useState<{ name: string; passes_assigned: number; table_assigned?: string } | null>(null);

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://mnswhidquvjaaviyqtfi.supabase.co";
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1uc3doaWRxdXZqYWF2aXlxdGZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcwMDQ3MjUsImV4cCI6MjEwMjU4MDcyNX0.E_m3pf6zyzCl50b2LF4lEtbo8NyVaqAjF0Xwb1iytPw";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const token = params.get("guest") || params.get("token") || params.get("p");
    if (!token) return;

    fetch(`${supabaseUrl}/rest/v1/guests?token=eq.${token}&select=name,passes_assigned,table_assigned`, {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setGuest(data[0]);
        }
      })
      .catch((err) => console.error("Error loading guest:", err));
  }, [supabaseUrl, supabaseKey]);"""

if "export default function PageV2() {" in code and "setGuest" not in code:
    code = code.replace("export default function PageV2() {\n  const [showIntro, setShowIntro] = useState(true);\n  const [isExiting, setIsExiting] = useState(false);", guest_fetch_code)
    print("1. Added guest fetch hook to PageV2")

# 2. Add personalized guest seal on the envelope screen
envelope_seal = """            <div className="env-title" style={{ color: "inherit" }}>
              <h1 className="env-names" style={{ fontFamily: "var(--font-pinyon), cursive", fontSize: "clamp(3.4rem, 9.5vw, 6.5rem)", color: "#28211C", lineHeight: 1, fontWeight: 400 }}>
                Carla <span className="env-amp" style={{ color: "#8B6248" }}>&amp;</span> Ángel
              </h1>
              {guest && (
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
              )}
            </div>"""

old_env_title = """            <div className="env-title" style={{ color: "inherit" }}>
              <h1 className="env-names" style={{ fontFamily: "var(--font-pinyon), cursive", fontSize: "clamp(3.4rem, 9.5vw, 6.5rem)", color: "#28211C", lineHeight: 1, fontWeight: 400 }}>
                Carla <span className="env-amp" style={{ color: "#8B6248" }}>&amp;</span> Ángel
              </h1>
            </div>"""

if old_env_title in code:
    code = code.replace(old_env_title, envelope_seal)
    print("2. Added personalized seal on Envelope Intro")

# 3. Add personalized top sticky banner and hero pass on main invitation page
hero_pass = """        {/* ══ 1. HEADER: SOBRE + MÚSICA ══════════════════ */}
        {guest && (
          <div style={{
            position: "sticky",
            top: 0,
            zIndex: 40,
            background: "rgba(255, 255, 255, 0.92)",
            backdropFilter: "blur(10px)",
            borderBottom: "1px solid rgba(197, 160, 89, 0.35)",
            padding: "0.6rem 1rem",
            textAlign: "center",
            boxShadow: "0 4px 15px rgba(0,0,0,0.04)"
          }}>
            <span style={{ fontSize: "0.68rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, color: "#A67C1E" }}>
              Invitación Personalizada
            </span>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem", fontWeight: 700, color: "#2C2520", margin: "0.1rem 0" }}>
              {guest.name}
            </p>
            <span style={{ fontSize: "0.8rem", color: "#6F4E38", fontWeight: 600 }}>
              🎟️ {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}
            </span>
          </div>
        )}
        <header className="v2-header v2-fade v2-fade-1">"""

old_header = """        {/* ══ 1. HEADER: SOBRE + MÚSICA ══════════════════ */}
        <header className="v2-header v2-fade v2-fade-1">"""

if old_header in code:
    code = code.replace(old_header, hero_pass)
    print("3. Added personalized sticky banner on main invitation")

with open(page_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Saved updated page.tsx with full personalization at the beginning!")
