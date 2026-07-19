import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import { company } from "@/content/company";
import { warranties } from "@/content/warranties";
import type { Dictionary } from "@/i18n/types";

export function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-lg leading-8 text-gray-600">{intro}</p>
      ) : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  points,
  cta,
  image,
  imageAlt,
  imagePosition = "center",
  priority = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  points?: readonly string[];
  cta?: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  priority?: boolean;
}) {
  return (
    <section className="overflow-hidden bg-blue-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            {eyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            {description}
          </p>
          {points ? (
            <ul className="mt-7 grid gap-3 sm:grid-cols-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm font-semibold text-gray-800"
                >
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    <Check aria-hidden="true" className="size-4" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
          {cta ? (
            <Link
              href="/contactos/"
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {cta}
              <ArrowRight aria-hidden="true" className="size-5" />
            </Link>
          ) : null}
        </div>
        <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            style={{ objectPosition: imagePosition }}
          />
        </div>
      </div>
    </section>
  );
}

export function ContactCta({
  title,
  text,
  primary,
  secondary,
  secondaryHref = company.whatsappUrl,
}: {
  title: string;
  text: string;
  primary: string;
  secondary: string;
  secondaryHref?: string;
}) {
  const secondaryIsExternal = secondaryHref.startsWith("http");

  return (
    <section className="bg-blue-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold text-white">{title}</h2>
          <p className="mt-3 text-lg text-blue-100">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contactos/"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-blue-800 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {primary}
          </Link>
          <a
            href={secondaryHref}
            target={secondaryIsExternal ? "_blank" : undefined}
            rel={secondaryIsExternal ? "noreferrer" : undefined}
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-400 px-6 py-3 font-bold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {secondaryIsExternal ? (
              <MessageCircle aria-hidden="true" className="size-5" />
            ) : null}
            {secondary}
          </a>
        </div>
      </div>
    </section>
  );
}

export function WarrantySection({
  copy,
}: {
  copy: Dictionary["shared"]["warranties"];
}) {
  return (
    <section id="garantias" className="bg-gray-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={copy.title} intro={copy.intro} />
        <dl className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {warranties.map((warranty) => (
            <div
              key={warranty.id}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <dt className="font-semibold text-gray-700">
                {copy.labels[warranty.id]}
              </dt>
              <dd className="mt-2 text-3xl font-black text-blue-700">
                {warranty.years} {copy.labels.years}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
