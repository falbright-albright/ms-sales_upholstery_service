import Link from "next/link";
import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ChairIcon, SofaIcon, BuildingIcon, ScissorsIcon, ThreadIcon, SofaIcon as CushionIcon } from "@/components/ui/Icons";

const services = [
  {
    icon: <ThreadIcon />,
    title: "Furniture Reupholstery",
    body: "Replacing worn, torn, outdated or unwanted upholstery with a fabric or vinyl that suits your space.",
  },
  {
    icon: <ChairIcon />,
    title: "Chair Upholstery",
    body: "Dining chairs, armchairs, accent chairs, kitchen chairs and restaurant seating.",
  },
  {
    icon: <SofaIcon />,
    title: "Sofa & Loveseat Upholstery",
    body: "New life for seating that's worn, torn or simply out of step with your décor.",
  },
  {
    icon: <ScissorsIcon />,
    title: "Furniture Repair",
    body: "Sagging seats, cushion and fill replacement, and general restoration work.",
  },
  {
    icon: <BuildingIcon />,
    title: "Restaurant & Commercial Seating",
    body: "Booths, benches and commercial chairs, coordinated to minimize disruption to your business.",
  },
  {
    icon: <CushionIcon />,
    title: "Fabric & Vinyl Replacement",
    body: "Material options for residential comfort or easy-clean commercial durability.",
  },
];

export default function ServicesOverview() {
  return (
    <Section tone="paper" aria-labelledby="services-overview-heading">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <SectionHeading
          id="services-overview-heading"
          eyebrow="Services"
          title="Upholstery, repair & restoration services"
          lede="A general look at how we help. Every project is different, so the exact scope is confirmed with you before work begins."
        />
        <Button href="/services" variant="secondary" className="whitespace-nowrap">
          View All Services
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link
            key={s.title}
            href="/services"
            className="group flex flex-col gap-3 rounded-md border border-tan-light bg-cream p-6 transition-colors hover:border-brown"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-tan-light text-xl text-brown">
              {s.icon}
            </span>
            <h3 className="text-lg font-semibold text-charcoal group-hover:text-brown">
              {s.title}
            </h3>
            <p className="text-sm text-charcoal-soft">{s.body}</p>
          </Link>
        ))}
      </div>
    </Section>
  );
}
