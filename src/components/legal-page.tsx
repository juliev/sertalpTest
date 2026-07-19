import { company } from "@/content/company";

type LegalSection = {
  kind: string;
  title: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
  linkLabels: readonly string[];
};

const externalUrls = {
  cnpd: "https://www.cnpd.pt/",
  googlePrivacy: "https://policies.google.com/privacy?hl=pt_PT",
  mapsTerms: "https://www.google.com/intl/pt_pt/help/terms_maps/",
};

const splitParagraphsAt = (section: LegalSection) => {
  switch (section.kind) {
    case "data":
    case "maps":
      return 2;
    case "purposes":
    case "rights":
      return 1;
    default:
      return section.paragraphs.length;
  }
};

export function LegalPage({
  title,
  updated,
  intro,
  sections,
  contactLabel,
  websiteLabel,
}: {
  title: string;
  updated: string;
  intro?: string;
  sections: readonly LegalSection[];
  contactLabel?: string;
  websiteLabel?: string;
}) {
  return (
    <>
      <header className="bg-blue-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            {updated}
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-gray-950 sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              {intro}
            </p>
          ) : null}
        </div>
      </header>
      <article className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="space-y-10">
          {sections.map((section) => {
            const splitAt = splitParagraphsAt(section);
            const before = section.paragraphs.slice(0, splitAt);
            const after = section.paragraphs.slice(splitAt);
            const linksBeforeAfter = section.kind === "maps";

            const links =
              section.kind === "external" || section.kind === "maps" ? (
                <ul className="space-y-2">
                  <li>
                    {section.linkLabels[0]}:{" "}
                    <a
                      className="font-semibold text-blue-700 underline"
                      href={externalUrls.googlePrivacy}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {externalUrls.googlePrivacy}
                    </a>
                  </li>
                  <li>
                    {section.linkLabels[1]}:{" "}
                    <a
                      className="font-semibold text-blue-700 underline"
                      href={externalUrls.mapsTerms}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {externalUrls.mapsTerms}
                    </a>
                  </li>
                </ul>
              ) : null;

            return (
              <section key={section.kind}>
                <h2 className="text-2xl font-bold text-gray-950">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 leading-8 text-gray-700">
                  {before.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.kind === "controller" ? (
                    <address className="not-italic">
                      <strong className="text-gray-950">
                        {company.legalName}
                      </strong>
                      <br />
                      NIPC: {company.nipc}
                      <br />
                      {contactLabel}:{" "}
                      <a
                        className="font-semibold text-blue-700 underline"
                        href={`mailto:${company.primaryEmail}`}
                      >
                        {company.primaryEmail}
                      </a>
                    </address>
                  ) : null}

                  {section.bullets.length > 0 ? (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {linksBeforeAfter ? links : null}

                  {after.map((paragraph, index) =>
                    section.kind === "rights" && index === 0 ? (
                      <p key={paragraph}>
                        {paragraph}{" "}
                        <a
                          className="font-semibold text-blue-700 underline"
                          href={`mailto:${company.primaryEmail}`}
                        >
                          {company.primaryEmail}
                        </a>
                        .
                      </p>
                    ) : (
                      <p key={paragraph}>{paragraph}</p>
                    ),
                  )}

                  {section.kind === "complaint" ? (
                    <p>
                      <strong>{section.linkLabels[0]}</strong>
                      <br />
                      {websiteLabel}:{" "}
                      <a
                        className="font-semibold text-blue-700 underline"
                        href={externalUrls.cnpd}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {externalUrls.cnpd}
                      </a>
                    </p>
                  ) : null}

                  {!linksBeforeAfter ? links : null}

                  {section.kind === "contact" ? (
                    <p>
                      <a
                        className="font-semibold text-blue-700 underline"
                        href={`mailto:${company.primaryEmail}`}
                      >
                        {company.primaryEmail}
                      </a>
                    </p>
                  ) : null}
                </div>
              </section>
            );
          })}
        </div>
      </article>
    </>
  );
}
