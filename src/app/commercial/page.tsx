import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProjectPhoto from "@/components/ui/ProjectPhoto";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";
import { BuildingIcon, CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Upholstery & Restaurant Seating",
  description:
    "Commercial upholstery and restaurant booth/chair reupholstery for businesses in St. Catharines and the Niagara Region. Project coordination, fabric & vinyl options.",
  path: "/commercial",
});

const businessTypes = [
  "Restaurants",
  "Cafés",
  "Bars",
  "Hotels",
  "Offices",
  "Clinics & waiting rooms",
  "Salons",
  "Retail businesses",
];

const benefits = [
  {
    title: "Professional appearance",
    body: "Seating is one of the first things customers notice. Worn or torn upholstery reflects on the business even when everything else is well run.",
  },
  {
    title: "Furniture longevity",
    body: "Repairing and reupholstering commercial-grade frames can extend the useful life of seating that would otherwise be replaced at full cost.",
  },
  {
    title: "Minimizing disruption",
    body: "We coordinate project timing with you where practical — for example working in stages so you're not without seating all at once.",
  },
  {
    title: "Material selection",
    body: "Fabric and vinyl options can be discussed based on how the seating is actually used, cleaning requirements, and your budget.",
  },
];

export default function CommercialPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.siteUrl },
            { name: "Commercial", url: `${siteConfig.siteUrl}/commercial` },
          ]),
          serviceSchema({
            name: "Commercial Upholstery & Restaurant Seating",
            description:
              "Commercial upholstery, restaurant booth and chair reupholstery, and business seating repair in St. Catharines, Ontario and the Niagara Region.",
            url: `${siteConfig.siteUrl}/commercial`,
          }),
        ]}
      />
      <PageHero
        eyebrow="For businesses"
        title="Commercial Upholstery & Restaurant Seating"
        lede="Restaurants, cafés, bars, hotels, offices, clinics and retail businesses across St. Catharines and Niagara rely on seating that looks presentable and holds up to daily use."
      />

      <Section tone="paper" aria-labelledby="businesses-heading">
        <SectionHeading
          id="businesses-heading"
          eyebrow="Who we work with"
          title="Businesses that depend on their seating"
        />
        <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {businessTypes.map((b) => (
            <li
              key={b}
              className="flex items-center gap-2 rounded-md border border-tan-light bg-cream px-4 py-3 text-sm font-medium text-charcoal-soft"
            >
              <BuildingIcon className="text-brown" />
              {b}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-ink-muted">
          We also work with property managers, interior designers and furniture retailers
          coordinating upholstery work on behalf of a client.
        </p>
      </Section>

      <Section tone="cream" aria-labelledby="commercial-benefits-heading">
        <SectionHeading
          id="commercial-benefits-heading"
          eyebrow="Why businesses choose repair over replacement"
          title="Keep customer-facing furniture presentable — without buying new"
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="flex gap-3 rounded-md border border-tan-light bg-paper p-6">
              <span className="mt-1 text-brown" aria-hidden>
                <CheckIcon />
              </span>
              <div>
                <p className="font-semibold text-charcoal">{b.title}</p>
                <p className="mt-1 text-sm text-charcoal-soft">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="commercial-seating-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <ProjectPhoto
            src="/images/gallery/pub-corner-booth-brown-vinyl.jpg"
            alt="Corner booth seating in a sports bar reupholstered in tan and dark brown vinyl"
            aspect="aspect-[4/3]"
          />
          <div>
            <SectionHeading
              id="commercial-seating-heading"
              eyebrow="What we work on"
              title="Restaurant chairs, booths, benches & more"
              lede="If it's upholstered and it's part of your business, it's worth asking about — from a single damaged booth seat to a full dining room."
            />
            <ul className="mt-6 space-y-2 text-charcoal-soft">
              <li>• Restaurant and café chairs</li>
              <li>• Booth seating and banquettes</li>
              <li>• Benches</li>
              <li>• Waiting-room and clinic seating</li>
              <li>• Office and reception seating</li>
            </ul>
          </div>
        </div>
      </Section>

      <section className="bg-brown texture-weave py-16 text-cream">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Request a Commercial Quote
          </h2>
          <p className="mt-4 text-cream/90">
            Tell us about your business, the number of pieces involved, and what you're
            looking to achieve. M.S. will follow up to discuss your project and timeline.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/free-estimate" size="lg" variant="call">
              Request a Commercial Quote
            </Button>
          </div>
        </div>
      </section>

      <EstimateCtaBanner
        heading="Coordinating a multi-piece project?"
        body="Call M.S. to talk through timing and scope before submitting photos."
      />
    </>
  );
}
