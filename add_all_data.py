import re
import json

# ==============================================================================
# Helper to generate SVG Doodle for each step
# ==============================================================================
def make_svg(title, body_shapes, text_items):
    texts = "\n".join([f'<text x="{t[0]}" y="{t[1]}" class="d-txt" fill="{t[2]}">{t[3]}</text>' for t in text_items])
    return f"""<svg viewBox="0 0 360 280" class="doodle-svg" xmlns="http://www.w3.org/2000/svg">
  <style>
    .d-line {{ stroke: #19e7bd; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; }}
    .d-accent {{ stroke: #ffc960; stroke-width: 3; fill: none; stroke-linecap: round; stroke-linejoin: round; }}
    .d-dash {{ stroke: #7fe3ff; stroke-width: 2.5; stroke-dasharray: 6 5; fill: none; }}
    .d-pin {{ stroke: #e0f2fe; stroke-width: 4; stroke-linecap: round; }}
    .d-txt {{ fill: #f0fdfa; font-family: 'Press Start 2P', monospace; font-size: 9px; }}
    .d-chip {{ fill: #0b2238; stroke: #19e7bd; stroke-width: 3.5; stroke-linejoin: round; }}
    .d-metal {{ fill: #133959; stroke: #7fe3ff; stroke-width: 2.5; }}
  </style>
  {body_shapes}
  {texts}
</svg>"""

# Load existing module-data.js
with open("module-data.js", "r", encoding="utf-8") as f:
    mod_data = f.read()

# Load existing module-quizzes.js
with open("module-quizzes.js", "r", encoding="utf-8") as f:
    quiz_data = f.read()

print("Files read successfully")
