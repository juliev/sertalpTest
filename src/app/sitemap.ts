import type { MetadataRoute } from "next";
import { company, publicRoutes } from "@/content/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, company.canonicalUrl).toString(),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
