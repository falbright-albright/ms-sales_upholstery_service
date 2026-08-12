import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, localBusinessSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import WhatWeRestore from "@/components/sections/WhatWeRestore";
import ServicesOverview from "@/components/sections/ServicesOverview";
import BeforeAfterPreview from "@/components/sections/BeforeAfterPreview";
import { ResidentialTeaser, CommercialTeaser } from "@/components/sections/ResidentialCommercial";
import WhyRepair from "@/components/sections/WhyRepair";
import ProcessOverview from "@/components/sections/ProcessOverview";
import MaterialsOverview from "@/components/sections/MaterialsOverview";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";
import ServiceAreaSection from "@/components/sections/ServiceAreaSection";
import ReviewsComingSoon from "@/components/sections/ReviewsComingSoon";
import FaqPreview from "@/components/sections/FaqPreview";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = pageMetadata({
  title: "Furniture Upholstery & Repair in St. Catharines, Ontario",
  description:
    "Give your furniture a second chance. Professional upholstery, reupholstery, repair and restoration for homes and businesses in St. Catharines and the Niagara Region. Free estimates — call M.S..",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      {/* 1. Hero */}
      <Hero />
      {/* 2. Immediate trust / value proposition */}
      <TrustBar />
      {/* 3. What can we restore? */}
      <WhatWeRestore />
      {/* 4. Services */}
      <ServicesOverview />
      {/* 5. Before & after gallery */}
      <BeforeAfterPreview />
      {/* 6. Residential upholstery */}
      <ResidentialTeaser />
      {/* 7. Commercial upholstery */}
      <CommercialTeaser />
      {/* 8. Why repair instead of replace? */}
      <WhyRepair />
      {/* 9. Our process */}
      <ProcessOverview />
      {/* 10. Fabric & vinyl options */}
      <MaterialsOverview />
      {/* 11. Free estimate CTA */}
      <EstimateCtaBanner />
      {/* 12. Service area */}
      <ServiceAreaSection />
      <ReviewsComingSoon />
      {/* 13. FAQ */}
      <FaqPreview />
      {/* 14. Final CTA */}
      <FinalCta />
      {/* 15. Footer is rendered globally in the root layout */}
    </>
  );
}
