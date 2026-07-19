import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.cookies.seo,
  "/politica-de-cookies/",
);

export default function CookiesPage() {
  const copy = dictionary.cookies;

  return (
    <LegalPage
      title={copy.title}
      updated={copy.updated}
      sections={copy.sections}
    />
  );
}
