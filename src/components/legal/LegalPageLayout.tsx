import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

/**
 * Shared shell for the four legal/policy pages. These are
 * website-ready legal documents drafted for an Ontario sole
 * proprietorship in this line of work — they are NOT a substitute
 * for review by the business owner (and, where appropriate, legal
 * counsel) before launch, and they do not by themselves make the
 * business "legally compliant." See /docs/BUSINESS-LAUNCH-CHECKLIST.md.
 */
export default function LegalPageLayout({
  title,
  effectiveDateNote = "Not yet published — this document takes effect once reviewed and published by the business owner.",
  children,
}: {
  title: string;
  effectiveDateNote?: string;
  children: ReactNode;
}) {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brass-dark">
            Legal
          </p>
          <h1 className="mt-2 text-3xl font-semibold md:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-muted">{effectiveDateNote}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {siteConfig.businessDisplayName} — {siteConfig.businessStructure}, operating in
            Ontario, Canada.
          </p>

          <div className="legal-prose mt-8">{children}</div>
        </div>
      </Container>
    </section>
  );
}
