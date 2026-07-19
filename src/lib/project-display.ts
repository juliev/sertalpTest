import {
  productGalleryItems,
  projects,
  type ProductGalleryItemId,
  type Project,
} from "@/content/projects";
import type { Dictionary } from "@/i18n/types";
import type { DisplayProject } from "@/components/project-gallery";

type ProjectCopy = Dictionary["projects"];

const toDisplayProject = (
  project: Project,
  copy: ProjectCopy,
): DisplayProject => {
  const translated = copy.items[project.id];
  const images = [project.coverImage, ...(project.additionalImages ?? [])].map(
    (image, index) => ({
      ...image,
      alt: translated.alts[index],
    }),
  );

  return {
    id: project.id,
    location: project.location,
    material: copy.materials[project.material],
    title: translated.title,
    description: translated.description,
    images,
  };
};

export const getDisplayProjects = (copy: ProjectCopy): DisplayProject[] =>
  [...projects]
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map((project) => toDisplayProject(project, copy));

export const getHomeDisplayProjects = (
  dictionary: Dictionary,
): DisplayProject[] =>
  projects
    .filter((project) => project.homePreviewOrder !== undefined)
    .sort((a, b) => a.homePreviewOrder! - b.homePreviewOrder!)
    .map((project) => {
      const display = toDisplayProject(project, dictionary.projects);
      const homeCopy =
        dictionary.home.projects.items[
          project.id as keyof typeof dictionary.home.projects.items
        ];
      return {
        ...display,
        title: homeCopy.title,
        description: homeCopy.description,
        images: [{ ...display.images[0], alt: homeCopy.alt }],
      };
    });

export const getWindowsDisplayProjects = (
  copy: ProjectCopy,
): DisplayProject[] =>
  projects
    .filter((project) => project.windowsGalleryOrder !== undefined)
    .sort((a, b) => a.windowsGalleryOrder! - b.windowsGalleryOrder!)
    .map((project) => toDisplayProject(project, copy));

export const getDoorsDisplayProjects = (
  copy: ProjectCopy,
): DisplayProject[] => {
  const locationProjects = projects
    .filter((project) => project.doorsGalleryOrder !== undefined)
    .map((project) => ({
      order: project.doorsGalleryOrder!,
      item: toDisplayProject(project, copy),
    }));
  const examples = productGalleryItems.map((example) => {
    const translated = copy.productExamples[example.id as ProductGalleryItemId];

    return {
      order: example.doorsGalleryOrder,
      item: {
        id: example.id,
        material: copy.materials[example.material],
        title: translated.title,
        description: "",
        images: [{ ...example.image, alt: translated.alt }],
      } satisfies DisplayProject,
    };
  });

  return [...locationProjects, ...examples]
    .sort((a, b) => a.order - b.order)
    .map(({ item }) => item);
};
