import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/residential", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/commercial", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/free-estimate", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/process", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/why-choose-us", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/vision", priority: 0.4, changeFrequency: "yearly" as const },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" as const },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/terms-of-service", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/legal-disclaimer", priority: 0.2, changeFrequency: "yearly" as const },
  { path: "/accessibility-statement", priority: 0.2, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
