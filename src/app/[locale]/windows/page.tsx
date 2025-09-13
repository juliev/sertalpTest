import { getDictionary } from "@/lib/get-dictionary";
import { isValidLocale, type Locale, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import WindowsHero from "@/components/WindowsHero";
import WindowTypes from "@/components/WindowTypes";
import WindowBenefits from "@/components/WindowBenefits";
import TechnicalSystems from "@/components/TechnicalSystems";
import CustomizationOptions from "@/components/CustomizationOptions";
import ContactCTA from "@/components/ContactCTA";

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export default async function WindowsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return (
    <>
      <WindowsHero locale={locale} dict={dict} />
      <WindowBenefits locale={locale} dict={dict} />
      <WindowTypes locale={locale} dict={dict} />
      <TechnicalSystems locale={locale} dict={dict} />
      <CustomizationOptions locale={locale} dict={dict} />
      <ContactCTA locale={locale} dict={dict} />
    </>
  );
}
