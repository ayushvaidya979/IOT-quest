import re

# Read current module-data.js
with open("module-data.js", "r", encoding="utf-8") as f:
    mod_data = f.read()

# Read current module-quizzes.js
with open("module-quizzes.js", "r", encoding="utf-8") as f:
    quiz_data = f.read()

print(f"Original sizes: data={len(mod_data)}, quiz={len(quiz_data)}")
