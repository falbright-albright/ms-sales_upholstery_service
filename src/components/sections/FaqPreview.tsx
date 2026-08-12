import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/faq/FaqAccordion";
import { faqItems } from "@/lib/faq-data";

export default function FaqPreview() {
  const preview = faqItems.slice(0, 5);
  return (
    <Section tone="paper" aria-labelledby="faq-preview-heading">
      <SectionHeading
        id="faq-preview-heading"
        eyebrow="Common questions"
        title="Frequently asked questions"
        align="center"
      />
      <div className="mx-auto mt-8 max-w-3xl">
        <FaqAccordion items={preview} />
        <div className="mt-8 flex justify-center">
          <Button href="/faq" variant="secondary">
            See All FAQs
          </Button>
        </div>
      </div>
    </Section>
  );
}
