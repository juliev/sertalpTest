import { projects } from "@/content/projects";
import type { Dictionary } from "@/i18n/types";
import type { DisplayProject } from "@/components/project-gallery";

export const getDisplayProjects = (
  copy: Dictionary["projects"]["items"],
): DisplayProject[] =>
  projects.map((project) => {
    const translated = copy[project.id];
    const images = [project.mainImage, ...(project.additionalImages ?? [])].map(
      (image) => ({ src: image.src, alt: translated.alt }),
    );

    return {
      id: project.id,
      city: project.city,
      title: translated.title,
      description: translated.description,
      images,
    };
  });
