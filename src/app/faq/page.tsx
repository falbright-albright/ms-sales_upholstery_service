import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import { faqItems } from "@/lib/faq-data";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import FaqAccordion from "@/components/faq/FaqAccordion";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about furniture upholstery, repair, reupholstery and restoration pricing, timing and service area in St. Catharines, Ontario.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.siteUrl },
            { name: "FAQ", url: `${siteConfig.siteUrl}/faq` },
          ]),
          faqSchema(faqItems),
        ]}
      />
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        lede="Straightforward answers about pricing, materials, timing and service area. If your question isn't here, just call or send us a message."
      />
      <Section tone="paper" aria-label="Frequently asked questions">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={faqItems} />
        </div>
      </Section>
      <EstimateCtaBanner />
    </>
  );
}
