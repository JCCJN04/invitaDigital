import re

page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

with open(page_path, "r", encoding="utf-8") as f:
    code = f.read()

# Pattern to remove the sticky banner
pattern = r'\{\/\* ══ 1\. HEADER: SOBRE \+ MÚSICA ══════════════════ \*\/\}\s*\{guest && \([\s\S]*?\}\)\}\s*<header className="v2-header v2-fade v2-fade-1">'

replacement = '{/* ══ 1. HEADER: SOBRE + MÚSICA ══════════════════ */}\n        <header className="v2-header v2-fade v2-fade-1">'

if re.search(pattern, code):
    code = re.sub(pattern, replacement, code)
    print("Removed sticky top banner from page.tsx successfully")
else:
    print("Pattern not found, checking exact string")

with open(page_path, "w", encoding="utf-8") as f:
    f.write(code)

print("Saved clean page.tsx!")
