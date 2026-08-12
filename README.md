# MS & Sales Upholstery Services — Website

Production website for a St. Catharines, Ontario furniture upholstery, repair
and restoration business, run by M.S. as a sole proprietorship. Built with
Next.js (App Router) + TypeScript + Tailwind CSS, designed to deploy on
Netlify with Netlify Forms handling lead capture (including photo uploads).

**Core promise the whole site is built around:** *Don't throw away good
furniture. Give it a second chance.*

---

## Before this goes live

This is a complete, production-quality build — but several pieces of real
business information were never supplied and are represented as clearly
marked placeholders rather than invented facts (no fake address, hours,
credentials, reviews, or years-in-business). **Read
[`docs/BUSINESS-LAUNCH-CHECKLIST.md`](docs/BUSINESS-LAUNCH-CHECKLIST.md)
before publishing** — it lists every placeholder, plus the Ontario/St.
Catharines business-registration, tax and insurance items that exist outside
this codebase entirely and are the owner's responsibility to complete.

Other pre-launch docs:

- [`docs/CONFIGURATION.md`](docs/CONFIGURATION.md) — every value in
  `src/lib/site-config.ts` and `.env.example`, explained
- [`docs/GOOGLE-BUSINESS-PROFILE-CHECKLIST.md`](docs/GOOGLE-BUSINESS-PROFILE-CHECKLIST.md)
- [`docs/ANALYTICS-TRACKING-SETUP.md`](docs/ANALYTICS-TRACKING-SETUP.md)
- [`docs/PRE-LAUNCH-QA-CHECKLIST.md`](docs/PRE-LAUNCH-QA-CHECKLIST.md)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To see the small dev-only "needs owner input" notices inline on the pages
that use placeholder content (hours, address, About-page bio, etc.), copy
`.env.example` to `.env.local` and set:

```
NEXT_PUBLIC_SHOW_PLACEHOLDER_NOTICES=true
```

Leave that unset (or `false`) for production — see
`src/components/ui/AdminNote.tsx`.

## Editing business information

Almost every business fact on the site (phone, hours, service area,
tagline, analytics IDs, etc.) is centralized in **one file**:

```
src/lib/site-config.ts
```

Update it there rather than hunting through individual page components.
Analytics/tracking IDs are read from environment variables (see
`.env.example`) so nothing sensitive is hard-coded into the frontend bundle.

## Real photography & video

No stock photography is used anywhere on this site. `public/images/gallery/`
already contains 13 real project photos and `public/videos/` has 4 real
project video clips, supplied by the business owner — see
[`public/images/README.md`](public/images/README.md) for the naming
convention and how to add more as new projects are completed. Any image
slot without a real photo yet renders as a clearly labelled placeholder
panel instead of a misleading stand-in photo.

Videos play in an accessible modal (`src/components/gallery/VideoModal.tsx`)
on the Gallery page, mounted only when a visitor opens one — the clips
range 2–12MB each and are never preloaded. Before launch, see
`docs/BUSINESS-LAUNCH-CHECKLIST.md` §7 — a couple of the restaurant/bar
photos show identifiable branding and need the client's confirmed
permission to publish.

## Forms & leads

The **Free Estimate** form (`/free-estimate`) and the **Contact** form
(`/contact`) both use [Netlify Forms](https://docs.netlify.com/forms/setup/)
— no custom backend or database required. This project runs on
`@netlify/plugin-nextjs` v5 (the OpenNext-based Next.js runtime), which
doesn't give Netlify's deploy-time scanner plain crawlable HTML to detect
forms in — so detection instead comes from a static snapshot file,
[`public/__forms.html`](public/__forms.html), that declares both forms
(`quote-request` and `contact`) and every field, including the multi-photo
upload field on the estimate form. The real forms (in `QuoteForm.tsx` /
`ContactForm.tsx`) submit to `/__forms.html` via `fetch()` rather than to
the page they're rendered on. See
[opennext.js.org/netlify/forms](https://opennext.js.org/netlify/forms) for
why, and keep `__forms.html`'s field list in sync if either form changes.

After the first deploy:

1. In the Netlify dashboard, go to **Site configuration → Forms** and
   confirm both forms appear.
2. Set up **email notifications** (Forms → Form notifications) so M.S. is
   alerted immediately for every new submission — this is not configured by
   default and leads will otherwise only be visible by checking the
   dashboard.
3. Review Netlify's built-in spam filtering settings; the forms also ship
   with a honeypot field (`bot-field`) as a first line of defense.

## Deployment (Netlify)

```bash
npm install -g netlify-cli   # if not already installed
netlify init                 # link this repo to a Netlify site
netlify deploy --build --prod
```

`netlify.toml` already declares the `@netlify/plugin-nextjs` build plugin
and baseline security headers. Set the environment variables from
`.env.example` in **Site configuration → Environment variables** before the
first production deploy — most notably `NEXT_PUBLIC_SITE_URL`, which feeds
canonical URLs, `sitemap.xml`, and social-preview metadata.

## Tech notes

- **Framework:** Next.js App Router, static generation by default (no
  server-side data fetching on any page). Netlify Forms detection no
  longer depends on this (see "Forms & leads" above — it reads
  `public/__forms.html` instead), but static generation is still the
  right default for a marketing/content site like this one.
- **Styling:** Tailwind CSS v4, custom design tokens in
  `src/app/globals.css` (warm cream/charcoal/brown/tan/brass palette).
- **Structured data:** `src/lib/schema.tsx` builds LocalBusiness, Service,
  FAQPage and BreadcrumbList JSON-LD. Fields that depend on unconfirmed
  facts (hours, street address) are omitted rather than filled with
  placeholder values, since fabricated structured data can trigger search
  penalties.
- **Icons/OG image:** static PNGs (`src/app/icon.png`, `apple-icon.png`,
  `opengraph-image.png`, `twitter-image.png`) picked up automatically by
  Next's file convention. These were rendered once via `next/og`'s
  `ImageResponse` rather than generated per-request — the request-time
  version hit a Next 16 dev-server bug on this machine (`ImageResponse`
  itself produced a valid PNG in isolation, but the dev server's
  icon/apple-icon/opengraph-image routes failed every request with
  `Input buffer contains unsupported image format`). Static files sidestep
  it entirely and are also just faster. To regenerate after a design
  change, recreate a small script that imports `ImageResponse` from
  `next/og.js` and writes the buffer to the matching `src/app/*.png` path.
- **Accessibility:** semantic landmarks, visible focus states, reduced-motion
  support, and accessible form patterns throughout — see
  `docs/PRE-LAUNCH-QA-CHECKLIST.md` for the manual pass still worth doing
  before launch.

## Project structure

```
src/
  app/                Route segments (one folder per page)
  components/
    layout/           Header, Footer, mobile sticky CTA bar
    sections/         Homepage/page section blocks
    forms/            QuoteForm, ContactForm, PhotoUpload, shared field inputs
    gallery/          Before & after gallery grid + filters
    faq/              Accordion used on the homepage and /faq
    legal/            Shared layout for the four legal pages
    ui/                Button, Section, PlaceholderImage, AdminNote, icons
  lib/
    site-config.ts    Central business/config object (see above)
    nav.ts            Header/footer navigation data
    faq-data.ts        Shared FAQ content + schema
    gallery-data.ts    Gallery categories/items (CMS-friendly structure)
    schema.tsx          JSON-LD builders
    metadata.ts          Per-page <title>/description/canonical/OG helper
docs/                  Internal, non-customer-facing business/ops docs
public/images/         Real photography goes here (see public/images/README.md)
```
