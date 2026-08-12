import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section, { SectionHeading } from "@/components/ui/Section";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";
import Button from "@/components/ui/Button";
import {
  ThreadIcon,
  ChairIcon,
  SofaIcon,
  ScissorsIcon,
  BuildingIcon,
} from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Upholstery, Repair & Restoration Services",
  description:
    "Furniture reupholstery, chair upholstery, sofa upholstery, repair, restaurant & commercial seating, and fabric or vinyl replacement in St. Catharines, Ontario.",
  path: "/services",
});

const serviceSections = [
  {
    id: "reupholstery",
    icon: <ThreadIcon />,
    title: "Furniture Reupholstery",
    intro:
      "Reupholstery replaces worn, damaged, outdated or simply unwanted upholstery with new material, giving a piece a fresh look while keeping the frame and character you already have.",
    points: [
      "Removal of old fabric or vinyl and inspection of the frame and padding underneath",
      "Repair of any issues found during that process, where practical",
      "Application of your selected fabric or vinyl",
    ],
  },
  {
    id: "chair-upholstery",
    icon: <ChairIcon />,
    title: "Chair Upholstery",
    intro: "Chairs are one of the most common projects we take on, including:",
    points: [
      "Dining chairs",
      "Armchairs and accent chairs",
      "Kitchen and side chairs",
      "Office chairs, where suitable for reupholstery",
      "Restaurant chairs",
    ],
  },
  {
    id: "sofa-upholstery",
    icon: <SofaIcon />,
    title: "Sofa & Loveseat Upholstery",
    intro:
      "For seating that's worn, torn or simply out of step with the rest of the room. We'll look at the frame, cushions and fill along with the fabric itself, since a sofa's comfort depends on all three.",
    points: [],
  },
  {
    id: "furniture-repair",
    icon: <ScissorsIcon />,
    title: "Furniture Repair",
    intro:
      "Not every piece needs new upholstery — some just need repair. Where appropriate, this can include:",
    points: [
      "Sagging seating and support issues",
      "Cushion and fill replacement",
      "Broken or loose components",
      "General restoration work to extend the life of a piece",
    ],
    note: "The extent of structural repair work we can take on depends on the piece — M.S. will tell you plainly what's realistic once they've seen it.",
  },
  {
    id: "commercial-seating",
    icon: <BuildingIcon />,
    title: "Restaurant & Commercial Seating",
    intro:
      "Restaurants, cafés, bars, hotels and offices depend on seating that looks presentable and holds up to daily use.",
    points: [
      "Restaurant and café chairs",
      "Booth seating and benches",
      "Waiting-area and clinic seating",
      "General commercial seating",
    ],
    note: "We coordinate project timing with you where practical, aiming to keep disruption to your business to a minimum.",
  },
  {
    id: "fabric-vinyl",
    icon: <ThreadIcon />,
    title: "Fabric & Vinyl Replacement",
    intro:
      "You can select new upholstery material for your project, subject to availability and suitability for the piece.",
    points: [
      "Fabric — a wide range of options for residential comfort and style",
      "Vinyl — a common choice for restaurant seating, commercial furniture, and other high-use, easy-clean environments",
    ],
    note: "We don't make claims about fire ratings, commercial certifications, antimicrobial properties or waterproofing unless a specific material's documentation confirms it — ask about a particular material if that matters for your project.",
  },
  {
    id: "restoration",
    icon: <SofaIcon />,
    title: "Furniture Restoration",
    intro:
      "Restoration is about extending the usable life and appearance of a piece of furniture you already own — repairing and reupholstering it so it's worth keeping for years to come, rather than treating it as disposable.",
    points: [],
  },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", url: siteConfig.siteUrl },
            { name: "Services", url: `${siteConfig.siteUrl}/services` },
          ]),
          ...serviceSections.map((s) =>
            serviceSchema({
              name: s.title,
              description: s.intro,
              url: `${siteConfig.siteUrl}/services#${s.id}`,
            })
          ),
        ]}
      />
      <PageHero
        eyebrow="Services"
        title="Upholstery, repair & restoration services"
        lede="A general look at how we help homeowners and businesses in St. Catharines and the Niagara Region. Every piece is different, so the exact scope of work is confirmed with you before anything begins."
      />

      {serviceSections.map((s, i) => (
        <Section key={s.id} id={s.id} tone={i % 2 === 0 ? "paper" : "cream"} aria-labelledby={`${s.id}-heading`}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr]">
            <span className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-tan-light text-2xl text-brown">
              {s.icon}
            </span>
            <div>
              <h2 id={`${s.id}-heading`} className="text-2xl font-semibold md:text-3xl">
                {s.title}
              </h2>
              <p className="mt-3 max-w-2xl text-charcoal-soft">{s.intro}</p>
              {s.points.length > 0 ? (
                <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2 text-charcoal-soft">
                      <span className="text-brass-dark" aria-hidden>
                        —
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              ) : null}
              {s.note ? (
                <p className="mt-4 rounded border border-tan-light bg-cream-dark/60 p-4 text-sm text-charcoal-soft">
                  {s.note}
                </p>
              ) : null}
            </div>
          </div>
        </Section>
      ))}

      <Section tone="tan-light" aria-labelledby="pricing-heading">
        <SectionHeading
          id="pricing-heading"
          eyebrow="Pricing"
          title="How pricing works"
          lede="Every piece is different. Pricing depends on the type of furniture, its size and condition, the complexity of the work, the material selected, the amount of material required, and the number of pieces involved. Send us photos for a free preliminary estimate rather than a generic price list that wouldn't reflect your actual project."
        />
        <div className="mt-6">
          <Button href="/free-estimate" variant="primary">
            Get Your Free Estimate
          </Button>
        </div>
      </Section>

      <EstimateCtaBanner />
    </>
  );
}
