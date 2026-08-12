# Business Launch Checklist (Internal — not customer-facing)

This document is for M.S. (and whoever helps him launch this site) — it is
deliberately **not** linked from the public website navigation or footer.

**Important:** this website containing Privacy Policy, Terms of Service,
Legal Disclaimer and Accessibility Statement pages does **not**, by itself,
make the business legally registered, licensed, insured, or tax-compliant.
Those are separate, real-world steps. This checklist exists to separate
"things this codebase already handles" from "things only the business owner
can complete."

---

## 1. Ontario business registration

- [ ] Search the desired business name for availability (Ontario Business
      Registry / ServiceOntario)
- [ ] Register the sole proprietorship / business name through the
      [Ontario Business Registry](https://www.ontario.ca/page/ontario-business-registry)
      if operating under a name other than M.S.'s own legal name
- [ ] Record the registration/business identification number once issued
- [ ] Set a reminder to renew/maintain the registration as required
- [ ] Determine whether any provincial licence applies to this specific
      trade (upholstery/furniture repair does not typically require a
      trade licence in Ontario, but confirm — requirements can vary)

## 2. St. Catharines municipal requirements

- [ ] Confirm whether a municipal business licence is required for this
      type of business and the intended premises
      (city of St. Catharines licensing department)
- [ ] Confirm zoning permits the business at its actual location —
      **this differs significantly** depending on whether the business
      operates from a home workshop, a rented commercial/industrial unit,
      or another arrangement
- [ ] If home-based: confirm the city's home-based business rules
      (e.g. signage, client visits, parking, noise, storage of materials)
- [ ] Confirm signage requirements/permits if any exterior signage is planned
- [ ] Confirm parking arrangements if customers will visit in person, or if
      furniture pickup/delivery vehicles need dedicated space
- [ ] Confirm fire and building code requirements applicable to the
      premises (this matters more if flammable materials like foam, glue
      or upholstery fabric are stored in volume)

## 3. Canada Revenue Agency (CRA)

- [ ] Determine whether a CRA Business Number (BN) is required
- [ ] Set up a system to track business income and expenses from day one
- [ ] Monitor total revenue against the **$30,000 small-supplier
      threshold** for mandatory GST/HST registration
- [ ] Register for a GST/HST account once required (or consider voluntary
      registration earlier if it makes sense for the business — e.g. to
      claim input tax credits)
- [ ] Once registered, record the HST number in `src/lib/site-config.ts`
      (`hstNumber`) and set `isHstRegistered: true` so invoices/quotes can
      reference it correctly
- [ ] Maintain organized tax records (invoices, receipts, mileage if
      applicable) — see the Operations section below

## 4. Insurance (get professional advice — do not self-assess)

**What Ontario actually requires vs. what's just prudent** (researched
2026-08; confirm with a broker/lawyer before relying on this — it's a
starting point, not legal advice):

- Ontario does **not** legally mandate general business liability
  insurance for most small trade businesses, upholstery included. The
  only insurance the province actually mandates is **commercial auto
  insurance**, and only if a vehicle is used for business purposes (e.g.
  furniture pickup/delivery) — a personal auto policy typically excludes
  business use, so this becomes required the moment a vehicle is used
  that way, not before.
- **WSIB** is mandatory for sole proprietors only in specific
  higher-risk trades (construction: roofing, framing, general
  contracting). Furniture upholstery isn't on that mandatory list, so a
  solo operator with no employees is very likely exempt — but don't
  assume it, confirm the exact classification directly with WSIB
  ([wsib.ca](https://www.wsib.ca)). This changes the moment employees or
  subcontractors are hired.
- In practice, liability insurance is still worth carrying even though
  it's not legally forced: landlords, commercial clients, and municipal
  licensing can and do demand proof of coverage. For a low-risk sole
  proprietor, budget roughly **$450–$2,000/year for $2M in commercial
  general liability (CGL) coverage**. Ontario brokers/insurers that quote
  small businesses online in minutes: [Zensurance](https://www.zensurance.com/ontario-business-liability-insurance),
  [APOLLO Insurance](https://apollocover.com/ontario),
  [BrokerLink](https://www.brokerlink.ca/insurance/business/small-business-liability-ontario) —
  worth getting a couple of quotes to compare.
- When getting a quote, specifically ask about **customer-property
  (bailee's) coverage** — furniture in the shop's care, custody or
  control while being repaired/reupholstered. This is the single most
  relevant coverage for this trade and isn't always included in a
  generic CGL quote by default.
- Also worth asking about: property/equipment coverage (tools, sewing
  machines, workshop contents) and business interruption coverage, if it
  fits the business's risk tolerance.

**Do not represent the business as insured on the website or verbally**
until an actual policy is in place and its coverage confirmed. Nothing
on the public site currently claims insured status — keep it that way
until it's true.

## 5. Customer-facing operations

- [ ] Written estimate template (what's included, materials, price basis)
- [ ] Customer approval process before work begins (verbal is a starting
      point; written/email confirmation is safer for both parties)
- [ ] Invoice template
- [ ] Receipt process for deposits/payments
- [ ] Payment processing method (e-transfer, card terminal, etc.)
- [ ] Simple job tracking (even a spreadsheet: customer, piece, status,
      dates, materials used)
- [ ] Furniture intake photographs and condition notes for every job —
      protects both the business and the customer, and doubles as
      before/after gallery content once you have customer permission to
      use it publicly
- [ ] Material/fabric purchase records
- [ ] Customer communication log (useful for disputes and for follow-up)
- [ ] A basic complaint-handling approach — decide this before you need it
- [ ] A real warranty/workmanship policy (currently a placeholder in
      `src/app/terms-of-service/page.tsx` — update once decided)
- [ ] Pickup/delivery procedure, if offered

## 6. Placeholders currently in the codebase

Search `src/lib/site-config.ts` for `NEEDS_OWNER_INPUT` — every one of
these should be resolved before the site is considered launch-ready:

- Legal business name (if different from the working/trade name "MS &
  Sales Upholstery Services")
- Business email address
- Street address + postal code (and an explicit decision on whether to
  publish it — many home-based upholsterers reasonably choose not to)
- Social media / Google Business Profile URL
- Booking URL (if a scheduling tool is ever adopted)
- CRA Business Number / HST number

Business hours are now confirmed (Monday–Friday, 9:00 AM–5:00 PM Eastern)
and live in `site-config.ts` — update there and in
`src/lib/schema.tsx` (`openingHoursSpecification`) if they ever change.

Also review, before publishing:

- `src/app/about/page.tsx` — M.S.'s personal bio/story is a placeholder
- `src/app/terms-of-service/page.tsx` — deposit, cancellation, abandoned
  property and warranty sections are marked `[owner to confirm]`
- `src/app/privacy-policy/page.tsx` — privacy contact email
- Testimonials — intentionally empty (`src/components/sections/ReviewsComingSoon.tsx`)
  until real customer reviews exist; never populate with invented reviews

## 7. Gallery photo/video permission — confirmed

`public/images/gallery/` and `public/videos/` contain real project
photos and clips the business owner supplied. Several clearly show a
specific restaurant/bar's interior, including identifiable branding (e.g. a
"Fox Pops" promotional poster, a "7th Anniversary" event sign, and beverage
brand signage visible in a couple of shots). **M.S. has confirmed the
commercial client's permission to publish photos that identify their
business** (confirmed 2026-08). If that ever changes for a specific
client, crop or replace the affected photos with ones that don't show
identifying branding.
