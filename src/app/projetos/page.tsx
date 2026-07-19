import type { Metadata } from "next";
import { ProjectGallery } from "@/components/project-gallery";
import { SectionHeading } from "@/components/shared";
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
      <section className="bg-blue-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            {copy.hero.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            {copy.hero.description}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={copy.gallery.title}
            intro={copy.gallery.text}
          />
          <div className="mt-10">
            <ProjectGallery
              projects={getDisplayProjects(copy.items)}
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
