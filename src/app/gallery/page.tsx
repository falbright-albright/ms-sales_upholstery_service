import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";
import PageHero from "@/components/sections/PageHero";
import Section, { SectionHeading } from "@/components/ui/Section";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoGallery from "@/components/gallery/VideoGallery";
import EstimateCtaBanner from "@/components/sections/EstimateCtaBanner";

export const metadata: Metadata = pageMetadata({
  title: "Project Gallery",
  description:
    "Real furniture upholstery and restoration project photos and videos — dining chairs, sofas, armchairs, restaurant seating, fabric and vinyl work in St. Catharines, Ontario.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: siteConfig.siteUrl },
          { name: "Gallery", url: `${siteConfig.siteUrl}/gallery` },
        ])}
      />
      <PageHero
        eyebrow="Gallery"
        title="Project Gallery"
        lede="A look at real projects — organized by category. Most shots here are single project photos rather than matched before/after pairs; we'll add more as new projects are completed and photographed, and we never use stock photography to represent work that isn't our own."
      />
      <Section tone="paper" aria-label="Project photo gallery">
        <GalleryGrid />
      </Section>
      <Section tone="cream" aria-labelledby="videos-heading">
        <SectionHeading
          id="videos-heading"
          eyebrow="Watch the work"
          title="Project videos"
          lede="A few short video clips from real projects. Click any clip to play it."
        />
        <div className="mt-8">
          <VideoGallery />
        </div>
      </Section>
      <EstimateCtaBanner
        heading="Have a piece you'd like restored?"
        body="Send a few photos and get a free preliminary estimate."
      />
    </>
  );
}
