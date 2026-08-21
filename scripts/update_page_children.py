import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

page_path = r'C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx'

with open(page_path, 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Update guest state type to include children_count
code = code.replace(
    'const [guest, setGuest] = useState<{ name: string; passes_assigned: number; table_assigned?: string } | null>(null);',
    'const [guest, setGuest] = useState<{ name: string; passes_assigned: number; children_count?: number; table_assigned?: string } | null>(null);'
)

# 2. Update fetch select to include children_count
code = code.replace(
    'fetch(`${supabaseUrl}/rest/v1/guests?token=eq.${token}&select=name,passes_assigned,table_assigned`',
    'fetch(`${supabaseUrl}/rest/v1/guests?token=eq.${token}&select=name,passes_assigned,children_count,table_assigned`'
)

# 3. Update the badge text to show adults + children breakdown
old_badge = '                    {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}'
new_badge = '''                    {(() => {
                      const kids = guest.children_count ?? 0;
                      const adults = guest.passes_assigned - kids;
                      if (kids > 0) {
                        return (
                          <>
                            {adults} {adults === 1 ? "adulto" : "adultos"}
                            {" · "}
                            {kids} {kids === 1 ? "niño" : "niños"}
                          </>
                        );
                      }
                      return <>{guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}</>;
                    })()}'''

code = code.replace(old_badge, new_badge)

with open(page_path, 'w', encoding='utf-8') as f:
    f.write(code)

print('page.tsx actualizado correctamente')
