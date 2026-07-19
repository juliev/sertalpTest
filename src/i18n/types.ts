import type { pt } from "./dictionaries/pt";

type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly unknown[]
      ? { readonly [Key in keyof T]: DeepWiden<T[Key]> }
      : T extends object
        ? { readonly [Key in keyof T]: DeepWiden<T[Key]> }
        : T;

export type Dictionary = DeepWiden<typeof pt>;
