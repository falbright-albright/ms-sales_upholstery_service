import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ChairIcon, SofaIcon, BuildingIcon, ThreadIcon } from "@/components/ui/Icons";

const items = [
  { icon: <ChairIcon />, label: "Dining chairs" },
  { icon: <ChairIcon />, label: "Armchairs & accent chairs" },
  { icon: <SofaIcon />, label: "Sofas & loveseats" },
  { icon: <ChairIcon />, label: "Kitchen & side chairs" },
  { icon: <BuildingIcon />, label: "Restaurant & café chairs" },
  { icon: <SofaIcon />, label: "Booth seating & benches" },
  { icon: <ChairIcon />, label: "Office seating (where suitable)" },
  { icon: <ThreadIcon />, label: "Vintage & heirloom furniture" },
];

export default function WhatWeRestore() {
  return (
    <Section tone="cream" aria-labelledby="what-we-restore-heading">
      <SectionHeading
        id="what-we-restore-heading"
        eyebrow="What can we restore?"
        title="If it's upholstered, we probably work on it"
        lede="From a single dining chair to a full set of restaurant booths, we assess each piece on its own condition rather than assuming it can — or can't — be restored."
      />
      <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex flex-col items-center gap-3 rounded-md border border-tan-light bg-paper px-4 py-6 text-center shadow-sm"
          >
            <span className="text-3xl text-brown" aria-hidden>
              {item.icon}
            </span>
            <span className="text-sm font-medium text-charcoal">{item.label}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <Button href="/free-estimate" variant="primary">
          Send Photos for a Free Estimate
        </Button>
        <p className="text-sm text-ink-muted">
          Not sure if your piece qualifies? Send a photo — M.S. will give you an honest
          answer.
        </p>
      </div>
    </Section>
  );
}
