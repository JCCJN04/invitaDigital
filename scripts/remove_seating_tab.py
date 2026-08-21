panel_file = r"c:\Users\mendo\Downloads\code\chamba\invitaciones\invitacionesdigitales\components\panel-client-view.tsx"

with open(panel_file, "r", encoding="utf-8") as f:
    lines = f.readlines()

new_lines = []
skip = False

for i, line in enumerate(lines):
    # Start skipping from the Navigation Segmented Control Tabs
    if "{/* Navigation Segmented Control Tabs */}" in line:
        skip = True
    
    if skip:
        # Stop skipping right at the Metrics Cards Grid
        if "{/* Metrics Cards Grid */}" in line:
            skip = False
            new_lines.append("        {/* GUEST LIST & RSVP METRICS */}\n")
            new_lines.append("        <div className=\"space-y-6 sm:space-y-8 animate-in fade-in duration-300\">\n")
            new_lines.append("            {/* Metrics Cards Grid */}\n")
        continue
    else:
        new_lines.append(line)

with open(panel_file, "w", encoding="utf-8") as f:
    f.writelines(new_lines)

print(f"Original lines: {len(lines)}, New lines: {len(new_lines)}")
print("Removed seating tabs and 2D floor plan view cleanly!")
