import subprocess
print(subprocess.run(["git", "push", "-f", "origin", "HEAD:feat/jamb-eligibility-and-readiness"], capture_output=True, text=True).stdout)
print(subprocess.run(["git", "push", "-f", "origin", "HEAD:feat/jamb-eligibility-and-readiness"], capture_output=True, text=True).stderr)
