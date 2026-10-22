import re
import subprocess

# We will read module-data.js and module-quizzes.js, remove any previous appends if needed, and cleanly append
with open("module-data.js", "r", encoding="utf-8") as f:
    mod_data = f.read()

with open("module-quizzes.js", "r", encoding="utf-8") as f:
    quiz_data = f.read()

# Let's check where the closing '};' is in module-data.js
last_brace_data = mod_data.rfind("};")
if last_brace_data == -1:
    print("Error: Could not find closing brace in module-data.js")
    exit(1)

# Let's check where the closing '};' is in module-quizzes.js
last_brace_quiz = quiz_data.rfind("};")
if last_brace_quiz == -1:
    print("Error: Could not find closing brace in module-quizzes.js")
    exit(1)

print(f"Closing brace found at {last_brace_data} in module-data.js and {last_brace_quiz} in module-quizzes.js")
