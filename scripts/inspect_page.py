import os

page_path = r"C:\Users\mendo\Downloads\code\chamba\invitaciones\boda carla y angel\app\(main)\page.tsx"

with open(page_path, "r", encoding="utf-8") as f:
    page_code = f.read()

# Let's inspect page.tsx and ensure guest detection is added at the top of PageV2 component
print("Length of page.tsx:", len(page_code))
