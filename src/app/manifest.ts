import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.businessDisplayName,
    short_name: "MS & Sales",
    description: siteConfig.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ef",
    theme_color: siteConfig.themeColorHex,
    icons: [
      { src: "/icon.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
