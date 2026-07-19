import type { Metadata } from "next";
import Image from "next/image";
import { Check, PanelsTopLeft, Ruler, Wrench } from "lucide-react";
import {
  ContactCta,
  PageHero,
  SectionHeading,
  WarrantySection,
} from "@/components/shared";
import { siteImages } from "@/content/images";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.windows.seo,
  "/janelas/",
);

const benefitIcons = [Ruler, PanelsTopLeft, Wrench];

export default function WindowsPage() {
  const copy = dictionary.windows;

  return (
    <>
      <PageHero
        {...copy.hero}
        image={siteImages.projects.aluminiumWindows}
        priority
      />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {[
            {
              content: copy.pvc,
              image: siteImages.projects.pvcWindows,
            },
            {
              content: copy.aluminium,
              image: siteImages.projects.aluminiumWindows,
            },
          ].map(({ content, image }) => (
            <article
              key={content.title}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
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
                <h2 className="text-3xl font-bold text-gray-950">
                  {content.title}
                </h2>
                <p className="mt-4 leading-7 text-gray-600">{content.text}</p>
                <ul className="mt-6 space-y-3">
                  {content.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        aria-hidden="true"
                        className="mt-1 size-5 shrink-0 text-blue-700"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue-900 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
            {copy.assessment.eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            {copy.assessment.title}
          </h2>
          <div className="mt-6 grid max-w-5xl gap-5 text-lg leading-8 text-blue-100 lg:grid-cols-2">
            <p>{copy.assessment.text}</p>
            <p>{copy.assessment.supporting}</p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={copy.benefits.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {copy.benefits.items.map((item, index) => {
              const Icon = benefitIcons[index];
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 p-7 shadow-sm"
                >
                  <Icon aria-hidden="true" className="size-7 text-blue-700" />
                  <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <WarrantySection copy={dictionary.shared.warranties} />
      <ContactCta
        title={copy.cta.title}
        text={copy.cta.text}
        primary={copy.cta.primary}
        secondary={copy.cta.secondary}
        secondaryHref="/contactos/"
      />
    </>
  );
}
