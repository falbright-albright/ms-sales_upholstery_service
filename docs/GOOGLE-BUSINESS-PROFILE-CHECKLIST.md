# Google Business Profile Checklist (Internal)

A Google Business Profile is one of the highest-leverage things for local
search visibility ("upholstery near me", the local 3-pack map results,
etc.) — likely more impactful for lead volume than most on-page SEO work.
This is a setup/maintenance checklist, not something this codebase can do
for you.

## Initial setup

- [ ] Create or claim the listing at [business.google.com](https://business.google.com)
- [ ] Business name: use the **exact** name you register the business
      under — don't add keywords like "St. Catharines Upholstery Experts"
      to the name field; Google's guidelines prohibit this and it risks
      suspension
- [ ] Primary category: something close to "Upholstery Shop" or
      "Furniture Repair Shop" (review the exact category options available
      at setup time)
- [ ] Secondary categories: consider "Furniture Restoration Service" if
      available
- [ ] Service area: set to St. Catharines plus the secondary Niagara
      communities actually served — keep this consistent with
      `src/lib/site-config.ts` (`secondaryServiceAreas`)
- [ ] Phone number: (519) 242-5757 — must match the website exactly
- [ ] Website URL: this site's production URL
- [ ] Hours: Monday–Friday, 9:00 AM–5:00 PM Eastern (confirmed, see
      `src/lib/site-config.ts`) — keep in sync if hours ever change
- [ ] Business description: keep it factual and consistent with the
      website copy — no invented claims, no "#1", no fake years-in-business

## Services list

Add the services this site actually describes, so Google can match search
intent correctly:

- Furniture reupholstery
- Chair upholstery (dining chairs, armchairs, restaurant chairs)
- Sofa & loveseat upholstery
- Furniture repair
- Restaurant & commercial seating
- Fabric replacement
- Vinyl replacement
- Furniture restoration

## Photos

- [ ] Real photos only — logo/profile photo, workshop/tools, and genuine
      before/after project photos as they become available (get customer
      permission for anything from a client's home or business)
- [ ] Add new photos regularly — profiles with recent activity tend to
      perform better in local search
- [ ] Cross-reference with `public/images/gallery/` on the website so the
      same real photography can be reused in both places

## Review strategy (never fabricate reviews)

- [ ] After a completed project, ask the customer directly (in person, by
      text, or by email) if they'd be willing to leave a Google review —
      the closer to project completion, the better response rate
- [ ] Consider a short, low-friction message template, e.g.: *"Thanks for
      trusting us with your [piece]! If you have a minute, a Google review
      would really help other St. Catharines folks find us: [review link]"*
- [ ] Never offer payment or discounts in exchange for a review (violates
      Google's policies and, depending on the offer, may raise separate
      legal issues)
- [ ] Never write reviews yourself, ask friends/family to post
      non-customer reviews, or use any review-generation service that
      creates fake reviews

## Responding to reviews

- [ ] Respond to every review, positive or negative, professionally and
      promptly
- [ ] For a negative review: acknowledge the concern, avoid arguing
      publicly, and offer to resolve it directly (phone/email) — this
      often matters more to future customers than the review itself
- [ ] Never delete or hide a negative review (not possible through normal
      means anyway) — respond constructively instead

## Ongoing maintenance

- [ ] Keep hours, phone number and address in sync between Google Business
      Profile and the website any time either changes
- [ ] Check and respond to the Google Business Profile "Questions &
      Answers" section periodically
- [ ] Post occasional updates (a completed project, a seasonal note) —
      Business Profile posts are lightweight but can help freshness
