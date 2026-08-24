import subprocess
import json
import os

title = "feat: add PathVerge PWA and low-data experience"
body = """## Summary
- Configured a standards-compliant Progressive Web App using `vite-plugin-pwa` with custom caching.
- Enabled standalone installation, manifesting with PathVerge colors and icons.
- Implemented `PWAStatus.tsx` to handle online/offline detection (with an accessible `aria-live` region and visual banner) and dismissible installation prompts.
- Introduced a Low-Data Mode toggle (persisted in `localStorage`) that disables animations, backgrounds, and shadows.
- Added `PWA_LOW_DATA.md` to document caching behavior, exclusions, and testing procedures.

## Cache Strategy & Data Integrity
- Precached app shell, static assets, and local data layers (Catalogue, Eligibility, Journey, Alternatives).
- Guaranteed that all `/api/*`, `/dashboard`, and `/shared/*` routes are `NetworkOnly` to protect user data and dynamic server logic.
- Offline viewing displays a clear banner reminding users that content may be stale and should be verified online.

## Validation
- `npm run check` and `npm run build` executed successfully.
- Service worker and manifest correctly generated.
- Testing confirmed offline fallback and low-data modes work without breaking application state or accessibility.
"""

data = {
    "title": title,
    "body": body,
    "head": "feat/pathverge-pwa-low-data",
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
