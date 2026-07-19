import type { Metadata } from "next";
import {
  ExternalLink,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { PageHero } from "@/components/shared";
import { company } from "@/content/company";
import { workImages } from "@/content/images";
import { getDictionary } from "@/i18n/get-dictionary";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary();

export const metadata: Metadata = createPageMetadata(
  dictionary.contacts.seo,
  "/contactos/",
);

export default function ContactsPage() {
  const copy = dictionary.contacts;
  const common = dictionary.global.common;

  return (
    <>
      <PageHero {...copy.hero} image={workImages.duqueDoCadaval} priority />

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">{copy.information.title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {copy.information.intro}
          </p>

          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex items-center gap-3 font-bold">
                <Phone aria-hidden="true" className="size-5 text-blue-700" />
                {common.phone}
              </dt>
              <dd className="mt-3">
                <a
                  className="font-semibold text-blue-700 underline"
                  href={company.telephoneHref}
                >
                  {company.telephone}
                </a>
              </dd>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex items-center gap-3 font-bold">
                <MessageCircle
                  aria-hidden="true"
                  className="size-5 text-blue-700"
                />
                {common.mobileWhatsapp}
              </dt>
              <dd className="mt-3">
                <a
                  className="font-semibold text-blue-700 underline"
                  href={company.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {company.mobile}
                </a>
              </dd>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex items-center gap-3 font-bold">
                <Mail aria-hidden="true" className="size-5 text-blue-700" />
                {common.email}
              </dt>
              <dd className="mt-3 break-all">
                <a
                  className="font-semibold text-blue-700 underline"
                  href={`mailto:${company.primaryEmail}`}
                >
                  {company.primaryEmail}
                </a>
              </dd>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6">
              <dt className="flex items-center gap-3 font-bold">
                <MapPin aria-hidden="true" className="size-5 text-blue-700" />
                {common.factoryAddress}
              </dt>
              <dd className="mt-3 text-gray-600">{company.factoryAddress}</dd>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 sm:col-span-2">
              <dt className="font-bold">{common.legacyEmail}</dt>
              <dd className="mt-2">
                <a
                  className="font-semibold text-blue-700 underline"
                  href={`mailto:${company.legacyEmail}`}
                >
                  {company.legacyEmail}
                </a>
              </dd>
            </div>

            <div className="rounded-2xl border border-gray-200 p-6 sm:col-span-2">
              <dt className="flex items-center gap-3 font-bold">
                <Facebook aria-hidden="true" className="size-5 text-blue-700" />
                {common.facebook}
              </dt>
              <dd className="mt-3">
                <a
                  className="inline-flex items-center gap-2 font-semibold text-blue-700 underline"
                  href={company.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {common.facebook}
                  <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">{copy.map.title}</h2>
          <p className="mt-4 max-w-3xl text-lg text-gray-600">
            {copy.map.text}
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <iframe
              src={company.mapsEmbedUrl}
              title={copy.map.iframeTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[28rem] w-full border-0"
            />
          </div>
          <a
            href={company.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {copy.map.link}
            <ExternalLink aria-hidden="true" className="size-5" />
          </a>
        </div>
      </section>
    </>
  );
}
