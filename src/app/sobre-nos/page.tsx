import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Globe2, Ruler, Wrench } from "lucide-react";
import { ContactCta, PageHero, SectionHeading } from "@/components/shared";
import { workImages } from "@/content/images";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.about.seo,
  "/sobre-nos/",
);

const capabilityIcons = [Factory, Ruler, Wrench, Globe2];

export default function AboutPage() {
  const copy = dictionary.about;

  return (
    <>
      <PageHero {...copy.hero} image={workImages.lisboaFacade} priority />

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading title={copy.story.title} />
            <div className="mt-6 space-y-4 text-lg leading-8 text-gray-600">
              {copy.story.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src={workImages.casalGlazing.src}
              alt={dictionary.projects.items["casal-do-paul"].alts[0]}
              width={workImages.casalGlazing.width}
              height={workImages.casalGlazing.height}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover"
              style={{
                objectPosition: workImages.casalGlazing.objectPosition,
              }}
            />
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={copy.capabilities.title} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {copy.capabilities.items.map((item, index) => {
              const Icon = capabilityIcons[index];
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
                >
                  <Icon aria-hidden="true" className="size-7 text-blue-700" />
                  <h2 className="mt-5 text-xl font-bold">{item.title}</h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-blue-900 p-8 text-white sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">
              {copy.markets.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              {copy.markets.title}
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-blue-100">
              {copy.markets.text}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={copy.certifications.title} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {copy.certifications.items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm"
              >
                <h2 className="text-xl font-bold text-gray-950">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-gray-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCta
        title={copy.cta.title}
        text={copy.cta.text}
        primary={copy.cta.primary}
        secondary={copy.cta.secondary}
      />
    </>
  );
}
