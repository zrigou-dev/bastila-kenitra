import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages: { ar: SITE_URL, fr: `${SITE_URL}/fr` } },
    },
    {
      url: `${SITE_URL}/fr`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages: { ar: SITE_URL, fr: `${SITE_URL}/fr` } },
    },
  ];
}
