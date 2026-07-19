import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Factory,
  Hammer,
  Ruler,
  Search,
  Truck,
  Wrench,
} from "lucide-react";
import { ProjectGallery } from "@/components/project-gallery";
import { ContactCta, SectionHeading } from "@/components/shared";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";
import { getDisplayProjects } from "@/lib/project-display";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(dictionary.home.seo, "/");

const benefitIcons = [Factory, Ruler, Wrench];
const processIcons = [Search, ClipboardCheck, Hammer, Truck];

export default function HomePage() {
  const copy = dictionary.home;
  const common = dictionary.global.common;
  const projectItems = getDisplayProjects(dictionary.projects.items);

  return (
    <>
      <section className="overflow-hidden bg-blue-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
              {copy.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {copy.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contactos/"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {copy.hero.primaryCta}
                <ArrowRight aria-hidden="true" className="size-5" />
              </Link>
              <Link
                href="/janelas/"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-blue-200 bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {copy.hero.secondaryCta}
              </Link>
            </div>
            <p className="mt-7 border-l-4 border-blue-600 pl-4 font-semibold text-blue-950">
              {copy.hero.trustLine}
            </p>
          </div>
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/window_hero.jpg"
              alt={copy.hero.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={copy.benefits.title}
            intro={copy.benefits.intro}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {copy.benefits.items.map((item, index) => {
              const Icon = benefitIcons[index];
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={copy.products.title}
            intro={copy.products.intro}
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {[
              {
                href: "/janelas/",
                image: "/images/projects/project-pvc-windows.webp",
                item: copy.products.windows,
              },
              {
                href: "/portas/",
                image: "/images/projects/project-entrance-door.webp",
                item: copy.products.doors,
              },
            ].map(({ href, image, item }) => (
              <article
                key={href}
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
                  <h2 className="text-2xl font-bold text-gray-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 leading-7 text-gray-600">
                    {item.description}
                  </p>
                  <Link
                    href={href}
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    {item.link}
                    <ArrowRight aria-hidden="true" className="size-5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={copy.process.title}
            intro={copy.process.intro}
          />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {copy.process.steps.map((step, index) => {
              const Icon = processIcons[index];
              return (
                <li
                  key={step.title}
                  className="rounded-2xl border border-gray-200 p-6"
                >
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden="true" className="size-7 text-blue-700" />
                    <span className="text-3xl font-black text-blue-100">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="mt-5 text-lg font-bold text-gray-950">
                    {step.title}
                  </h2>
                  <p className="mt-2 leading-7 text-gray-600">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              title={copy.projects.title}
              intro={copy.projects.intro}
            />
            <Link
              href="/projetos/"
              className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-lg font-bold text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {copy.projects.link}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
          <div className="mt-10">
            <ProjectGallery
              projects={projectItems}
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

      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl">
            <Image
              src="/images/projects/project-custom-window.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={copy.experience.eyebrow}
              title={copy.experience.title}
              intro={copy.experience.text}
            />
            <Link
              href="/sobre-nos/"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg font-bold text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {copy.experience.link}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-100 bg-white p-7 sm:p-10">
            <h2 className="text-2xl font-bold text-gray-950">
              {copy.warranty.title}
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              {copy.warranty.text}
            </p>
            <div className="mt-5 flex flex-wrap gap-5">
              <Link
                className="font-bold text-blue-700"
                href="/janelas/#garantias"
              >
                {copy.warranty.windowsLink}
              </Link>
              <Link
                className="font-bold text-blue-700"
                href="/portas/#garantias"
              >
                {copy.warranty.doorsLink}
              </Link>
            </div>
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
