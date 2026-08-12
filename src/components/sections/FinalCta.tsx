import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/Icons";
import { siteConfig, telHref } from "@/lib/site-config";

export default function FinalCta() {
  return (
    <section className="bg-cream-dark py-16 md:py-20" aria-labelledby="final-cta-heading">
      <Container className="text-center">
        <h2 id="final-cta-heading" className="font-serif text-3xl font-semibold md:text-5xl">
          Don't throw away good furniture.
          <br />
          <span className="text-brown italic">Give it a second chance.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-charcoal-soft">
          Send a few photos, tell us what's going on, and get a free preliminary estimate
          from M.S. — no pressure, no obligation.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/free-estimate" size="lg" variant="primary">
            Get Your Free Estimate
          </Button>
          <Button href={telHref} size="lg" variant="call" icon={<PhoneIcon />}>
            Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
