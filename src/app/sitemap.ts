import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const domain =
    process.env.NEXT_PUBLIC_DOMAIN ||
    "https://realestate.abdurrozaqf-dev.workers.dev/";
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
