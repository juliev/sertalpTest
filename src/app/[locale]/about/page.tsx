import { getDictionary } from "@/lib/get-dictionary";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {dict.about_page.hero.headline}
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              {dict.about_page.hero.subheading}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{dict.about_page.our_story.title}</h2>
              <p className="text-gray-600 mb-4">
                {dict.about_page.our_story.paragraph1}
              </p>
              <p className="text-gray-600">
                {dict.about_page.our_story.paragraph2}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{dict.about_page.mission.title}</h3>
                <p className="text-gray-600">
                  {dict.about_page.mission.description}
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{dict.about_page.values.title}</h3>
                <ul className="space-y-2">
                  {dict.about_page.values.list.map((value, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{dict.about_page.why_choose.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                  <div className="text-sm text-gray-500">{dict.about_page.why_choose.stats.years_experience}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                  <div className="text-sm text-gray-500">{dict.about_page.why_choose.stats.projects_completed}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-500">{dict.about_page.why_choose.stats.customer_satisfaction}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
