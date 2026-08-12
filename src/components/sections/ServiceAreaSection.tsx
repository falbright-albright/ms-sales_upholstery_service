import Section, { SectionHeading } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { MapPinIcon } from "@/components/ui/Icons";
import { siteConfig } from "@/lib/site-config";

export default function ServiceAreaSection() {
  return (
    <Section tone="tan-light" aria-labelledby="service-area-heading">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            id="service-area-heading"
            eyebrow="Service area"
            title={`Based in ${siteConfig.primaryCity}, serving the Niagara Region`}
            lede={siteConfig.serviceAreaNote}
          />
          <div className="mt-6">
            <Button href="/contact" variant="primary">
              Confirm Service in Your Area
            </Button>
          </div>
        </div>
        <div className="rounded-md border border-tan-dark/40 bg-paper p-6">
          <p className="mb-3 flex items-center gap-2 font-semibold text-charcoal">
            <MapPinIcon className="text-brown" />
            Communities we serve
          </p>
          <p className="mb-3 text-sm text-charcoal-soft">
            Primary service area:{" "}
            <strong className="text-charcoal">{siteConfig.primaryCity}, Ontario</strong>
          </p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-charcoal-soft sm:grid-cols-3">
            {siteConfig.secondaryServiceAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-ink-muted">
            Secondary areas are served on a case-by-case basis — contact us to confirm before
            booking a pickup or in-person visit.
          </p>
        </div>
      </div>
    </Section>
  );
}
