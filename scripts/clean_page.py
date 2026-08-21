page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

with open(page_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
skip = False

for i, line in enumerate(lines):
    # Find the sticky banner block right before header
    if "{guest && (" in line and i > 250:
        skip = True
    
    if skip:
        if '<header className="v2-header' in line:
            skip = False
            new_lines.append(line)
        continue
    else:
        new_lines.append(line)

with open(page_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print(f"Original lines: {len(lines)}, New lines: {len(new_lines)}")
print("Sticky top banner removed cleanly!")
