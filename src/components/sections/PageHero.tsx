import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Section";

export default function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-tan-light bg-cream-dark texture-weave py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">{title}</h1>
          {lede ? <p className="mt-5 text-lg text-charcoal-soft md:text-xl">{lede}</p> : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
