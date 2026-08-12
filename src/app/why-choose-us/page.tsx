import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";
import { HandshakeIcon, MapPinIcon, ThreadIcon, CheckIcon, SofaIcon } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Why Choose Us",
  description:
    "Why homeowners and businesses in St. Catharines choose local, personal furniture upholstery and repair over buying new.",
  path: "/why-choose-us",
});

const reasons = [
  {
    icon: <SofaIcon />,
    title: "Restore Instead of Replace",
    body: "Good furniture may have many more years of useful life in it. We'll help you figure out whether repair or reupholstery makes sense before you consider buying new.",
  },
  {
    icon: <HandshakeIcon />,
    title: "Personal Service",
    body: "You deal directly with M.S. — from your first call through to the finished piece. No call centre, no account manager, no runaround.",
  },
  {
    icon: <MapPinIcon />,
    title: "Local to St. Catharines",
    body: "A locally focused upholstery service for homeowners and businesses across St. Catharines and the surrounding Niagara Region.",
  },
  {
    icon: <ThreadIcon />,
    title: "Flexible Material Options",
    body: "We'll go over fabric and vinyl options together, based on the furniture itself and how it's actually going to be used.",
  },
  {
    icon: <CheckIcon />,
    title: "Free Estimates",
    body: "A low-friction way to start the conversation — send photos, get a preliminary estimate, and decide from there.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Why Choose Us", url: `${siteConfig.siteUrl}/why-choose-us` },
        ])}
      />
      <PageHero
        eyebrow="Why choose us"
        title="Practical reasons to work with a local upholsterer"
        lede="No exaggerated claims — just what actually matters when you're deciding whether to repair, reupholster or replace a piece of furniture."
      />
      <Section tone="paper" aria-label="Reasons to choose us">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 rounded-md border border-tan-light bg-cream p-6">
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-tan-light text-xl text-brown">
                {r.icon}
              </span>
              <div>
                <h2 className="text-lg font-semibold text-charcoal">{r.title}</h2>
                <p className="mt-1 text-sm text-charcoal-soft">{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <EstimateCtaBanner />
    </>
  );
}
