import { workImages, type WorkImage } from "@/content/images";

export type ProjectId =
  | "casal-do-paul"
  | "almoinhas-velhas"
  | "diogo-velasques"
  | "alegria"
  | "misericordia"
  | "santa-rita"
  | "sobreda"
  | "egas-moniz"
  | "infante-santo"
  | "adema-do-meio"
  | "macieiras";

export type ProjectMaterial = "PVC" | "Alumínio";
export type ProjectCategory = "windows" | "doors" | "windows-and-doors";

export type Project = {
  id: ProjectId;
  slug: ProjectId;
  location: string;
  category: ProjectCategory;
  material: ProjectMaterial;
  materialNeedsClientConfirmation: true;
  coverImage: WorkImage;
  additionalImages?: readonly WorkImage[];
  featured: boolean;
  displayOrder: number;
  homePreviewOrder?: number;
  windowsGalleryOrder?: number;
  doorsGalleryOrder?: number;
};

export const projects: readonly Project[] = [
  {
    id: "casal-do-paul",
    slug: "casal-do-paul",
    location: "Casal do Paúl",
    category: "windows",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.casalGlazing,
    featured: true,
    displayOrder: 1,
    windowsGalleryOrder: 6,
  },
  {
    id: "almoinhas-velhas",
    slug: "almoinhas-velhas",
    location: "Almoinhas Velhas",
    category: "windows-and-doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.almoinhasSliding,
    additionalImages: [workImages.almoinhasFixed],
    featured: true,
    displayOrder: 2,
    homePreviewOrder: 3,
    windowsGalleryOrder: 5,
  },
  {
    id: "diogo-velasques",
    slug: "diogo-velasques",
    location: "Diogo Velasques",
    category: "windows-and-doors",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.diogoWindows,
    additionalImages: [workImages.diogoDoor],
    featured: false,
    displayOrder: 3,
    homePreviewOrder: 2,
    windowsGalleryOrder: 1,
  },
  {
    id: "alegria",
    slug: "alegria",
    location: "Alegria",
    category: "doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.alegriaDoor,
    featured: false,
    displayOrder: 4,
    homePreviewOrder: 1,
    doorsGalleryOrder: 1,
  },
  {
    id: "misericordia",
    slug: "misericordia",
    location: "Misericórdia",
    category: "doors",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.misericordiaDoor,
    featured: false,
    displayOrder: 5,
    doorsGalleryOrder: 3,
  },
  {
    id: "santa-rita",
    slug: "santa-rita",
    location: "Santa Rita",
    category: "windows",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.santaRitaGlazing,
    featured: false,
    displayOrder: 6,
    windowsGalleryOrder: 3,
  },
  {
    id: "sobreda",
    slug: "sobreda",
    location: "Sobreda",
    category: "windows",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.sobredaWindow,
    featured: false,
    displayOrder: 7,
    windowsGalleryOrder: 2,
  },
  {
    id: "egas-moniz",
    slug: "egas-moniz",
    location: "Egas Moniz",
    category: "windows",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.egasWindows,
    featured: false,
    displayOrder: 8,
    windowsGalleryOrder: 4,
  },
  {
    id: "infante-santo",
    slug: "infante-santo",
    location: "Infante Santo",
    category: "doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.infanteDoor,
    featured: false,
    displayOrder: 9,
    doorsGalleryOrder: 4,
  },
  {
    id: "adema-do-meio",
    slug: "adema-do-meio",
    location: "Adema do Meio",
    category: "doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.ademaDoor,
    featured: false,
    displayOrder: 10,
    doorsGalleryOrder: 2,
  },
  {
    id: "macieiras",
    slug: "macieiras",
    location: "Macieiras",
    category: "doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.macieirasDoor,
    featured: false,
    displayOrder: 11,
    doorsGalleryOrder: 5,
  },
];

export type ProductGalleryItemId =
  "unnamed-sliding-door" | "unnamed-arched-door";

export type ProductGalleryItem = {
  id: ProductGalleryItemId;
  material: ProjectMaterial;
  image: WorkImage;
  doorsGalleryOrder: number;
};

export const productGalleryItems: readonly ProductGalleryItem[] = [
  {
    id: "unnamed-sliding-door",
    material: "Alumínio",
    image: workImages.unnamedSlidingDoor,
    doorsGalleryOrder: 6,
  },
  {
    id: "unnamed-arched-door",
    material: "PVC",
    image: workImages.unnamedArchedDoor,
    doorsGalleryOrder: 7,
  },
];
