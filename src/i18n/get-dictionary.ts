import { siteLocale } from "./config";
import { en } from "./dictionaries/en";
import { pt } from "./dictionaries/pt";
import type { Dictionary } from "./types";

const dictionaries: Record<"pt" | "en", Dictionary> = { pt, en };

export const getDictionary = (): Dictionary => dictionaries[siteLocale];
