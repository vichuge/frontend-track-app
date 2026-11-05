# AGENTS.md

Guide for AI agents and contributors working on **Track water**, a mobile-first React app to log drinks and follow daily hydration. It is a **self-contained demo**: a bundled mock API stands in for the original Rails backend, so the app needs no external services.

## Quick commands

| Task | Command |
| --- | --- |
| Install | `npm ci` (Node 22, see `.nvmrc`) |
| Dev server | `npm run dev` → http://localhost:5173 |
| Unit + integration tests | `npm test` (`npm run test:watch` while developing) |
| Lint JS + CSS | `npm run lint` |
| Production build | `npm run build` → `dist/` |
| Everything CI runs | `npm run check` |

**Before you finish any change, run `npm run check`. It must pass with zero errors or warnings.**

> npm 10 sometimes crashes with `Cannot read properties of null (reading 'edgesOut')` when **adding** packages. If that happens, use `npx npm@11 install <pkg>`. `npm ci` works fine with npm 10.

## Stack

- **React 19** + **React Router 7** (`react-router` package, `HashRouter` for GitHub Pages)
- **Redux Toolkit 2** (`createSlice`, `createAsyncThunk`) + `react-redux` 9
- **Vite 7** for dev/build, **Vitest 4** + Testing Library + jsdom for tests
- **ESLint 9** (flat config: recommended + react + react-hooks + jsx-a11y), **Stylelint 16** (standard)
- Plain CSS with design tokens. No CSS framework. **Font Awesome 6 Free** is installed from npm (bundled, no CDN).
- No axios, no moment: use `fetch` and `Intl` (see `src/utils/dates.js`).

## Project layout

```
index.html               Vite entry HTML
public/                  Static files copied as-is (favicon, manifest, icon)
src/
  main.jsx               Bootstraps React, Redux store, global CSS and Font Awesome
  App.jsx                Route table (AppRoutes) + HashRouter
  api/
    client.js            Public API used by thunks: login, register, getLists, getRecords, createRecord
    mockServer.js        Mock of the Rails /api/v1 endpoints (routes, status codes, JSON shapes)
    mockDb.js            localStorage-backed tables seeded from src/mocks/*.json; resetDb()
    mockToken.js         Fake JWT ({ user_id, exp }), 24 h lifetime
    ApiError.js          Error type with HTTP-like `status`
  mocks/                 Seed data: users.json, lists.json, records.json
  store/
    index.js             setupStore(preloadedState?) + session persistence
    authSlice.js         login / signUp thunks, logout, selectors
    listsSlice.js        fetchLists (cached once per session)
    recordsSlice.js      fetchRecords, createRecord, selectSortedRecords
    session.js           Reads/writes the session in localStorage
    thunkHelpers.js      toRejectValue, isUnauthorized (401 → automatic logout)
  components/            Reusable UI (AppBar, BottomNav, TextField, Alert, charts, guards…)
  pages/                 One component per route
  utils/                 dates, records (grouping/totals), text, storage
  styles/                tokens.css → base.css → layout.css → features.css (imported by index.css)
  test/                  Vitest setup + renderApp helper
  **/*.test.js(x)        Tests live next to the code they cover
```

## Routes

| Path | Page | Access |
| --- | --- | --- |
| `/#/` | `LoginPage` | anonymous only |
| `/#/signup` | `SignUpPage` | anonymous only |
| `/#/list` | `DrinksPage` (choose a drink) | logged in |
| `/#/form/:id` | `AddRecordPage` (cups for drink `:id`) | logged in |
| `/#/records` | `RecordsPage` (summary, 7-day chart, history) | logged in |
| anything else | redirects to `/` | — |

Guards live in `src/components/RouteGuards.jsx`. Logged-in users hitting `/` or `/signup` are sent to `/list`; anonymous users are sent to `/`.

## Mock API (offline backend)

The mock reproduces the original backend, [vichuge/backend-track-app](https://github.com/vichuge/backend-track-app/tree/start-api). Keep it **contract-compatible**: if you change a shape here, the app must still work against the real API.

| Method & path | Body | Success | Errors |
| --- | --- | --- | --- |
| `POST /users` | `{ user: { username, password } }` | 201 `{ id, username, token }` | 422 `{ error }` (taken, too short) |
| `POST /authentication` | `{ username, password }` | 201 `{ id, username, token }` | 401 `No such user` / `Incorrect password` |
| `GET /lists` | header `Authorization: <token>` | 200 `[{ id, title, icon }]` | 401 |
| `GET /records` | header `Authorization` | 200 `[{ id, times, list, icon, date_added, user_id }]` (oldest first) | 401 |
| `POST /records` | `{ times, list_id }` + `Authorization` | 201 record (same shape) | 401, 422 |

- `icon` is a Font Awesome class string such as `"fas fa-water"`. FA 6 still accepts the FA 5 names the backend uses.
- Validation rules come from the Rails models: username ≥ 3 characters and unique (case-insensitive in the mock), password ≥ 6, times ≥ 1.
- The demo account is the first entry in `src/mocks/users.json` (`vichuge@mail.com` / `admin1234`). The login screen reads it from there, so update it in that one place only.
- Seed records use `days_ago` + `time` instead of fixed dates, so the demo always shows the last 7 days. `mockDb.js` turns them into `created_at` timestamps on first load.
- Data persists in `localStorage` under `track-water:mock-db:v1`. **Bump the version suffix if you change the stored shape.** "Reset demo data" on the login screen calls `resetDb()`.
- Latency is 350 ms in the browser and 0 in tests (`import.meta.env.MODE === 'test'`).

### Using a real backend

Copy `.env.example` to `.env.local` and set `VITE_API_URL=https://host/api/v1`. `src/api/client.js` then uses `fetch` instead of the mock, and the "Demo mode" box disappears (`isMockApi === false`).

### Adding an endpoint

1. Add the handler to `routes` in `mockServer.js` as `'METHOD /path': ({ body, headers }) => ({ status, data })`. Throw `ApiError` for failures.
2. Expose it in `api` in `client.js`. Thunks must only ever import `client.js`, never the mock directly.
3. Add a `createAsyncThunk` in the right slice, using `rejectWithValue(toRejectValue(error))` so a 401 logs the user out automatically.
4. Cover it in `mockServer.test.js`.

## State conventions

- Slice state: `{ items, status: 'idle' | 'loading' | 'succeeded' | 'failed', error }`.
- Components read with selectors exported from slices (`selectLists`, `selectSortedRecords`, …), never by poking `state.x.y` inline in several places.
- Session (`{ user, token }`) is saved by a store subscriber in `store/index.js`. Do not touch `localStorage` from components; use `utils/storage.js` (it wraps `localStorage` in try/catch).
- Any rejected thunk with `status: 401` resets auth, lists and records and shows "Your session has expired".

## UI / UX conventions

- **Mobile-first.** The app shell is at most 480 px wide and centered on desktop. Touch targets are ≥ 44 px.
- **Colors come only from `styles/tokens.css`.** Never hard-code a hex value in a stylesheet. The one exception is the fixed white UI that sits on the brand gradient (auth screens, app bar, light button). Every token has a dark-mode value (`prefers-color-scheme: dark`); add both when you create one.
- Text and buttons meet WCAG AA contrast. `--color-brand` (#42b5e8) is for accents and fills only, never for small text on white.
- CSS class naming is BEM-like: `.block`, `.block__element`, `.block--modifier`, state classes `.is-active`, `.is-selected`, `.is-new`.
- Accessibility rules:
  - Every input has a visible `<label>` (use `TextField`).
  - Decorative icons go through `<Icon>`, which sets `aria-hidden`.
  - Icon-only buttons need `aria-label`.
  - Errors use `<Alert>` (`role="alert"`).
  - Charts include a visually hidden table.
- Forms validate on blur and on submit, never while the user types. Disable submit buttons and show a `<Spinner>` while a request is in flight.
- Every data screen handles all four states: loading (skeleton or spinner), error (Alert + Retry), empty (`EmptyState` + CTA) and success.
- Dates: use the helpers in `utils/dates.js` (`formatDayLabel`, `formatTime`). The UI language is English (`en-US`).
- Respect `prefers-reduced-motion` (already handled globally in `base.css`).

## Code style

- Function components and hooks only. One component per file, named `PascalCase.jsx`. Use `.js` for files without JSX.
- `PropTypes` on every component that takes props.
- Imports: packages first, then local modules alphabetically by path.
- No `console.log`, no commented-out code, no direct DOM manipulation (`document.getElementById` etc.).
- Effects declare their full dependency arrays (enforced by `react-hooks/exhaustive-deps`). Clean up timers.

## Testing

- `src/test/setup.js` clears `localStorage` and reseeds the mock DB before every test.
- Use `renderApp({ route, preloadedState })` from `src/test/renderApp.jsx` for page and flow tests. It mounts the real routes, store and mock API.
- Query by role or label (`getByRole`, `getByLabelText`), not by CSS class. Use `userEvent.setup()` for interactions.
- When you add a feature, add or extend a test that covers it.

## Deployment

`.github/workflows/deploy.yml` builds `dist/` and publishes it to GitHub Pages on every push to `development`. This requires the repo's Pages source to be set to **GitHub Actions**. `vite.config.js` uses `base: './'`, so the build works under any sub-path. `.github/workflows/ci.yml` runs lint, tests and build on PRs.

The legacy `docs/` folder is the old CRA-era Pages output and is ignored by the linters. Do not build into it.
