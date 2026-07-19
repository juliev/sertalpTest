import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.privacy.seo,
  "/politica-de-privacidade/",
);

export default function PrivacyPage() {
  const copy = dictionary.privacy;

  return (
    <LegalPage
      title={copy.title}
      updated={copy.updated}
      intro={copy.intro}
      sections={copy.sections}
      contactLabel={copy.contactLabel}
      websiteLabel={copy.websiteLabel}
    />
  );
}
