import { getDictionary } from "@/lib/get-dictionary";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import RecentProjects from "@/components/RecentProjects";
import ContactCTA from "@/components/ContactCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {dict.projects_page.hero.headline}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {dict.projects_page.hero.subheading}
            </p>
          </div>
        </div>
      </section>
      <RecentProjects locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
