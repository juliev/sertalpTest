import type { Metadata } from "next";
import { Facebook } from "lucide-react";
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
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">{copy.information.title}</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            {copy.information.intro}
          </p>

          <div
            className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16"
            data-testid="contact-layout"
          >
            <section aria-labelledby="contact-details-heading">
              <h3
                id="contact-details-heading"
                className="text-xl font-bold text-gray-950"
              >
                {copy.information.heading}
              </h3>

              <dl
                className="mt-5 divide-y divide-gray-200"
                data-testid="contact-list"
              >
                <div className="py-4 first:pt-0">
                  <dt className="text-sm font-semibold text-gray-600">
                    {common.phone}
                  </dt>
                  <dd className="mt-1">
                    <a
                      className="inline-flex min-h-11 items-center font-semibold text-blue-700 underline"
                      href={company.telephoneHref}
                    >
                      {company.telephone}
                    </a>
                  </dd>
                </div>

                <div className="py-4">
                  <dt className="text-sm font-semibold text-gray-600">
                    {copy.information.mobileLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      className="inline-flex min-h-11 items-center font-semibold text-blue-700 underline"
                      href={company.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.mobile}
                    </a>
                  </dd>
                </div>

                <div className="py-4">
                  <dt className="text-sm font-semibold text-gray-600">
                    {common.email}
                  </dt>
                  <dd className="mt-1 min-w-0">
                    <a
                      className="inline-flex min-h-11 max-w-full items-center break-words font-semibold text-blue-700 underline"
                      href={`mailto:${company.primaryEmail}`}
                    >
                      {company.primaryEmail}
                    </a>
                  </dd>
                </div>

                <div className="py-4">
                  <dt className="text-sm font-semibold text-gray-600">
                    {common.legacyEmail}
                  </dt>
                  <dd className="mt-1 min-w-0">
                    <a
                      className="inline-flex min-h-11 max-w-full items-center break-words font-semibold text-blue-700 underline"
                      href={`mailto:${company.legacyEmail}`}
                    >
                      {company.legacyEmail}
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8">
                <p className="text-sm font-semibold text-gray-600">
                  {copy.information.socialTitle}
                </p>
                <a
                  className="mt-2 inline-flex size-11 items-center justify-center text-blue-700 transition hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  href={company.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={copy.information.facebookAriaLabel}
                >
                  <Facebook aria-hidden="true" className="size-6" />
                </a>
              </div>
            </section>

            <section
              aria-labelledby="location-heading"
              className="lg:border-l lg:border-gray-200 lg:pl-16"
            >
              <h3
                id="location-heading"
                className="text-xl font-bold text-gray-950"
              >
                {copy.map.title}
              </h3>
              <p className="mt-5 text-sm font-semibold text-gray-600">
                {copy.map.factoryLabel}
              </p>
              <address className="mt-2 max-w-lg not-italic leading-7 text-gray-700">
                {company.factoryAddress}
              </address>

              <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200">
                <iframe
                  src={company.mapsEmbedUrl}
                  title={copy.map.iframeTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-64 w-full border-0 sm:h-80"
                />
              </div>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex min-h-11 items-center font-semibold text-blue-700 underline hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {copy.map.link}
              </a>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
