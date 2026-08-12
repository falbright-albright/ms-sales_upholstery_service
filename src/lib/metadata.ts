import type { Metadata } from "next";
import { siteConfig } from "./site-config";

/**
 * Builds a consistent Metadata object (title, description, canonical,
 * Open Graph, Twitter card) for a page. Pass a path like "/services".
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const url = `${siteConfig.siteUrl}${opts.path}`;
  const fullTitle =
    opts.path === "/" ? opts.title : `${opts.title} | ${siteConfig.businessDisplayName}`;

  return {
    title: fullTitle,
    description: opts.description,
    alternates: {
      canonical: url,
    },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: siteConfig.businessDisplayName,
      locale: "en_CA",
      type: "website",
      // images intentionally omitted here — src/app/opengraph-image.tsx
      // generates the social preview image via Next.js file convention
      // and is applied automatically to every route.
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
    },
  };
}
