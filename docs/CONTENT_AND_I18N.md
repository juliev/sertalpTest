# Content and internationalization

## 1. Goal

Keep the public site Portuguese-only while preserving an English development dictionary so the repository owner can review translations.

The English dictionary is not a public localization feature.

## 2. Locale selection

Use a small build-time configuration:

```ts
export const supportedContentLocales = ["pt", "en"] as const;
export type ContentLocale = (typeof supportedContentLocales)[number];

const requestedLocale = process.env.SITE_LOCALE;

export const siteLocale: ContentLocale = requestedLocale === "en" ? "en" : "pt";
```

Default to `pt`.

Use the selected locale for:

- dictionary;
- `html lang`;
- page metadata.

Do not use the locale in URLs.

## 3. Suggested files

```text
src/
  content/
    company.ts
    projects.ts
    suppliers.ts
    warranties.ts
  i18n/
    config.ts
    types.ts
    get-dictionary.ts
    dictionaries/
      pt.ts
      en.ts
```

## 4. Data boundaries

### `company.ts`

Keep invariant values:

- commercial and legal names;
- legal registration line;
- NIPC, CAE, share capital, IMPIC;
- phone numbers and normalized links;
- emails;
- addresses;
- hours data;
- Facebook;
- Google Maps URLs;
- markets/countries where appropriate;
- canonical domain.

### `projects.ts`

Keep:

- stable ID;
- city;
- main image path;
- optional additional image paths;
- display order.

Translated project titles, descriptions, and alt text remain in dictionaries keyed by project ID.

Suggested type:

```ts
export type ProjectId =
  | "pvc-windows"
  | "aluminium-windows"
  | "entrance-door"
  | "balcony-doors"
  | "sliding-system"
  | "custom-window";

export type ProjectImage = {
  src: string;
};

export type Project = {
  id: ProjectId;
  city: string;
  mainImage: ProjectImage;
  additionalImages?: ProjectImage[];
};
```

### `warranties.ts`

Keep invariant warranty duration values and a stable material key.

### `suppliers.ts`

Start with an empty array. Do not invent names. The UI must not render the section when the array is empty.

## 5. Dictionary boundaries

Keep all visible translated UI copy in the typed dictionary:

- navigation;
- buttons;
- headings;
- paragraphs;
- cards;
- project title/description/alt;
- accessibility labels;
- opening-hours labels;
- privacy/cookies copy;
- SEO metadata;
- 404 redirect fallback.

Do not translate:

- emails;
- phone numbers;
- URLs;
- legal identifiers;
- company legal name;
- supplier/brand names;
- image file paths;
- cities unless a language-specific spelling is intentionally required.

## 6. Type safety

Use a shared `Dictionary` type.

Preferred patterns:

```ts
export const pt = {
  // ...
} satisfies Dictionary;
```

```ts
export const en = {
  // ...
} satisfies Dictionary;
```

Do not use `dict: any`.

A dictionary-key mismatch must fail TypeScript checking.

## 7. Component API

Prefer passing only the relevant dictionary slice to leaf components, or read the selected dictionary in a page and pass typed content.

Avoid passing a giant untyped dictionary to every component.

## 8. SEO language behavior

Production:

- `SITE_LOCALE=pt`
- `lang="pt-PT"`
- `openGraph.locale="pt_PT"`
- canonical URLs on `sertalp.com`

English development review:

- same URL structure;
- `lang="en"`;
- English metadata;
- not a separately deployed or indexed version.

Do not add `hreflang` or language alternate links.

## 9. Editing checklist

Whenever visible copy changes:

1. Update PT and EN.
2. Preserve identical typed key structure.
3. Keep factual values centralized.
4. Run `npm run typecheck`.
5. Run relevant E2E tests when labels or navigation change.
