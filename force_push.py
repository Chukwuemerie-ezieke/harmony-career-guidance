import subprocess
print(subprocess.run(["git", "push", "-f", "origin", "HEAD:feat/pathverge-pwa-low-data"], capture_output=True, text=True).stdout)
print(subprocess.run(["git", "push", "-f", "origin", "HEAD:feat/pathverge-pwa-low-data"], capture_output=True, text=True).stderr)
