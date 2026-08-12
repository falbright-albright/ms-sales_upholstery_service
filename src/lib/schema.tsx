import { siteConfig } from "./site-config";

/**
 * JSON-LD structured data builders.
 *
 * These describe the business and its services to search engines.
 * Fields sourced from placeholder data in site-config.ts (e.g. a real
 * street address) are deliberately omitted here rather than emitted
 * with fake values — structured data with invented facts (address,
 * hours, ratings) can trigger search-console/manual-action penalties
 * and, more simply, would be false. Add them once confirmed. (Hours
 * are now confirmed — see openingHoursSpecification below.)
 */

const AREAS_SERVED = [siteConfig.primaryCity, ...siteConfig.secondaryServiceAreas].map(
  (name) => ({ "@type": "City", name })
);

export function localBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteConfig.siteUrl}/#business`,
    name: siteConfig.businessDisplayName,
    description:
      "Furniture upholstery, reupholstery, repair and restoration serving St. Catharines, Ontario and the surrounding Niagara Region.",
    telephone: siteConfig.phoneE164,
    priceRange: "$$",
    url: siteConfig.siteUrl,
    // Points at the static social preview image (src/app/opengraph-image.png).
    image: `${siteConfig.siteUrl}/opengraph-image.png`,
    areaServed: AREAS_SERVED,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.primaryCity,
      addressRegion: siteConfig.primaryRegionShort,
      addressCountry: "CA",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
  };

  return schema;
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    name: opts.name,
    description: opts.description,
    url: opts.url,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteConfig.siteUrl}/#business`,
      name: siteConfig.businessDisplayName,
      telephone: siteConfig.phoneE164,
    },
    areaServed: AREAS_SERVED,
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** Renders a JSON-LD <script> tag. Use inside a Server Component. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
