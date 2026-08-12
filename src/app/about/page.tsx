import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section, { SectionHeading } from "@/components/ui/Section";
import ProjectPhoto from "@/components/ui/ProjectPhoto";
import AdminNote from "@/components/ui/AdminNote";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "About M.S.",
  description:
    "About M.S. and this St. Catharines furniture upholstery, repair and restoration business.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "About", url: `${siteConfig.siteUrl}/about` },
        ])}
      />
      <PageHero
        eyebrow="About"
        title="We believe good furniture deserves another life."
        lede="This business is run by M.S., working directly with homeowners and businesses across St. Catharines and the Niagara Region on furniture upholstery, repair and restoration."
      />

      <Section tone="paper" aria-labelledby="about-owner-heading">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <ProjectPhoto
            src="/images/gallery/workshop-vinyl-cushion-detail.jpg"
            alt="A finished vinyl seat cushion on the workshop bench, alongside rolls of upholstery material"
            aspect="aspect-[4/5]"
          />
          <div>
            <SectionHeading id="about-owner-heading" eyebrow="About M.S." title="A personal approach to a hands-on trade" />
            <div className="mt-4 space-y-4 text-charcoal-soft">
              <AdminNote
                note="M.S.'s personal story, background, training and specialties have not been supplied. Replace this placeholder paragraph with their own words before launch."
                fallback={
                  <p>
                    This section is reserved for M.S. to share their own story in their own
                    words — how they got started in upholstery, what they've learned along
                    the way, and what they pay closest attention to when a piece of
                    furniture comes into the workshop. Check back soon, or ask directly when
                    you call.
                  </p>
                }
              />
              <p>
                What doesn't need to wait is the approach: every piece is assessed on its
                own condition, customers get a straightforward answer about whether
                restoration makes sense, and the work is done directly by M.S. rather
                than handed off to a rotating crew.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="cream" aria-labelledby="philosophy-heading">
        <SectionHeading
          id="philosophy-heading"
          eyebrow="Philosophy"
          title="Repair before replace, where it makes sense"
          lede="A lot of furniture gets thrown out over problems that are fixable — a torn seam, worn foam, fabric that's simply gone out of style. Good furniture, especially anything with a solid frame, is often worth a second look before it's worth replacing."
        />
      </Section>

      <EstimateCtaBanner />
    </>
  );
}
