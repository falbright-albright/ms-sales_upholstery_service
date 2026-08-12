# Configuration Reference (Internal)

Two places hold configuration for this site: `src/lib/site-config.ts`
(business facts, edited directly in code) and environment variables (deploy
settings/secrets, never committed). This doc explains every field.

## `src/lib/site-config.ts`

| Field | Status | Notes |
|---|---|---|
| `ownerName` | ✅ Confirmed | "M.S." |
| `tagline` / `shortTagline` | ✅ Confirmed | Core brand lines — keep exact wording consistent across pages/ads |
| `businessDisplayName` | ✅ Confirmed | "MS & Sales Upholstery Services" — replace with the registered legal name if it differs once confirmed (see `docs/BUSINESS-LAUNCH-CHECKLIST.md`) |
| `legalBusinessName` | ❌ Placeholder | Fill in once registered |
| `businessStructure` | ✅ Confirmed | Sole proprietorship |
| `phoneDisplay` / `phoneE164` | ✅ Confirmed | (519) 555-0100 |
| `email` / `emailDisplay` | ❌ Placeholder | No business email supplied |
| `primaryCity` / `primaryRegion` | ✅ Confirmed | St. Catharines, Ontario |
| `streetAddress` / `postalCode` | ❌ Placeholder | Not supplied. Also see `showStreetAddressPublicly` — a home-based business may reasonably choose never to publish this |
| `secondaryServiceAreas` | ✅ Confirmed | From the project brief; presented as "contact to confirm," not guaranteed coverage |
| `hours` / `hoursDisplay` | ✅ Confirmed | Monday–Friday, 9:00 AM–5:00 PM (Eastern Time). Also reflected in `src/lib/schema.tsx` (`openingHoursSpecification`) |
| `social.*` | ❌ Placeholder | No social profiles supplied |
| `bookingUrl` | ❌ Placeholder | Only relevant if a scheduling tool is adopted later |
| `businessNumber` / `hstNumber` / `isHstRegistered` | ❌ Placeholder | See CRA section of the launch checklist |
| `privacyContactName` / `privacyContactMethod` | ⚠️ Partial | Phone-only for now; add an email once one exists |
| `analytics.*` | ⚠️ Env-driven | Reads from environment variables, `null` (inactive) if unset |
| `siteUrl` | ⚠️ Env-driven | Reads `NEXT_PUBLIC_SITE_URL`, falls back to a placeholder domain — **must** be set correctly before launch, since it feeds canonical URLs, sitemap.xml and Open Graph metadata |
| `showAdminPlaceholderNotices` | ⚠️ Env-driven | Dev/staging only — see `.env.example` |

## Environment variables

See `.env.example` for the authoritative, commented list. Summary:

| Variable | Required before launch? | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Yes** | Canonical URLs, sitemap, OG metadata |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | No | Google Analytics 4 — see `docs/ANALYTICS-TRACKING-SETUP.md` |
| `NEXT_PUBLIC_GOOGLE_ADS_ID` | No | Only if running Google Ads |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Search Console verification |
| `NEXT_PUBLIC_SHOW_PLACEHOLDER_NOTICES` | No — dev/staging only | Must be unset/false in production |

## Things intentionally kept out of the frontend entirely

- No SMTP/email-provider credentials in this repo — Netlify Forms handles
  submission storage/notifications without the site needing its own mail
  credentials (see README, "Forms & leads"). If a custom form backend is
  ever adopted instead, keep any API keys server-side (a Netlify Function),
  never in a `NEXT_PUBLIC_` variable.
- No real HST number, business number, or insurance policy numbers are
  published anywhere on the public site even once confirmed internally —
  these aren't typically customer-facing information.
