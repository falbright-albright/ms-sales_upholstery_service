import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { siteConfig, telHref } from "@/lib/site-config";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { CheckIcon, PhoneIcon } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Request Received",
  description: "Your free estimate request has been received.",
  path: "/free-estimate/success",
  noIndex: true,
});

export default function FreeEstimateSuccessPage() {
  return (
    <section className="py-20 md:py-28">
      <Container className="mx-auto max-w-xl text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-3xl text-success">
          <CheckIcon />
        </span>
        <h1 className="mt-6 text-3xl font-semibold md:text-4xl">
          Thanks! Your request has been received.
        </h1>
        <p className="mt-4 text-lg text-charcoal-soft">
          {siteConfig.ownerName} will review your information and contact you regarding
          your project. If your request is urgent, feel free to call directly in the
          meantime.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={telHref} variant="call" size="lg" icon={<PhoneIcon />}>
            Call {siteConfig.ownerName}: {siteConfig.phoneDisplay}
          </Button>
          <Button href="/" variant="secondary" size="lg">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
