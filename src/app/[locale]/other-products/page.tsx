import { getDictionary } from "@/lib/get-dictionary";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import ContactCTA from "@/components/ContactCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function OtherProductsPage({ params }: { params: Promise<{ locale: string }> }) {
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
              {dict.products.blinds.title} & Accessories
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Complete your home transformation with our premium blinds, shutters, and accessories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">External Blinds</h3>
              <p className="text-gray-600 mb-4">Automated external blinds for maximum privacy and sun protection.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  Weather resistant
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  Smart home integration
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  UV protection
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Internal Blinds</h3>
              <p className="text-gray-600 mb-4">Integrated blinds within double glazing for easy maintenance.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  No cleaning required
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  Perfect light control
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  Multiple color options
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Premium Hardware</h3>
              <p className="text-gray-600 mb-4">German-engineered handles and accessories for lasting performance.</p>
              <ul className="space-y-2">
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  Premium finishes
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  Corrosion resistant
                </li>
                <li className="flex items-center text-sm">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                  10-year warranty
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
