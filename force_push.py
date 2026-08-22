import subprocess
print(subprocess.run(["git", "push", "-f", "origin", "HEAD:feat/admission-journey-planner"], capture_output=True, text=True).stdout)
print(subprocess.run(["git", "push", "-f", "origin", "HEAD:feat/admission-journey-planner"], capture_output=True, text=True).stderr)
