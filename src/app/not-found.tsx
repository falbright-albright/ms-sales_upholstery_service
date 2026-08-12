import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { telHref, siteConfig } from "@/lib/site-config";
import { PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="py-24 md:py-32">
      <Container className="mx-auto max-w-xl text-center">
        <p className="font-serif text-6xl font-semibold text-brass-dark">404</p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-lg text-charcoal-soft">
          The page you're looking for may have moved. Try the free estimate form, or call
          {" "}{siteConfig.ownerName} directly.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/" variant="secondary" size="lg">
            Back to Home
          </Button>
          <Button href="/free-estimate" variant="primary" size="lg">
            Get a Free Estimate
          </Button>
          <Button href={telHref} variant="call" size="lg" icon={<PhoneIcon />}>
            Call {siteConfig.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
