export const warranties = [
  { id: "glass", years: 10 },
  { id: "aluminium", years: 5 },
  { id: "whitePvc", years: 5 },
  { id: "colouredPvc", years: 3 },
] as const;

export type WarrantyId = (typeof warranties)[number]["id"];
