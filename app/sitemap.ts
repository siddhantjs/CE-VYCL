import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { getSitemapEntries } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return getSitemapEntries().map(({ path, changeFrequency, priority }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
