import type { MetadataRoute } from "next";
import { company } from "@/content/company";
import { isPreviewDeployment } from "@/lib/deployment";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const preview = isPreviewDeployment();

  return {
    rules: {
      userAgent: "*",
      ...(preview ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: `${company.canonicalUrl}/sitemap.xml`,
    host: company.canonicalUrl,
  };
}
