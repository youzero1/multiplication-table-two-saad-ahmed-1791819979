---
status: pending
title: Multiplication Table of 2
---

A fresh, single-page app that displays the multiplication table of 2 (2×1 through 2×12) in a clean, attractive layout.

1. Scaffold the project base: create package.json, vite.config.ts, tsconfig.json, and index.html with the standard React + Vite + TypeScript + TanStack Router + Tailwind CSS v4 setup (Tailwind via the @tailwindcss/vite plugin).
   - Expected outcome: the project installs and dev server starts without errors.

2. Create src/styles/global.css starting with exactly `@import "tailwindcss";` and import it once in src/main.tsx, which mounts the router.
   - Expected outcome: global styles load app-wide.

3. Create src/routes/__root.tsx as the app shell: centered page container, light background, and an <Outlet /> for routes.
   - Expected outcome: a consistent page layout wraps every route.

4. Create src/components/MultiplicationTable.tsx, a reusable component that renders the table of 2 as a styled card: a bold heading ("Table of 2"), and one row per fact (2 × 1 = 2 … 2 × 12 = 24) with large readable numbers, alternating row backgrounds, and a subtle hover highlight. The multiplier base (2) is a prop so it can be reused later.
   - Expected outcome: the component renders all 12 facts correctly and looks polished.

5. Create src/routes/index.tsx (home route "/") that renders the MultiplicationTable component centered on the page.
   - Expected outcome: visiting / shows the table of 2 nicely displayed.

6. Verify the generated src/routeTree.gen.ts picks up both routes and the app renders without TypeScript errors.
   - Expected outcome: home page displays the finished multiplication table of 2.
