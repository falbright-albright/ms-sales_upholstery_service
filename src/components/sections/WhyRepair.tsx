import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";

const reasons = [
  {
    title: "Good frames are hard to replace",
    body: "A lot of furniture — especially older or solid-wood pieces — has a frame that's better built than what's available new at a similar price point.",
  },
  {
    title: "You already like how it fits your space",
    body: "The size, shape and comfort of a piece you've lived with is a known quantity. A replacement is a gamble on all three.",
  },
  {
    title: "Restoration can address the actual problem",
    body: "Often it's the fabric, foam or a specific structural issue that's failed — not the whole piece. Fixing what's actually wrong can make more sense than starting over.",
  },
  {
    title: "It's your call — we'll tell you what we see",
    body: "Not every piece is a good restoration candidate. We'll give you an honest assessment rather than upselling a project that doesn't make sense.",
  },
];

export default function WhyRepair() {
  return (
    <Section tone="cream" aria-labelledby="why-repair-heading">
      <SectionHeading
        id="why-repair-heading"
        eyebrow="Repair vs. replace"
        title="Why repair instead of replace?"
        lede="Depending on the furniture and scope of work, restoration can be a practical alternative to replacing a piece you already own and love."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {reasons.map((r) => (
          <div key={r.title} className="flex gap-4 rounded-md border border-tan-light bg-paper p-6">
            <span className="mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full bg-brown text-cream">
              <CheckIcon />
            </span>
            <div>
              <p className="font-semibold text-charcoal">{r.title}</p>
              <p className="mt-1 text-sm text-charcoal-soft">{r.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/why-choose-us" variant="ghost">
          More reasons to choose local upholstery →
        </Button>
      </div>
    </Section>
  );
}
