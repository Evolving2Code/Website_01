# Alder & Ash

Marketing site for **Alder & Ash**, a fictional wood-fired steakhouse in Pioneer Square, Seattle. It's built with [Astro](https://astro.build) and [GSAP](https://gsap.com) and outputs a fully static site that runs on any static host.

## Commands

| Command           | What it does                                     |
| ----------------- | ------------------------------------------------ |
| `npm install`     | Install dependencies (Node 20+)                  |
| `npm run dev`     | Start a dev server at http://localhost:4321      |
| `npm run build`   | Type-check, then build the site into `dist/`     |
| `npm run preview` | Serve the built site locally                     |

## Pages

| Path               | Contents                                                              |
| ------------------ | --------------------------------------------------------------------- |
| `/`                | Hero, intro, signature cuts, chef quote, press, private dining, visit |
| `/menu/`           | Dinner and wine & cocktails, as tabs (`/menu/#drinks` deep-links)     |
| `/story/`          | Chef, sourcing and dry-aging, building timeline                       |
| `/private-dining/` | Rooms with capacities and minimums, event inquiry form                |
| `/gallery/`        | Photo grid with a keyboard- and swipe-friendly lightbox, press, awards |
| `/visit/`          | Hours, address, parking, transit, accessibility, click-to-load map    |
| `/reservations/`   | Booking request form                                                  |

## Editing content

All content is plain data, so a copy change never touches the layout code.

- `src/data/site.ts`: name, address, phone, emails, hours, parking and transit notes, nav links
- `src/data/menu.ts`: every menu section, dish and price, plus the five featured cuts on the home page
- `src/data/press.ts`: press quotes and awards (**the current ones are placeholders with invented outlets**)
- `src/data/photos.ts`: the photo slots (see below)

The street address and coordinates in `site.ts` are placeholders. The 555 phone number and the `.example` emails are deliberately fake.

## Photos

Every image on the site is a named slot. Save a file named after a slot, such as `src/assets/photos/hero.jpg`, and the next build crops it to the slot's ratio and serves it as AVIF/WebP at several widths. Until then the slot shows a labeled placeholder. **[PHOTOS.md](PHOTOS.md)** has the full shot list with ratios and where each photo appears.

## Forms

The reservation and private-dining forms validate in the browser: required fields, email and phone format, Mondays closed, the 60-day booking window, and parties of 9 or more redirected to private dining. On a valid submit they show a confirmation, but **they don't send data anywhere yet**. To connect them, replace the `submit()` function in `src/scripts/forms.ts` with a call to your booking service (OpenTable, Resy, SevenRooms) or a form endpoint (Formspree, Supabase, a serverless function).

## Motion and performance

- **One orchestrated moment:** on load, the hero headline rises line by line, the arch opens upward like a hearth, and embers drift up from the bottom of the screen. The embers are drawn on a canvas, with a particle count scaled to screen size and CPU cores, and the loop pauses when off-screen or when the tab is hidden.
- **Scroll:** arched photos unveil as they enter the viewport, section text settles in, and the hearth band has a light parallax.
- **Interaction:** the signature-cut list swaps the arch photo on hover, focus or tap. The menu tabs, mobile menu and lightbox each have their own transitions.
- **Page changes** crossfade using native cross-document View Transitions, with no JavaScript, in browsers that support them.
- **Reduced motion:** with `prefers-reduced-motion` on, all of the above is skipped and content renders in its final state. With JavaScript off, every page is still complete and readable.
- **Weight:** fonts are self-hosted variable fonts, two of them preloaded, with no third-party requests. The only JavaScript is about 45 KB gzipped of GSAP and ScrollTrigger plus small page scripts, all deferred. The map only loads when a visitor asks for it.

## Design

- **Palette:** soot `#15110e`, charred oak `#201914`, bone `#ede4d6`, smoke `#b2a593`, brass `#c9a46a`, and ember `#e0773a` (used only for firelight).
- **Type:** Cormorant Garamond for display, Hanken Grotesk for body text.
- **Signature shape:** the hearth arch, a tall frame with a fully rounded top used on key photos.
- Tokens live at the top of `src/styles/global.css`.

## Deploying

`npm run build` produces static files in `dist/`. Vercel, Netlify and Cloudflare Pages all detect Astro automatically. The site is served at https://alder-and-ash.designyum.com (set as `site` in `astro.config.mjs` for canonical URLs). A CNAME for `alder-and-ash` on designyum.com points to Vercel.
