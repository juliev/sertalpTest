import { workImages, type WorkImage } from "@/content/images";

export type ProjectId =
  | "almoinhas-velhas"
  | "linda-a-velha"
  | "bernardim-ribeiro"
  | "fernando-ferreira"
  | "casal-do-paul"
  | "alegria"
  | "castanheiros"
  | "diogo-velasques"
  | "santa-rita"
  | "duque-do-cadaval"
  | "lisboa"
  | "sobreda"
  | "alcoutins"
  | "egas-moniz"
  | "infante-santo"
  | "adema-do-meio"
  | "faias"
  | "barril"
  | "ulgueir"
  | "pascoal-de-melo"
  | "misericordia"
  | "riba-fria"
  | "macieiras";

export type ProjectMaterial = "PVC" | "Alumínio" | "Alumínio e PVC";
export type ProjectCategory = "windows" | "doors" | "windows-and-doors";

export type Project = {
  id: ProjectId;
  slug: ProjectId;
  location: string;
  category: ProjectCategory;
  material: ProjectMaterial;
  materialNeedsClientConfirmation: true;
  locationNeedsClientConfirmation?: true;
  installationPhoto?: true;
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
    id: "almoinhas-velhas",
    slug: "almoinhas-velhas",
    location: "Almoinhas Velhas",
    category: "windows-and-doors",
    material: "Alumínio e PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.almoinhasFacade,
    additionalImages: [
      workImages.almoinhasPanoramic,
      workImages.almoinhasSliding,
      workImages.almoinhasFixed,
    ],
    featured: true,
    displayOrder: 1,
    homePreviewOrder: 1,
    windowsGalleryOrder: 5,
    doorsGalleryOrder: 8,
  },
  {
    id: "linda-a-velha",
    slug: "linda-a-velha",
    location: "Linda-a-Velha",
    category: "doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.lindaAVelha,
    featured: true,
    displayOrder: 2,
    doorsGalleryOrder: 1,
  },
  {
    id: "bernardim-ribeiro",
    slug: "bernardim-ribeiro",
    location: "Bernardim Ribeiro",
    category: "doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.bernardimRibeiro,
    featured: true,
    displayOrder: 3,
    homePreviewOrder: 3,
    doorsGalleryOrder: 3,
  },
  {
    id: "fernando-ferreira",
    slug: "fernando-ferreira",
    location: "Fernando Ferreira",
    category: "windows-and-doors",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.fernandoFerreira,
    featured: true,
    displayOrder: 4,
    windowsGalleryOrder: 2,
  },
  {
    id: "casal-do-paul",
    slug: "casal-do-paul",
    location: "Casal do Paúl",
    category: "windows",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.casalGlazing,
    featured: true,
    displayOrder: 5,
    windowsGalleryOrder: 6,
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
    displayOrder: 6,
    homePreviewOrder: 2,
    doorsGalleryOrder: 2,
  },
  {
    id: "castanheiros",
    slug: "castanheiros",
    location: "Castanheiros",
    category: "doors",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.castanheiros,
    featured: false,
    displayOrder: 7,
    doorsGalleryOrder: 4,
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
    displayOrder: 8,
    windowsGalleryOrder: 1,
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
    displayOrder: 9,
    windowsGalleryOrder: 4,
  },
  {
    id: "duque-do-cadaval",
    slug: "duque-do-cadaval",
    location: "Duque do Cadaval",
    category: "windows",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.duqueDoCadaval,
    featured: false,
    displayOrder: 10,
    windowsGalleryOrder: 7,
  },
  {
    id: "lisboa",
    slug: "lisboa",
    location: "Lisboa",
    category: "windows",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.lisboaFacade,
    featured: false,
    displayOrder: 11,
    windowsGalleryOrder: 9,
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
    displayOrder: 12,
    windowsGalleryOrder: 3,
  },
  {
    id: "alcoutins",
    slug: "alcoutins",
    location: "Alcoutins",
    category: "windows-and-doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    coverImage: workImages.alcoutins,
    featured: false,
    displayOrder: 13,
    windowsGalleryOrder: 11,
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
    displayOrder: 14,
    windowsGalleryOrder: 12,
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
    displayOrder: 15,
    doorsGalleryOrder: 7,
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
    displayOrder: 16,
    doorsGalleryOrder: 5,
  },
  {
    id: "faias",
    slug: "faias",
    location: "Faias",
    category: "windows-and-doors",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    installationPhoto: true,
    coverImage: workImages.faias,
    featured: false,
    displayOrder: 17,
    windowsGalleryOrder: 8,
  },
  {
    id: "barril",
    slug: "barril",
    location: "Barril",
    category: "windows-and-doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    installationPhoto: true,
    coverImage: workImages.barril,
    featured: false,
    displayOrder: 18,
    doorsGalleryOrder: 9,
  },
  {
    id: "ulgueir",
    slug: "ulgueir",
    location: "Ulgueir",
    category: "windows-and-doors",
    material: "Alumínio",
    materialNeedsClientConfirmation: true,
    locationNeedsClientConfirmation: true,
    installationPhoto: true,
    coverImage: workImages.ulgueir,
    featured: false,
    displayOrder: 19,
    windowsGalleryOrder: 10,
  },
  {
    id: "pascoal-de-melo",
    slug: "pascoal-de-melo",
    location: "Pascoal de Melo",
    category: "windows-and-doors",
    material: "Alumínio e PVC",
    materialNeedsClientConfirmation: true,
    installationPhoto: true,
    coverImage: workImages.pascoalDeMelo,
    featured: false,
    displayOrder: 20,
    doorsGalleryOrder: 10,
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
    displayOrder: 21,
    doorsGalleryOrder: 6,
  },
  {
    id: "riba-fria",
    slug: "riba-fria",
    location: "Riba Fria",
    category: "windows",
    material: "PVC",
    materialNeedsClientConfirmation: true,
    installationPhoto: true,
    coverImage: workImages.ribaFria,
    featured: false,
    displayOrder: 22,
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
    displayOrder: 23,
    doorsGalleryOrder: 11,
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
    doorsGalleryOrder: 12,
  },
  {
    id: "unnamed-arched-door",
    material: "PVC",
    image: workImages.unnamedArchedDoor,
    doorsGalleryOrder: 13,
  },
];
