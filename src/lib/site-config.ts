/**
 * CENTRAL BUSINESS CONFIGURATION
 * ------------------------------------------------------------------
 * This is the single source of truth for business information used
 * across the website (header, footer, contact page, structured data,
 * metadata, etc.).
 *
 * WHY THIS FILE EXISTS
 * Rather than hard-coding the phone number, hours, address, and
 * tracking IDs across dozens of components, every page reads from
 * this object. To update the business phone number, hours, or add
 * a real street address once the business has one, edit this file
 * (or, for anything marked "from env", set the environment variable
 * in the Netlify dashboard / .env.local — see .env.example).
 *
 * PLACEHOLDER POLICY
 * Fields marked `NEEDS_OWNER_INPUT` are NOT real business facts.
 * They exist so the site compiles and reads sensibly in the
 * meantime, but they must be reviewed and completed by the business
 * owner (M.S.) before the site is treated as fully launch-ready.
 * Nothing in this file should be presented to a customer as a firm
 * fact unless it has been confirmed. See /docs/BUSINESS-LAUNCH-CHECKLIST.md
 * and /docs/CONFIGURATION.md.
 */

export const NEEDS_OWNER_INPUT = "NEEDS_OWNER_INPUT" as const;

export const siteConfig = {
  // ---------------------------------------------------------------
  // Core identity — confirmed by the business owner in the project brief
  // ---------------------------------------------------------------
  ownerName: "M.S.",
  tagline: "Give Your Furniture a Second Chance.",
  shortTagline: "Repair. Restore. Reupholster. Renew.",

  /**
   * Confirmed working business name — use this exact string
   * everywhere the business (as opposed to the owner personally) is
   * named. Replace with the registered legal name once
   * `legalBusinessName` is confirmed, if different (see
   * docs/BUSINESS-LAUNCH-CHECKLIST.md, Ontario section).
   */
  businessDisplayName: "MS & Sales Upholstery Services",
  legalBusinessName: NEEDS_OWNER_INPUT,
  businessStructure: "Sole proprietorship",

  // ---------------------------------------------------------------
  // Contact
  // ---------------------------------------------------------------
  /**
   * PLACEHOLDER — not a working number. Uses the North American 555-0100
   * to 555-0199 block, which is reserved for fictional use and never
   * assigned to a real subscriber, specifically so this can't misroute a
   * call to an unrelated real person. Replace with the confirmed business
   * number before relying on any click-to-call CTA on the site.
   */
  phoneDisplay: "(519) 555-0100",
  phoneE164: "+15195550100",
  /** No business email has been supplied. Placeholder only. */
  email: NEEDS_OWNER_INPUT,
  emailDisplay: "Email — coming soon",

  // ---------------------------------------------------------------
  // Location / service area
  // ---------------------------------------------------------------
  primaryCity: "St. Catharines",
  primaryRegion: "Ontario",
  primaryRegionShort: "ON",
  country: "Canada",

  /**
   * No public street address has been provided or confirmed for
   * publication. Do not display a map or address until the owner
   * supplies one and explicitly approves publishing it (many
   * upholsterers work from a home workshop and reasonably choose
   * not to publish a residential address).
   */
  streetAddress: NEEDS_OWNER_INPUT,
  postalCode: NEEDS_OWNER_INPUT,
  showStreetAddressPublicly: false,

  secondaryServiceAreas: [
    "Niagara Falls",
    "Thorold",
    "Welland",
    "Port Dalhousie",
    "Niagara-on-the-Lake",
    "Grimsby",
    "Lincoln",
    "Beamsville",
    "Vineland",
    "Pelham",
  ],
  serviceAreaNote:
    "Serving St. Catharines and surrounding Niagara communities — contact us to confirm service availability in your area.",

  // ---------------------------------------------------------------
  // Hours — confirmed.
  // ---------------------------------------------------------------
  hours: "Monday–Friday, 9:00 AM–5:00 PM (Eastern Time)",
  hoursDisplay:
    "Monday–Friday, 9:00 AM–5:00 PM (Eastern Time). Send a photo any time — M.S. will follow up during business hours.",

  // ---------------------------------------------------------------
  // Social / profiles — none supplied
  // ---------------------------------------------------------------
  social: {
    facebook: NEEDS_OWNER_INPUT,
    instagram: NEEDS_OWNER_INPUT,
    googleBusinessProfileUrl: NEEDS_OWNER_INPUT,
  },

  bookingUrl: NEEDS_OWNER_INPUT,

  // ---------------------------------------------------------------
  // Registration / tax — not supplied. See business launch checklist.
  // ---------------------------------------------------------------
  businessNumber: NEEDS_OWNER_INPUT,
  hstNumber: NEEDS_OWNER_INPUT,
  isHstRegistered: false,

  // ---------------------------------------------------------------
  // Privacy contact (Privacy Policy §, PIPEDA-style access requests)
  // ---------------------------------------------------------------
  privacyContactName: "M.S.",
  privacyContactMethod:
    "By phone at (519) 555-0100. A dedicated privacy email address will be added here once one is set up.",

  // ---------------------------------------------------------------
  // Analytics & tracking — read from environment variables so no
  // real or fake IDs are ever hard-coded into the frontend bundle.
  // All are optional; each integration silently no-ops if unset.
  // ---------------------------------------------------------------
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? null,
    googleAdsConversionId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? null,
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? null,
  },

  // ---------------------------------------------------------------
  // Site / SEO
  // ---------------------------------------------------------------
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.example-upholstery-stc.ca",
  themeColorHex: "#3E2718",

  // Feature flags
  showAdminPlaceholderNotices: process.env.NEXT_PUBLIC_SHOW_PLACEHOLDER_NOTICES === "true",
} as const;

export type SiteConfig = typeof siteConfig;

/** Formats the phone number as a tel: link target. */
export const telHref = `tel:${siteConfig.phoneE164}`;

/** Formats an SMS deep link (no prefilled body — kept generic/portable). */
export const smsHref = `sms:${siteConfig.phoneE164}`;
