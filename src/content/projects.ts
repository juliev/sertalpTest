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
    mainImage: { src: "/images/projects/project-pvc-windows.webp" },
  },
  {
    id: "aluminium-windows",
    city: "Cascais",
    mainImage: { src: "/images/projects/project-aluminium-windows.webp" },
  },
  {
    id: "entrance-door",
    city: "Lisboa",
    mainImage: { src: "/images/projects/project-entrance-door.webp" },
  },
  {
    id: "balcony-doors",
    city: "Oeiras",
    mainImage: { src: "/images/projects/project-balcony-doors.webp" },
  },
  {
    id: "sliding-system",
    city: "Setúbal",
    mainImage: { src: "/images/projects/project-sliding-system.webp" },
  },
  {
    id: "custom-window",
    city: "Leiria",
    mainImage: { src: "/images/projects/project-custom-window.webp" },
  },
];
