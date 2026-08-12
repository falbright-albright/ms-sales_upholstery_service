import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ProjectPhoto from "@/components/ui/ProjectPhoto";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";
import { ChairIcon, SofaIcon, CheckIcon } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Upholstery & Repair for St. Catharines Homes",
  description:
    "Torn fabric, worn cushions, dated dining chairs or a tired-looking armchair — residential upholstery and furniture repair for St. Catharines homeowners.",
  path: "/residential",
});

const problems = [
  "Torn or worn fabric",
  "Stained upholstery that won't come clean",
  "Sagging or flattened cushions",
  "Damaged or wobbly dining chairs",
  "Outdated fabric that no longer suits your space",
  "Peeling or cracked vinyl",
  "Furniture that's structurally sound but cosmetically worn",
];

export default function ResidentialPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.siteUrl },
            { name: "Residential", url: `${siteConfig.siteUrl}/residential` },
          ]),
          serviceSchema({
            name: "Residential Furniture Upholstery & Repair",
            description:
              "Furniture upholstery, reupholstery and repair for homeowners in St. Catharines, Ontario and the surrounding Niagara Region.",
            url: `${siteConfig.siteUrl}/residential`,
          }),
        ]}
      />
      <PageHero
        eyebrow="For homeowners"
        title="Furniture Upholstery & Repair for St. Catharines Homes"
        lede="Good furniture doesn't need to be replaced just because the fabric wore out. We help homeowners across St. Catharines repair and reupholster the pieces they already own."
      />

      <Section tone="paper" aria-labelledby="problems-heading">
        <SectionHeading
          id="problems-heading"
          eyebrow="Common issues we see"
          title="If any of this sounds familiar, we can probably help"
        />
        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {problems.map((p) => (
            <li key={p} className="flex items-start gap-3 rounded-md border border-tan-light bg-cream p-4">
              <span className="mt-0.5 text-brown" aria-hidden>
                <CheckIcon />
              </span>
              <span className="text-charcoal-soft">{p}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="cream" aria-labelledby="residential-work-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              id="residential-work-heading"
              eyebrow="What we work on"
              title="Everyday furniture, treated with real care"
              lede="Dining chairs, sofas, loveseats, armchairs and accent pieces — the furniture that actually gets used every day, and shows it."
            />
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3">
                <ChairIcon className="text-brown" />
                <span className="text-charcoal-soft">
                  Dining sets — from one chair to a full set
                </span>
              </li>
              <li className="flex items-center gap-3">
                <SofaIcon className="text-brown" />
                <span className="text-charcoal-soft">Sofas, loveseats and sectionals</span>
              </li>
              <li className="flex items-center gap-3">
                <ChairIcon className="text-brown" />
                <span className="text-charcoal-soft">
                  Armchairs, accent chairs and vintage pieces
                </span>
              </li>
            </ul>
          </div>
          <ProjectPhoto
            src="/images/gallery/dining-chair-carved-wood-leather.jpg"
            alt="Ornate carved wood dining chair reupholstered in brown leather-look vinyl"
            aspect="aspect-[4/3]"
          />
        </div>
      </Section>

      <Section tone="paper" aria-labelledby="residential-why-heading">
        <SectionHeading
          id="residential-why-heading"
          eyebrow="Repair or replace?"
          title="An honest read on your furniture"
          lede="Not every piece is worth restoring, and we'll tell you plainly if that's the case. But a lot of home furniture — especially anything with a solid wood frame — has real life left in it once the fabric, foam or a specific repair issue is addressed."
        />
      </Section>

      <section className="bg-brown texture-weave py-16 text-cream">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">
            Send Photos for a Free Estimate
          </h2>
          <p className="mt-4 text-cream/90">
            Take a few photos of your furniture — including any damaged or worn areas — and
            tell us what you're hoping to change. M.S. will follow up with a preliminary
            estimate.
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/free-estimate" size="lg" variant="call">
              Send Photos for a Free Estimate
            </Button>
          </div>
        </div>
      </section>

      <EstimateCtaBanner
        heading="Have questions before you send photos?"
        body="Call M.S. directly and describe what you're working with."
      />
    </>
  );
}
