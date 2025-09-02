import { allBlogs } from "content-collections";
import type { MetadataRoute } from "next";
import { headers as getHeaders } from "next/headers";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headers = await getHeaders();
  const domain = headers.get("host") as string;
  const protocol = "https";

  return [
    {
      url: `${protocol}://${domain}`,
      lastModified: new Date(),
    },
    ...allBlogs.map((post) => ({
      url: `${protocol}://${domain}/blog/${post._meta.path}`,
      lastModified: post.publishedOn,
    })),
  ];
}
