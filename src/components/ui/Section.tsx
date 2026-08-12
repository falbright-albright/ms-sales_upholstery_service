import type { ReactNode } from "react";
import Container from "./Container";

type Tone = "cream" | "paper" | "brown" | "tan-light";

const tones: Record<Tone, string> = {
  cream: "bg-cream",
  paper: "bg-paper",
  brown: "bg-brown text-cream",
  "tan-light": "bg-tan-light",
};

export default function Section({
  children,
  tone = "cream",
  className = "",
  id,
  "aria-labelledby": ariaLabelledBy,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={`py-14 md:py-20 ${tones[tone]} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brass-dark md:text-sm">
      {children}
    </p>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 id={id} className="text-3xl font-semibold leading-tight md:text-4xl">
        {title}
      </h2>
      {lede ? <p className="mt-4 text-lg text-charcoal-soft">{lede}</p> : null}
    </div>
  );
}
