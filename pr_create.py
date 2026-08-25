import subprocess
import json
import os

title = "chore: strengthen PathVerge release readiness and resilience"
body = """## Summary
- Created `RELEASE_READINESS.md` detailing the audit scope, test procedures, and known limitations.
- Improved `client/src/pages/not-found.tsx` to provide clear recovery actions (Home / Explore).
- Hardened all local storage access functions (`localStore.ts`, `readinessStore.ts`, `journeyStore.ts`) with try/catch wrappers and safe fallback defaults to prevent application crashes from malformed, missing, or outdated local data.
- Enforced `rel="noopener noreferrer"` on external links for security and accessibility.
- Verified that empty states across explore, alternatives, and eligibility pages are robust and user-friendly.
- PWA caches, authentication logic, scoring logic, and other private states are unaltered and protected.

## Data integrity
- Assessment questions, scoring mechanisms, and recommendation ranking logic are strictly preserved.
- No new tracking or third-party dependencies were introduced.
- Existing shared link functionality and user inputs saved locally are treated safely, with no aggressive wiping of unrelated data.

## Validation
- `npm run check` passes.
- `npm run build` completes successfully.
- Manual testing covered offline resilience, low-data mode interactions, and recovery from deleted/corrupted local storage values.
"""

data = {
    "title": title,
    "body": body,
    "head": "chore/pathverge-release-readiness",
    "base": "master"
}

token = os.environ.get("GITHUB_TOKEN_LOCAL")

curl_cmd = [
    "curl", "-s", "-X", "POST",
    "-H", "Accept: application/vnd.github+json",
    "-H", f"Authorization: Bearer {token}",
    "-H", "X-GitHub-Api-Version: 2022-11-28",
    "https://api.github.com/repos/Chukwuemerie-ezieke/harmony-career-guidance/pulls",
    "-d", json.dumps(data)
]

print(subprocess.run(curl_cmd, capture_output=True, text=True).stdout)
