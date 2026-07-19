import { siteImages } from "@/content/images";

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

export const projects: readonly Project[] = [
  {
    id: "pvc-windows",
    city: "Sintra",
    mainImage: { src: siteImages.projects.pvcWindows },
  },
  {
    id: "aluminium-windows",
    city: "Cascais",
    mainImage: { src: siteImages.projects.aluminiumWindows },
  },
  {
    id: "entrance-door",
    city: "Lisboa",
    mainImage: { src: siteImages.projects.entranceDoor },
  },
  {
    id: "balcony-doors",
    city: "Oeiras",
    mainImage: { src: siteImages.projects.balconyDoors },
  },
  {
    id: "sliding-system",
    city: "Setúbal",
    mainImage: { src: siteImages.projects.slidingSystem },
  },
  {
    id: "custom-window",
    city: "Leiria",
    mainImage: { src: siteImages.projects.customWindow },
  },
];
