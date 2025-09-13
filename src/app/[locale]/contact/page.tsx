import { getDictionary } from "@/lib/get-dictionary";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {dict.contact.title}
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Ready to transform your home? Get in touch for your free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm locale={locale} dict={dict} />
          <ContactInfo locale={locale} dict={dict} />
        </div>
      </div>
    </div>
  );
}
