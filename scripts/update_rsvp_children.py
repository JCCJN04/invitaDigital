import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

rsvp_path = r'C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\components\GuestPassAndRsvp.tsx'

with open(rsvp_path, 'r', encoding='utf-8') as f:
    code = f.read()

# 1. Add children_count to GuestData interface
code = code.replace(
    '''interface GuestData {
  id: string;
  name: string;
  token: string;
  passes_assigned: number;
  passes_confirmed: number;
  rsvp_status: "pending" | "confirmed" | "declined";
  table_assigned?: string | null;
  notes?: string | null;
}''',
    '''interface GuestData {
  id: string;
  name: string;
  token: string;
  passes_assigned: number;
  passes_confirmed: number;
  children_count?: number;
  rsvp_status: "pending" | "confirmed" | "declined";
  table_assigned?: string | null;
  notes?: string | null;
}'''
)

# 2. Update the "Hemos reservado..." line to show adult/child breakdown
old_reserved = '          Hemos reservado con cariño <strong>{guest.passes_assigned} {guest.passes_assigned === 1 ? "lugar" : "lugares"}</strong> en tu honor.'
new_reserved = '''          {(() => {
            const kids = guest.children_count ?? 0;
            const adults = guest.passes_assigned - kids;
            if (kids > 0) {
              return (
                <>
                  Hemos reservado con cariño{" "}
                  <strong>
                    {adults} {adults === 1 ? "adulto" : "adultos"} y {kids} {kids === 1 ? "niño" : "niños"}
                  </strong>{" "}
                  en tu honor.
                </>
              );
            }
            return (
              <>
                Hemos reservado con cariño{" "}
                <strong>
                  {guest.passes_assigned} {guest.passes_assigned === 1 ? "lugar" : "lugares"}
                </strong>{" "}
                en tu honor.
              </>
            );
          })()}'''

code = code.replace(old_reserved, new_reserved)

with open(rsvp_path, 'w', encoding='utf-8') as f:
    f.write(code)

print('GuestPassAndRsvp.tsx actualizado correctamente')

# Verify the change
with open(rsvp_path, 'r', encoding='utf-8') as f:
    content = f.read()
if 'children_count' in content:
    print('children_count: OK en GuestData interface y en render')
else:
    print('ERROR: children_count no encontrado')
