import type { Metadata } from "next";
import Image from "next/image";
import {
  DoorOpen,
  GalleryVerticalEnd,
  Maximize2,
  PanelsTopLeft,
  Ruler,
  Rows3,
} from "lucide-react";
import {
  ContactCta,
  PageHero,
  SectionHeading,
  SupplierSection,
  WarrantySection,
} from "@/components/shared";
import { siteImages } from "@/content/images";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.doors.seo,
  "/portas/",
);

const solutionIcons = [
  DoorOpen,
  GalleryVerticalEnd,
  Rows3,
  PanelsTopLeft,
  Maximize2,
  Ruler,
];

export default function DoorsPage() {
  const copy = dictionary.doors;

  return (
    <>
      <PageHero
        {...copy.hero}
        image={siteImages.projects.entranceDoor}
        priority
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={copy.solutions.title}
            intro={copy.solutions.intro}
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {copy.solutions.items.map((item, index) => {
              const Icon = solutionIcons[index];
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h2 className="mt-5 text-xl font-bold text-gray-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {[
            {
              content: copy.materials.pvc,
              image: siteImages.projects.balconyDoors,
            },
            {
              content: copy.materials.aluminium,
              image: siteImages.projects.slidingSystem,
            },
          ].map(({ content, image }) => (
            <article
              key={content.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
            >
              <div className="relative aspect-[3/2]">
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-7">
                <h2 className="text-2xl font-bold">{content.title}</h2>
                <p className="mt-3 leading-7 text-gray-600">{content.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-900 p-8 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
              {copy.assessment.eyebrow}
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
              {copy.assessment.title}
            </h2>
            <div className="mt-6 grid gap-5 text-lg leading-8 text-blue-100 lg:grid-cols-2">
              <p>{copy.assessment.text}</p>
              <p>{copy.assessment.supporting}</p>
            </div>
          </div>
        </div>
      </section>

      <WarrantySection copy={dictionary.shared.warranties} />
      <SupplierSection copy={dictionary.shared.suppliers} />
      <ContactCta
        title={copy.cta.title}
        text={copy.cta.text}
        primary={copy.cta.primary}
        secondary={copy.cta.secondary}
      />
    </>
  );
}
