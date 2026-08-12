import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const steps = [
  { n: "01", title: "Contact Us", body: "Call M.S. or submit the free estimate form." },
  { n: "02", title: "Send Photos", body: "Share photos of the furniture and describe the problem." },
  { n: "03", title: "Assessment & Estimate", body: "M.S. reviews the project and discusses your options." },
  { n: "04", title: "Material Selection", body: "Choose a fabric, vinyl or other available material." },
  { n: "05", title: "Restoration", body: "Your furniture is repaired or reupholstered to the agreed scope." },
];

export default function ProcessOverview() {
  return (
    <Section tone="paper" aria-labelledby="process-heading">
      <SectionHeading
        id="process-heading"
        eyebrow="Our process"
        title="From first photo to finished piece"
        align="center"
      />
      <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {steps.map((s) => (
          <li key={s.n} className="rounded-md border border-tan-light bg-cream p-6 text-center">
            <span className="font-serif text-3xl font-semibold text-brass-dark">{s.n}</span>
            <p className="mt-2 font-semibold text-charcoal">{s.title}</p>
            <p className="mt-1 text-sm text-charcoal-soft">{s.body}</p>
          </li>
        ))}
      </ol>
      <div className="mt-8 flex justify-center">
        <Button href="/process" variant="secondary">
          See the Full Process
        </Button>
      </div>
    </Section>
  );
}
