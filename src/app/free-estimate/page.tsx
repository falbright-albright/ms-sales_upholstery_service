import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, telHref } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import QuoteForm from "@/components/forms/QuoteForm";
import { PhoneIcon, CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Free Estimate — Furniture Upholstery & Repair Quote",
  description:
    "Request a free upholstery, repair or reupholstery estimate in St. Catharines, Ontario. Send photos of your furniture and hear back from M.S. directly.",
  path: "/free-estimate",
});

const trustPoints = [
  "No cost, no obligation to move forward",
  "Photos help us give you a more accurate preliminary estimate",
  "M.S. reviews requests personally",
  "Final pricing is confirmed once the piece has been properly assessed",
];

export default function FreeEstimatePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Free Estimate", url: `${siteConfig.siteUrl}/free-estimate` },
        ])}
      />
      <PageHero
        eyebrow="Free estimate"
        title="Get Your Free Estimate"
        lede="Tell us about your furniture and send a few photos. M.S. reviews every request personally and will follow up with a preliminary estimate."
      >
        <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {trustPoints.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm font-medium text-charcoal-soft">
              <CheckIcon className="text-brown" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </PageHero>

      <Section tone="paper" aria-labelledby="quote-form-heading">
        <div className="mx-auto max-w-3xl">
          <h2 id="quote-form-heading" className="sr-only">
            Free estimate request form
          </h2>
          <QuoteForm />
        </div>
      </Section>

      <section className="border-t border-tan-light bg-cream-dark py-10">
        <Container className="flex flex-col items-center gap-3 text-center">
          <p className="text-charcoal-soft">Prefer to talk it through first?</p>
          <Button href={telHref} variant="call" size="lg" icon={<PhoneIcon />}>
            Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
          </Button>
        </Container>
      </section>
    </>
  );
}
