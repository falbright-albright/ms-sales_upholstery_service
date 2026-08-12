import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Our Process",
  description:
    "How a furniture upholstery or repair project works, from your first phone call through material selection to finished restoration.",
  path: "/process",
});

const steps = [
  {
    n: "01",
    title: "Contact Us",
    body: "Call M.S. at (519) 555-0100 or submit the free estimate form. Either way, tell us a bit about the piece and what's wrong with it.",
  },
  {
    n: "02",
    title: "Send Photos",
    body: "Photos of the furniture — including any damaged or worn areas — help us understand the condition and give you a more useful preliminary estimate before any in-person visit.",
  },
  {
    n: "03",
    title: "Assessment & Estimate",
    body: "M.S. reviews your project and discusses the options available, including whether the piece is a good candidate for repair or reupholstery in the first place.",
  },
  {
    n: "04",
    title: "Material Selection",
    body: "Once you decide to move forward, you'll choose an appropriate fabric, vinyl or other available material for your piece, balancing look, feel and how it will be used.",
  },
  {
    n: "05",
    title: "Restoration",
    body: "The furniture is repaired and/or reupholstered according to the agreed scope of work. Turnaround depends on the size and complexity of the project.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Our Process", url: `${siteConfig.siteUrl}/process` },
        ])}
      />
      <PageHero
        eyebrow="Our process"
        title="From first photo to finished piece"
        lede="A straightforward process, with no surprises about what happens next."
      />
      <Section tone="paper" aria-label="Process steps">
        <ol className="mx-auto max-w-3xl space-y-8">
          {steps.map((s) => (
            <li key={s.n} className="flex gap-6 border-b border-tan-light pb-8 last:border-0">
              <span className="font-serif text-4xl font-semibold text-brass-dark">{s.n}</span>
              <div>
                <h2 className="text-xl font-semibold text-charcoal">{s.title}</h2>
                <p className="mt-2 text-charcoal-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-4 max-w-3xl text-sm text-ink-muted">
          Efficient turnaround times, depending on the size and complexity of the project.
          M.S. will give you a realistic timeframe once they've reviewed your specific piece.
        </p>
      </Section>
      <EstimateCtaBanner heading="Ready to start the process?" />
    </>
  );
}
