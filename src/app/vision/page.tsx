import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Our Vision",
  description:
    "Our vision for furniture upholstery, repair and restoration in St. Catharines and the Niagara Region — extending the life of the furniture our customers already value.",
  path: "/vision",
});

export default function VisionPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Our Vision", url: `${siteConfig.siteUrl}/vision` },
        ])}
      />
      <PageHero eyebrow="Our vision" title="Give Your Furniture a Second Chance" />

      <Section tone="paper" aria-label="Vision statement">
        <div className="mx-auto max-w-2xl space-y-6 text-lg text-charcoal-soft">
          <p>
            We want St. Catharines and Niagara Region homeowners and businesses to have a
            real, practical alternative to replacing furniture the moment it starts to
            show wear — a local upholsterer they can call, send a photo to, and trust to
            give them a straight answer.
          </p>
          <p>
            That means extending the useful life of furniture people already value:
            dining chairs that have hosted years of family meals, an armchair that's
            simply comfortable in a way a new one might not be, restaurant seating that a
            business has built its space around.
          </p>
          <p>
            It also means being honest when a piece isn't a good candidate for
            restoration, rather than taking on work that doesn't serve the customer.
            Reducing unnecessary replacement only matters if the furniture we restore is
            actually worth restoring.
          </p>
          <p>
            Over time, that's how we'd like this business to be known in St. Catharines
            and across Niagara — as a source of skilled, local craftsmanship and honest
            advice, and as the first call when a customer is deciding between fixing what
            they have and buying something new.
          </p>
        </div>
      </Section>

      <EstimateCtaBanner />
    </>
  );
}
