import type { Metadata } from "next";
import { company } from "@/content/company";
import { workImages } from "@/content/images";
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
        url: workImages.fernandoFerreira.src,
        width: workImages.fernandoFerreira.width,
        height: workImages.fernandoFerreira.height,
        alt: company.commercialName,
      },
    ],
  },
});
