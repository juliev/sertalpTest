import type { Metadata } from "next";
import { company } from "@/content/company";
import { siteImages } from "@/content/images";
import { openGraphLocale } from "@/i18n/config";

type SeoContent = {
  title: string;
  description: string;
};

export const createPageMetadata = (
  seo: SeoContent,
  pathname: string,
): Metadata => ({
  title: seo.title,
  description: seo.description,
  alternates: {
    canonical: pathname,
  },
  openGraph: {
    type: "website",
    url: pathname,
    title: seo.title,
    description: seo.description,
    siteName: company.commercialName,
    locale: openGraphLocale,
    images: [
      {
        url: siteImages.hero,
        width: 1024,
        height: 682,
        alt: company.commercialName,
      },
    ],
  },
});
