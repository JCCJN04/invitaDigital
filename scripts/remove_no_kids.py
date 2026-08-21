page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

with open(page_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
skip = False

for line in lines:
    if "No niños" in line or "No ninos" in line or "sin niños" in line:
        # Check if this is the comment starting the block
        if "{/*" in line:
            skip = True
            continue
    
    if skip:
        if "<GuestPassAndRsvp />" in line:
            skip = False
            new_lines.append(line)
        continue
    else:
        new_lines.append(line)

with open(page_path, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print(f"Original lines: {len(lines)}, New lines: {len(new_lines)}")
print("Removed 'No niños' block cleanly!")
