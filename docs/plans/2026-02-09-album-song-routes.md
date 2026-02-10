# Album and Song Routes Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace `/releases/:slug` with `/album/:slug` and `/song/:slug`, add Sandcastles track pages as songs with lyrics and per-track streaming links, and make the album page link to track pages only.

**Architecture:** Keep a single release data source but add `type: "track"` and an optional `album` metadata block. Routing becomes two explicit routes for album and song pages, each using the same page component with small conditional rendering. Album page shows album streaming links + track list. Track pages show lyrics + track streaming links. Missing service URLs are omitted (no fallback search links).

**Tech Stack:** React Router, React 18, Tailwind, TypeScript, Vitest, Testing Library.

### Task 1: Add route tests for album/song URLs

**Files:**
- Create: `app/routes/__tests__/routing.test.tsx`

**Step 1: Write the failing test**

```tsx
import { describe, expect, it } from "vitest";
import { routes } from "../routes";

describe("routes", () => {
  it("includes album and song routes", () => {
    const paths = routes.map((route) => route.path);
    expect(paths).toContain("album/:slug");
    expect(paths).toContain("song/:slug");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL (no routes or no export)

**Step 3: Write minimal implementation**

- Update `app/routes.ts` to export the routes array separately (e.g., `export const routes = [...]`).
- Add `album/:slug` and `song/:slug` routes that point to two new route files (Task 2).

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

```bash
git add app/routes.ts app/routes/__tests__/routing.test.tsx
git commit -m "test: cover album and song routes"
```

### Task 2: Add album and song route files

**Files:**
- Create: `app/routes/album.$slug.tsx`
- Create: `app/routes/song.$slug.tsx`
- Modify: `app/routes/releases.$slug.tsx` (remove or migrate logic)

**Step 1: Write the failing test**

```tsx
import { describe, expect, it } from "vitest";
import { getReleaseBySlug } from "../../data/releases";

describe("album/song page types", () => {
  it("marks sandcastles as album", () => {
    const release = getReleaseBySlug("sandcastles");
    expect(release?.type).toBe("album");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL (route file missing or release type mismatch if changed later)

**Step 3: Write minimal implementation**

- Duplicate the existing release page into `album.$slug.tsx` and `song.$slug.tsx`.
- In album route, validate `release.type === "album"`.
- In song route, validate `release.type !== "album"` (single or track).
- Ensure both routes use the same `useServiceSelection` behavior.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

```bash
git add app/routes/album.$slug.tsx app/routes/song.$slug.tsx app/routes/releases.$slug.tsx
git commit -m "feat: add album and song routes"
```

### Task 3: Update release data model for tracks

**Files:**
- Modify: `app/data/releases.ts`
- Modify: `app/data/__tests__/releases.test.ts`

**Step 1: Write the failing test**

```ts
import { describe, expect, it } from "vitest";
import { getReleaseBySlug } from "../releases";

describe("sandcastles tracks", () => {
  it("exposes track releases", () => {
    const track = getReleaseBySlug("improv-for-no-one");
    expect(track?.type).toBe("track");
    expect(track?.album?.slug).toBe("sandcastles");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL (no track release entries)

**Step 3: Write minimal implementation**

- Add `type: "track"` and optional `album` metadata to the release type.
- Create track releases with:
  - `slug`: `improv-for-no-one`, `anymore`, `sandcastles-song`, `broken`
  - `title`, `artist`, `coverImage` (album art)
  - `links`: only the services you provide; no fallback links
  - `lyrics`: from the provided text
- Update the Sandcastles album entry to include `tracks` that reference these slugs.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

```bash
git add app/data/releases.ts app/data/__tests__/releases.test.ts
git commit -m "feat: add sandcastles track releases"
```

### Task 4: Update album page to link to track pages only

**Files:**
- Modify: `app/routes/album.$slug.tsx`
- Modify: `app/routes/song.$slug.tsx`

**Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import AlbumPage from "../album.$slug";

vi.mock("react-router", async () => {
  const actual = await vi.importActual("react-router");
  return {
    ...actual,
    useLoaderData: () => ({ release: { type: "album", tracks: [{ slug: "improv-for-no-one", title: "Improv for No One" }], links: {}, title: "Sandcastles", artist: "Straight Lines Bright Colors", coverImage: "", description: "" } }),
  };
});

describe("album page track list", () => {
  it("links to track pages", () => {
    render(
      <MemoryRouter>
        <AlbumPage />
      </MemoryRouter>
    );
    const link = screen.getByRole("link", { name: /Improv for No One/i });
    expect(link).toHaveAttribute("href", "/song/improv-for-no-one");
  });
});
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL (track links not pointing to /song)

**Step 3: Write minimal implementation**

- In album page, render a track grid linking to `/song/:slug`.
- Remove per-track streaming link grids from the album page.
- In song page, render album backlink to `/album/sandcastles` (from `album` metadata).

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

```bash
git add app/routes/album.$slug.tsx app/routes/song.$slug.tsx app/routes/__tests__/routing.test.tsx
git commit -m "feat: link album tracks to song pages"
```

### Task 5: Update home page release links to new routes

**Files:**
- Modify: `app/welcome/welcome.tsx`
- Modify: `app/welcome/__tests__/homeLinks.test.tsx`

**Step 1: Write the failing test**

```tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import { Welcome } from "../welcome";

it("routes albums to /album and songs to /song", () => {
  render(
    <MemoryRouter>
      <Welcome />
    </MemoryRouter>
  );

  const album = screen.getByRole("link", { name: /Sandcastles/i });
  expect(album).toHaveAttribute("href", "/album/sandcastles");
});
```

**Step 2: Run test to verify it fails**

Run: `npm test`
Expected: FAIL (links still /releases)

**Step 3: Write minimal implementation**

- Update album cards to link to `/album/:slug`.
- Update all other releases to `/song/:slug`.
- Update tests accordingly.

**Step 4: Run test to verify it passes**

Run: `npm test`
Expected: PASS

**Step 5: Commit**

```bash
git add app/welcome/welcome.tsx app/welcome/__tests__/homeLinks.test.tsx
git commit -m "feat: link home cards to album/song routes"
```

---

**Notes:**
- Do not use search links for missing services. Omit them.
- Track lyrics provided by the user for all Sandcastles tracks.
- Track streaming links only for services provided (none yet beyond Spotify; leave missing services out).
