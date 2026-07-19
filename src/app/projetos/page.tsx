import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { PageHero, SectionHeading } from "@/components/shared";
import { workImages } from "@/content/images";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import { getDisplayProjects } from "@/lib/project-display";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.projects.seo,
  "/projetos/",
);

export default function ProjectsPage() {
  const copy = dictionary.projects;
  const common = dictionary.global.common;

  return (
    <>
      <PageHero {...copy.hero} image={workImages.bernardimRibeiro} priority />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={copy.gallery.title}
            intro={copy.gallery.text}
          />
          <div className="mt-10">
            <ProjectGallery
              projects={getDisplayProjects(copy)}
              labels={{
                viewImage: common.viewImage,
                close: common.close,
                previousImage: common.previousImage,
                nextImage: common.nextImage,
                imageOf: common.imageOf,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
