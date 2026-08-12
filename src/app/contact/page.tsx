import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig, telHref } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/forms/ContactForm";
import AdminNote from "@/components/ui/AdminNote";
import { PhoneIcon, MapPinIcon } from "@/components/ui/Icons";

export const metadata: Metadata = pageMetadata({
  title: "Contact M.S.",
  description:
    "Contact M.S. for furniture upholstery, repair and reupholstery in St. Catharines, Ontario. Call (519) 242-5757 or send a message.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Contact", url: `${siteConfig.siteUrl}/contact` },
        ])}
      />
      <PageHero
        eyebrow="Contact"
        title={`Contact ${siteConfig.ownerName}`}
        lede="Call directly for the fastest response, or send a message and we'll get back to you."
      />

      <section className="border-b border-tan-light bg-brown texture-weave py-10 text-center text-cream">
        <a
          href={telHref}
          className="mx-auto inline-flex min-h-16 items-center justify-center gap-3 rounded-sm bg-brass-light px-8 text-xl font-bold text-charcoal hover:bg-brass-hover"
        >
          <PhoneIcon aria-hidden />
          Call for a Free Estimate — {siteConfig.phoneDisplay}
        </a>
      </section>

      <Section tone="paper" aria-label="Contact details and form">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div className="space-y-8">
            <div>
              <h2 className="text-lg font-semibold text-charcoal">Phone</h2>
              <a href={telHref} className="mt-1 block text-brown hover:underline">
                {siteConfig.phoneDisplay}
              </a>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-charcoal">Email</h2>
              <AdminNote
                note="No business email address has been supplied yet."
                fallback={<p className="mt-1 text-charcoal-soft">{siteConfig.emailDisplay}</p>}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-charcoal">Business hours</h2>
              <AdminNote
                note="Business hours have not been confirmed."
                fallback={<p className="mt-1 text-charcoal-soft">{siteConfig.hoursDisplay}</p>}
              />
            </div>
            <div>
              <h2 className="flex items-center gap-2 text-lg font-semibold text-charcoal">
                <MapPinIcon className="text-brown" />
                Service area
              </h2>
              <p className="mt-1 text-charcoal-soft">
                {siteConfig.primaryCity}, Ontario, and surrounding Niagara communities.
                {" "}
                <Link href="/#service-area-heading" className="text-brown hover:underline">
                  See full service area
                </Link>
                .
              </p>
              <AdminNote
                note="No public street address has been confirmed for publication — a map will be added once the owner supplies and approves one."
                fallback={
                  <p className="mt-2 text-sm text-ink-muted">
                    We work by appointment and project pickup/drop-off — call to discuss
                    what works for your project.
                  </p>
                }
              />
            </div>
            <div className="rounded-md border border-tan-light bg-cream-dark/50 p-5">
              <p className="font-semibold text-charcoal">Prefer to submit project details?</p>
              <p className="mt-1 text-sm text-charcoal-soft">
                Use the free estimate form to include furniture type, photos and project
                details in one submission.
              </p>
              <Button href="/free-estimate" variant="secondary" className="mt-3">
                Go to Free Estimate Form
              </Button>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold text-charcoal">Send a message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
