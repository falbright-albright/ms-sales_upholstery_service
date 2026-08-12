# Analytics & Conversion Tracking Setup (Internal)

This site ships with **no analytics active by default** — every integration
point is wired up but reads from an environment variable, so nothing tracks
visitors until the owner deliberately turns it on. No fake/placeholder
tracking IDs are hard-coded anywhere in the codebase (see
`src/lib/site-config.ts`, `analytics` object).

## What's already wired up (config-only, needs an ID to activate)

| Integration | Environment variable | Where it's read |
|---|---|---|
| Google Analytics 4 | `NEXT_PUBLIC_GA_MEASUREMENT_ID` | `src/lib/site-config.ts` |
| Google Ads conversion tracking | `NEXT_PUBLIC_GOOGLE_ADS_ID` | `src/lib/site-config.ts` |
| Google Search Console verification | `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | `src/app/layout.tsx` (`verification.google`) |

Set these in Netlify under **Site configuration → Environment variables**
(or in `.env.local` for local testing — see `.env.example`).

## To actually wire in Google Analytics

The config values above are read and ready, but the GA4 script tag itself
is intentionally **not yet added** to `src/app/layout.tsx` — adding
analytics scripts is a decision with real privacy implications (see the
Privacy Policy, Section 8) that should be a deliberate step, not a default.
When ready:

1. Create a GA4 property and get the Measurement ID (`G-XXXXXXXXXX`).
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in the environment.
3. Add the standard `gtag.js` snippet to `src/app/layout.tsx` using
   `next/script` with `strategy="afterInteractive"`, guarded by
   `siteConfig.analytics.googleAnalyticsId` so it never loads without an ID
   configured.
4. Update the Privacy Policy's analytics section if the actual
   configuration (e.g. IP anonymization, ad personalization signals)
   differs from what's currently described.

## Google Search Console

1. Verify the property using the `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
   meta-tag method (already wired into `src/app/layout.tsx` once the env
   var is set) — or via DNS if preferred.
2. Submit `sitemap.xml` (auto-generated at `/sitemap.xml` — see
   `src/app/sitemap.ts`).
3. Monitor for crawl errors and mobile usability issues after launch.

## Google Business Profile

See `docs/GOOGLE-BUSINESS-PROFILE-CHECKLIST.md`.

## Conversions worth tracking

Once GA4 (or another analytics tool) is active, these are the events that
map to actual business value for this site:

- **Phone call click** — every `tel:` link (header, footer, mobile sticky
  bar, hero, contact page) shares the same `href` built from
  `siteConfig.phoneE164`; a single click listener/event can cover all of
  them
- **Quote form submission** — fires on successful submit in
  `src/components/forms/QuoteForm.tsx` (the `router.push("/free-estimate/success")`
  call is the natural place to also fire a conversion event)
- **Contact form submission** — same pattern in `ContactForm.tsx`
- **Email click** — once a real business email is set, any `mailto:` link
- **SMS click** — the `sms:` link (`smsHref` in `src/lib/site-config.ts`)
- **Gallery interaction** — category filter clicks in
  `src/components/gallery/GalleryGrid.tsx`
- **Commercial quote request specifically** — the "Residential/Commercial"
  radio field on the quote form makes it possible to separate commercial
  leads from residential ones in analytics or in the Netlify Forms
  dashboard

If Google Ads is ever used for paid search, phone-click and form-submit
events are exactly what should feed conversion tracking (`NEXT_PUBLIC_GOOGLE_ADS_ID`)
— cost-per-lead is far more meaningful than cost-per-click for a business
like this.

## Netlify Forms as a lead source

Independent of any analytics tool, every quote/contact submission is
already captured in the Netlify dashboard (Site configuration → Forms) —
make sure email notifications are turned on there (see the main
`README.md`, "Forms & leads" section) so nothing relies on remembering to
check analytics.
