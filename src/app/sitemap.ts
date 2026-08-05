import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://nguyentruonggiang.id.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 1,
      url: siteUrl,
    },
    {
      changeFrequency: "monthly",
      lastModified,
      priority: 0.8,
      url: `${siteUrl}/about`,
    },
  ];
}
