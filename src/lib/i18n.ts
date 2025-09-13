export const locales = ['en', 'pt', 'uk'] as const;
export const defaultLocale = 'en' as const;

export type Locale = typeof locales[number];

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  pt: 'Português',
  uk: 'Українська',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇺🇸',
  pt: '🇵🇹',
  uk: '🇺🇦',
};
