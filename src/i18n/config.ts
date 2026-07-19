export const supportedContentLocales = ["pt", "en"] as const;
export type ContentLocale = (typeof supportedContentLocales)[number];

const requestedLocale = process.env.SITE_LOCALE;

export const siteLocale: ContentLocale = requestedLocale === "en" ? "en" : "pt";

export const htmlLanguage = siteLocale === "en" ? "en" : "pt-PT";
export const openGraphLocale = siteLocale === "en" ? "en_US" : "pt_PT";
