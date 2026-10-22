# -*- coding: utf-8 -*-
"""
Merger script to incorporate all 9 new modules into module-data.js and module-quizzes.js
"""

import json
import re
import subprocess
from builder_group1 import GROUP1_DATA
from builder_group2 import GROUP2_DATA
from builder_group3 import GROUP3_DATA
from builder_quizzes import ALL_NEW_QUIZZES

# Combine all 9 module data objects
ALL_DATA = {}
ALL_DATA.update(GROUP1_DATA)
ALL_DATA.update(GROUP2_DATA)
ALL_DATA.update(GROUP3_DATA)

print(f"Total modules to merge into module-data.js: {len(ALL_DATA)}")
print(f"Total quizzes to merge into module-quizzes.js: {len(ALL_NEW_QUIZZES)}")

# 1. Update module-data.js
with open("module-data.js", "r", encoding="utf-8") as f:
    orig_data = f.read()

# Find the last closing brace
last_brace_idx = orig_data.rfind("};")
if last_brace_idx == -1:
    raise ValueError("Could not find closing '};' in module-data.js")

base_data_code = orig_data[:last_brace_idx].rstrip()

# Generate JS code for new modules
new_data_entries = []
for mod_id, mod in ALL_DATA.items():
    # Convert module object to clean JS object string
    steps_code = []
    for s in mod["steps"]:
        ann_json = json.dumps(s["annotations"], indent=10)
        takeaways_json = json.dumps(s["takeaways"], indent=10)
        tip_escaped = s["tip"].replace('"', '\\"').replace('`', '\\`')
        desc_escaped = s["desc"].replace('"', '\\"').replace('`', '\\`')
        title_escaped = s["title"].replace('"', '\\"')
        sub_escaped = s["subtitle"].replace('"', '\\"')
        alt_escaped = s["altitude"].replace('"', '\\"')
        label_escaped = s["doodleLabel"].replace('"', '\\"')
        svg_code = s["svgDoodle"].strip()

        step_str = f"""      {{
        stepNum: {s['stepNum']},
        altitude: "{alt_escaped}",
        title: "{title_escaped}",
        subtitle: "{sub_escaped}",
        desc: "{desc_escaped}",
        takeaways: {takeaways_json},
        tip: "{tip_escaped}",
        doodleLabel: "{label_escaped}",
        svgDoodle: `
{svg_code}
        `,
        annotations: {ann_json}
      }}"""
        steps_code.append(step_str)

    all_steps_str = ",\n".join(steps_code)

    mod_str = f"""  {mod_id}: {{
    id: '{mod["id"]}',
    name: '{mod["name"].replace("'", "\\'")}',
    shortName: '{mod["shortName"].replace("'", "\\'")}',
    level: '{mod["level"]}',
    reward: '{mod["reward"].replace("'", "\\'")}',
    xp: {mod["xp"]},
    steps: [
{all_steps_str}
    ]
  }}"""
    new_data_entries.append(mod_str)

merged_module_data = base_data_code + ",\n\n" + ",\n\n".join(new_data_entries) + "\n};\n"

with open("module-data.js", "w", encoding="utf-8") as f:
    f.write(merged_module_data)

print("Updated module-data.js successfully!")

# 2. Update module-quizzes.js
with open("module-quizzes.js", "r", encoding="utf-8") as f:
    orig_quiz = f.read()

last_quiz_brace = orig_quiz.rfind("};")
if last_quiz_brace == -1:
    raise ValueError("Could not find closing '};' in module-quizzes.js")

base_quiz_code = orig_quiz[:last_quiz_brace].rstrip()

new_quiz_entries = []
for q_id, q_data in ALL_NEW_QUIZZES.items():
    questions_code = []
    for q in q_data["questions"]:
        opts_json = json.dumps(q["options"], indent=10)
        q_text = q["question"].replace('"', '\\"').replace("'", "\\'")
        exp_text = q["explanation"].replace('"', '\\"').replace("'", "\\'")
        
        q_str = f"""      {{
        question: '{q_text}',
        options: {opts_json},
        correct: {q['correct']},
        explanation: '{exp_text}'
      }}"""
        questions_code.append(q_str)

    all_questions_str = ",\n".join(questions_code)

    quiz_str = f"""  {q_id}: {{
    title: '{q_data["title"].replace("'", "\\'")}',
    kicker: '{q_data["kicker"].replace("'", "\\'")}',
    passScore: {q_data["passScore"]},
    questions: [
{all_questions_str}
    ]
  }}"""
    new_quiz_entries.append(quiz_str)

merged_quiz_data = base_quiz_code + ",\n\n" + ",\n\n".join(new_quiz_entries) + "\n};\n"

with open("module-quizzes.js", "w", encoding="utf-8") as f:
    f.write(merged_quiz_data)

print("Updated module-quizzes.js successfully!")
