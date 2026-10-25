# Build notes

How this site was made, step by step, so it can be repeated for the next project. Written October 2026.

## Inspiration

**[Build $10,000 Websites using Claude Code (Ultimate Guide)](https://youtu.be/VMvZuhcDdnw)** by Metics Media ([YouTube channel](https://www.youtube.com/@MeticsMedia)).

The video inspired the approach: use Claude Code with design skills installed to build a high-end site. The steps below are what was actually done for this site. They're not a summary of the video.

## Tools

| Tool | Used for |
|---|---|
| **Claude Code** (cloud session at claude.ai/code) | Planning, design, all code, screenshots, git, deployment |
| **Claude Code skills** (see below) | Design direction and the design system |
| **Google Flow** | Generating all 25 photos |
| **GitHub** (`Evolving2Code/alder-and-ash` (originally named `Website_01`)) | Code, pull requests |
| **Vercel** (Hobby plan, free) | Hosting, preview builds for every pull request |
| **Namecheap** | DNS for designyum.com |

Stack: Astro 7.4, GSAP 3.15 (with ScrollTrigger), TypeScript, sharp for images, self-hosted variable fonts from Fontsource. Node 22.

## Skills

Skills are instruction packs Claude Code loads for a task. They're vendored into this repo under `.claude/skills/`, so any Claude Code session opened on the repo picks them up automatically. They were added in pull requests #1 and #2, before the site was built.

| Skill | Source | Used here? |
|---|---|---|
| `ui-ux-pro-max` | [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | **Yes.** Started the build and generated the design system |
| `frontend-design` | [anthropics/skills](https://github.com/anthropics/skills) | **Yes.** Shaped the design plan and the review against generic "AI-looking" design |
| `banner-design`, `brand`, `design`, `design-system`, `slides`, `ui-styling` | Companion skills from the ui-ux-pro-max repo | Installed, not used for this site |

To add the same skills to a new repo, copy the `.claude/skills/` folder into it (or ask Claude Code to vendor them from the source repos above) and commit it.

### How the skills were used

1. **`/ui-ux-pro-max`** was invoked with the original prompt (below).
2. Its search tool generated a design system recommendation:

   ```bash
   python3 .claude/skills/ui-ux-pro-max/scripts/search.py \
     "luxury steakhouse fine dining restaurant dark elegant" \
     --design-system --motion 6 --density 3 -p "Steakhouse"
   ```

   It suggested a premium dark-and-gold palette, Cormorant + Montserrat type, and GSAP scroll motion. The palette direction and serif were kept. Montserrat was swapped for Hanken Grotesk, and the suggested "Liquid Glass" style was dropped because it's an Apple-app style that doesn't suit a steakhouse.
3. **`frontend-design`** guidance set the rules for the plan: one memorable signature element, one orchestrated motion moment instead of effects everywhere, and avoiding generic tells (all-caps eyebrow labels, numbered 01/02/03 markers, arrows on buttons, identical rounded cards).

## The original prompt

> /ui-ux-pro-max Build a website worth $10k for a steakhouse in Seattle, Washington. It should include elegant animations that load well on any device. Ask me any clarifying questions you need before building.

### Clarifying questions and answers

| Question | Answer |
|---|---|
| Real or fictional restaurant? | Fictional, with my own photos |
| Visual direction | Dark & luxurious |
| Stack | Astro + GSAP |
| Scope | Core pages, reservations, private dining & events, gallery & press |
| Photos | Build now with placeholder slots, swap photos in later |
| Name | Claude picks (became Alder & Ash) |
| Forms | Front-end only for now |

## Design decisions

- **Concept:** a wood-fired steakhouse in an 1890s brick building in Pioneer Square, cooking over Washington alder. The story hook: Pioneer Square was rebuilt in brick after the Great Seattle Fire of 1889, and the restaurant "put a fire back inside."
- **Signature element:** the hearth arch, a tall frame with a fully rounded top used on key photos.
- **Palette:** soot `#15110e`, charred oak `#201914`, bone `#ede4d6`, smoke `#b2a593`, brass `#c9a46a`, ember `#e0773a` (firelight only).
- **Type:** Cormorant Garamond (display) and Hanken Grotesk (text).
- **Motion:** one load sequence (headline rises, hero arch opens, canvas embers), arched photos unveiling on scroll, light parallax on one band, native cross-page View Transitions. Everything is skipped for reduced-motion users and pauses when off screen.

## Photography workflow

1. Claude wrote one prompt per photo slot, with a shared style line so the set looks like one shoot. All prompts are in [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md), and the slot list is in [PHOTOS.md](PHOTOS.md).
2. Generated in **Google Flow** at 3:4, 16:9 or 1:1, matching each slot.
3. **Downloaded the 2K upscaled versions.** The first downloads were only about 900–1376px wide, which is too soft for large screens.
4. Uploaded to Claude Code, which named each file after its slot in `src/assets/photos/` and recompressed them to at most 2000px (81 MB down to 9.6 MB).
5. **Reshot the chef.** The first chef portrait looked blank, staring at nothing. Giving her a task fixed it: plating with tweezers at the pass, with the hearth behind her. A cooking-over-fire version was rejected as unrealistic for a Michelin-level chef. Lesson: give people in photos a specific action and a point of focus.
6. Trimmed a black border Flow had added around one image.

## Deployment

1. **Vercel project** `alder-and-ash`, linked to the GitHub repo. Every pull request gets a preview build, and `main` deploys to production.
2. **Connecting Claude's Vercel connector:** the first attempt failed with "403 forbidden." The fix was a team-access approval link, which Claude generated with the connector's `authorize_team_access` tool for team `team_9Tbt17EQ4CD5UGrFE1OUI2ao`.
3. **Custom domain** `alder-and-ash.designyum.com`:
   - Added to the Vercel project's domains.
   - One DNS record at Namecheap for designyum.com: **CNAME** `alder-and-ash` → `e9d4800a886ff97d.vercel-dns-017.com.` (TTL 300).
   - Live with HTTPS within minutes. `site` in `astro.config.mjs` was set to match.
4. **Pattern for future portfolio pieces:** one subdomain per project (`project-name.designyum.com`), each its own Vercel project and its own CNAME. Custom domains are free on Vercel's Hobby plan.

## Pull requests

| PR | What |
|---|---|
| #1, #2 | Vendored the design skills |
| #3 | Built the full site |
| #4 | Added the 25 photos, image prompts, and the gallery showing only filled slots |
| #5 | Designyum concept credit in the footer, showcase README with screenshots, spacing fixes |

## Problems hit and how they were solved

- **Claude Code "auto mode" outage.** Every shell command failed with "auto mode classifier gave no verdict." Fix: switch the mode dropdown next to the prompt box from **Auto** to **Accept edits**, then approve commands by hand.
- **Mobile menu wouldn't cover the page.** A `backdrop-filter` on the header trapped the full-screen menu inside it. Fix: move the menu outside the `<header>` element.
- **Hidden elements still showing.** Component CSS like `display: grid` overrode the `hidden` attribute. Fix: a global `[hidden] { display: none !important; }`.
- **Phone-number field crashed validation.** Modern browsers compile `pattern` attributes with the `v` regex flag, which rejects `\-` inside `[...]`. Fix: `[0-9\s\(\)\+\.\-]{10,}`.
- **Missing spaces before links.** Astro drops the space when text ends a line and a link starts the next one ("salt.Full dinner menu"). Fix: end the text line with `{' '}`.
- **Slow builds.** About 3 minutes, because every photo is converted to AVIF/WebP at several widths. Expected, and Vercel does the same.

## Checklist for the next site

1. Create the repo and copy `.claude/skills/` into it.
2. Open a Claude Code session on the repo and invoke `/ui-ux-pro-max` with the brief. Ask it to ask clarifying questions first.
3. Let it build with placeholder photo slots, then ask for a Google Flow prompt per slot.
4. Generate the photos, download the **2K upscaled** versions, and upload them. Reshoot anything with a blank expression or no clear action.
5. Connect Vercel (approve team access if asked), add `project.designyum.com`, and add the CNAME at Namecheap.
6. Add the "concept project by Designyum" footer credit and a showcase README with screenshots.
7. Update these notes for the new project.
