import { getDictionary } from "@/lib/get-dictionary";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import FeaturedProducts from "@/components/FeaturedProducts";
import QuickEstimate from "@/components/QuickEstimate";
import Testimonials from "@/components/Testimonials";
import RecentProjects from "@/components/RecentProjects";
import ContactCTA from "@/components/ContactCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <Hero locale={locale} dict={dict} />
      <Benefits locale={locale} dict={dict} />
      <FeaturedProducts locale={locale} dict={dict} />
      <QuickEstimate locale={locale} dict={dict} />
      <Testimonials locale={locale} dict={dict} />
      <RecentProjects locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
