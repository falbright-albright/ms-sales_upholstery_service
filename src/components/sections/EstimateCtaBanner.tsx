import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { PhoneIcon } from "@/components/ui/Icons";
import { siteConfig, telHref } from "@/lib/site-config";

export default function EstimateCtaBanner({
  heading = "Ready to see what's possible?",
  body = "Send a few photos and a short description of the piece. M.S. will get back to you with a preliminary estimate.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brown texture-weave py-14 text-cream">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold md:text-4xl">{heading}</h2>
        <p className="max-w-xl text-cream/90">{body}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/free-estimate" variant="call" size="lg">
            Get Your Free Estimate
          </Button>
          <Button
            href={telHref}
            size="lg"
            variant="secondary"
            icon={<PhoneIcon />}
            className="!border-cream !text-cream hover:!bg-cream hover:!text-brown"
          >
            Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
          </Button>
        </div>
      </Container>
    </section>
  );
}
