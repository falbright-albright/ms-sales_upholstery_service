# Pre-Launch QA Checklist (Internal)

Run through this before pointing a real domain at the production deploy.
Where a check can be automated it's noted; the rest is a manual pass.

## Content honesty

- [ ] No fake reviews, testimonials, star ratings or customer names
      anywhere (`ReviewsComingSoon.tsx` should still say "coming soon")
- [ ] No invented years-in-business, certifications, awards, or "#1 in
      Niagara"-style claims
- [ ] No fabricated pricing or fake "limited time" / scarcity messaging
- [ ] All `NEEDS_OWNER_INPUT` placeholders in `src/lib/site-config.ts`
      reviewed — see `docs/BUSINESS-LAUNCH-CHECKLIST.md`
- [ ] Business information (phone, service area) is consistent across
      every page, the footer, and structured data

## Functionality

- [ ] Every `tel:` link opens the dialer correctly on a real phone
- [ ] Quote form (`/free-estimate`) submits successfully and redirects to
      `/free-estimate/success`
- [ ] Contact form (`/contact`) submits successfully
- [ ] Both forms appear under Netlify → Site configuration → Forms after
      the first production deploy, with notifications configured
- [ ] Photo upload accepts multiple images, rejects non-image files, and
      enforces the size/count limits in `PhotoUpload.tsx`
- [ ] Gallery category filters work and update the visible grid
- [ ] FAQ accordion expands/collapses and is keyboard-operable
- [ ] Mobile sticky call/estimate bar appears on small screens and doesn't
      overlap page content or the footer
- [ ] 404 page renders for an unknown path and links back into the site
- [ ] No broken internal links (run a link checker against the production
      build, e.g. `npx linkinator http://localhost:3000 --recurse` against
      `next start`)

## SEO / technical

- [ ] `NEXT_PUBLIC_SITE_URL` set to the real production domain
- [ ] `/sitemap.xml` and `/robots.txt` resolve and list the expected pages
- [ ] Every page has a unique `<title>` and meta description (all page
      components already call `pageMetadata()` — verify none were copy-pasted
      without updating title/description)
- [ ] Structured data validates (Google's Rich Results Test) for the
      homepage, `/services`, and `/faq`
- [ ] Open Graph/Twitter preview image renders correctly when sharing a
      link (check `/opengraph-image` and `/twitter-image` routes directly,
      and test with a social-preview debugger after deploy)
- [ ] Google Search Console verified and sitemap submitted (see
      `docs/ANALYTICS-TRACKING-SETUP.md`)

## Accessibility

- [ ] Full keyboard-only pass: tab through header nav, mobile menu, every
      form, FAQ accordion and gallery filters — nothing should be
      unreachable or trap focus
- [ ] Focus outline is visible on every interactive element
- [ ] Run an automated pass (axe DevTools or Lighthouse accessibility
      audit) on the homepage, `/free-estimate`, and one legal page
- [ ] Verify with a screen reader (VoiceOver/NVDA) that form errors are
      announced and the mobile menu toggle communicates open/closed state
- [ ] Confirm color contrast on the brass/tan accent colors used for links
      and buttons against their backgrounds

## Performance

- [ ] Run Lighthouse (mobile) against the production deploy — target
      "Good" Core Web Vitals
- [ ] Confirm `next/font` is not blocking render (check network waterfall)
- [ ] Confirm no unused/default Next.js template assets shipped
      (already removed from `/public`, but re-check after future edits)

## Legal / compliance posture

- [ ] Privacy Policy, Terms of Service, Legal Disclaimer and Accessibility
      Statement all reviewed by the business owner (and, ideally, legal
      counsel) — see the `[owner to confirm]` markers in
      `terms-of-service/page.tsx`
- [ ] Marketing-consent checkbox on both forms is unchecked by default and
      clearly separate from the "contact me about my request" language
      (CASL) — do not change this to a pre-checked or bundled consent
- [ ] Reconfirm that this checklist and `docs/BUSINESS-LAUNCH-CHECKLIST.md`
      have been read — website legal pages existing is not the same thing
      as the business being registered, licensed, insured or tax-compliant
