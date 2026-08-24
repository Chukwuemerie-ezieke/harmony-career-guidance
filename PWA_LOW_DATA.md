# PathVerge PWA and Low-Data Experience

## Purpose
PathVerge is designed to be accessible to Nigerian students who may be on unreliable or limited internet connections. This feature introduces Progressive Web App (PWA) installation for offline reliability and a "Low-data mode" to conserve bandwidth and reduce motion.

## PWA and Caching Strategy
The PWA is powered by `vite-plugin-pwa` utilizing Workbox.

### What is Cached (Precached or Cache-First)
- **App Shell & UI Assets:** Core HTML, CSS, JavaScript, and fonts are precached.
- **Local Data:** The local data layers for Courses, Eligibility mapping, Journey planner, and Alternative Pathways are bundled within the app and thus automatically available offline.
- **Images:** Any image fetched by the application is served cache-first and retained for up to 30 days.

### What is Excluded (Network-Only)
- **Sensitive Data & API Endpoints:** All `/api/*` routes are excluded from the service worker cache and explicitly set to `NetworkOnly`.
- **Dashboards & Dynamic Sharing:** Paths like `/dashboard` and `/shared/*` are denied navigate fallbacks.
- Assessment inputs and personal readiness data are saved strictly in `localStorage`, never via the service worker.

### Offline Limitations & Freshness
- An explicit visual banner announces when the user is offline.
- Users are reminded that while they can view saved guidance, admission deadlines, university requirements, and programme availability may change and must be verified online with official sources.

## Low-Data Mode
A user-controlled "Low-data mode" toggle is available in the main navigation.
- **Behavior:** When enabled, it applies a `low-data-mode` class to the document body. This strips away decorative backgrounds (like dot patterns), disables CSS animations and transitions (respecting `prefers-reduced-motion`), and removes heavy box-shadows.
- **Persistence:** The preference is saved locally via `localStorage`.

## Testing Instructions
1. Run `npm run build` and `npm run start` to serve the production build.
2. Open the browser DevTools (Network tab) and set the throttling to "Offline".
3. Refresh the page to verify that the app shell loads successfully and the offline banner appears.
4. Toggle "Low-data mode" in the navigation and observe the removal of animations and decorative elements.
