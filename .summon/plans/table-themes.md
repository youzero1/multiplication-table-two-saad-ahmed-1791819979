---
status: pending
title: Multiple Themes for the Table of 2
option: preset-themes :: Preset theme gallery :: A row of named themes (Light, Dark, Ocean, Sunset, Forest) that instantly restyle the whole page and table.
option: dark-light-toggle :: Dark & light toggle :: One simple toggle button that flips the app between a light look and a dark look.
option: custom-accent-picker :: Custom accent picker :: Pick your own accent color from swatches and the table, headings, and highlights adopt it.
option: animated-gradients :: Animated gradient themes :: Playful themes with slowly shifting gradient backgrounds behind the table card.
recommended: preset-themes
---

Add theming to the multiplication table app so the user can change how it looks. The table content stays the same; only the colors (and in one option, animated backgrounds) change.

## Common steps

1. Add theme state at the app-shell level (src/routes/__root.tsx): which theme is active, kept in localStorage so the choice survives a page reload, and applied to the page wrapper so the whole page (background + table card) restyles together.
   - Expected outcome: switching themes updates the entire page instantly and the choice is still there after refresh.

2. Rework src/components/MultiplicationTable.tsx so its colors (card background, heading, big answer numbers, row stripes, hover highlight) come from the active theme instead of the current fixed light styling — via theme-aware utility classes.
   - Expected outcome: the table looks intentional and polished in every theme, with readable contrast everywhere.

3. Keep the table fully readable and the layout unchanged in every theme — only colors (and backgrounds) vary.
   - Expected outcome: no theme breaks readability or shifts the layout.

## Option: Preset theme gallery

1. Build a ThemeSwitcher bar above the table: one button per theme — Light, Dark, Ocean (deep blues), Sunset (warm oranges/pinks), Forest (greens) — each shown as a small color-swatch chip with its name. The active theme's chip gets a ring highlight.
   - Expected outcome: clicking a chip instantly restyles page background, card, and table to that theme.

2. Define each theme's palette (page background, card surface, heading color, number color, row stripe, hover) as a small set of utility-class mappings.
   - Expected outcome: all five themes look distinct, cohesive, and readable.

## Option: Dark & light toggle

1. Add a single toggle button (sun/moon style) in the top corner of the page that flips between the current light look and a new dark look (dark slate background, near-white text, soft dark card).
   - Expected outcome: one click flips the whole app between light and dark; the choice persists after reload.

2. Enable class-based dark mode in Tailwind (custom variant in global.css) and add dark: styles to the shell and table.
   - Expected outcome: both modes look polished, with strong contrast in dark mode.

## Option: Custom accent picker

1. Add a row of accent color swatches (e.g. indigo, emerald, rose, amber, sky, violet) above the table; picking one recolors the heading, the big answer numbers, the hover highlight, and the active-stripe accents.
   - Expected outcome: the app instantly adopts the chosen accent while keeping a clean neutral (light or dark) base.

2. Include a light/dark base switch alongside the swatches so the accent works on either base.
   - Expected outcome: every accent color stays readable on both bases.

## Option: Animated gradient themes

1. Add 3-4 gradient themes (e.g. Aurora, Peach, Midnight, Mint) chosen from a chip row; the page background becomes a slow, subtle animated gradient (large soft color blobs drifting via CSS keyframes) while the table card stays a solid, readable surface on top.
   - Expected outcome: the background gently moves without distracting from the numbers; the card remains crisp and readable.

2. Define the animations in global.css with pure CSS keyframes (no JS animation loops), respecting reduced-motion preferences.
   - Expected outcome: smooth, lightweight animation that pauses for users who prefer reduced motion.
