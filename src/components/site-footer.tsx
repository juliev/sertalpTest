import Link from "next/link";
import {
  Clock,
  Facebook,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { company } from "@/content/company";
import type { Dictionary } from "@/i18n/types";

type Props = {
  copy: Dictionary["global"];
};

export function SiteFooter({ copy }: Props) {
  const year = new Date().getFullYear();
  const navigation = [
    { href: "/", label: copy.navigation.home },
    { href: "/janelas/", label: copy.navigation.windows },
    { href: "/portas/", label: copy.navigation.doors },
    { href: "/projetos/", label: copy.navigation.projects },
    { href: "/sobre-nos/", label: copy.navigation.about },
    { href: "/contactos/", label: copy.navigation.contacts },
  ];

  return (
    <footer className="bg-blue-950 text-blue-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <p className="text-2xl font-black text-white">
            {company.commercialName}
          </p>
          <p className="mt-4 text-sm leading-6 text-blue-100">
            {copy.footer.summary}
          </p>
        </div>

        <div>
          <h2 className="font-bold text-white">{copy.footer.navigation}</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-white" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">{copy.footer.contacts}</h2>
          <ul className="mt-4 space-y-3 text-sm text-blue-100">
            <li>
              <a
                className="flex items-start gap-3 hover:text-white"
                href={company.telephoneHref}
              >
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {company.telephone}
              </a>
            </li>
            <li>
              <a
                className="flex items-start gap-3 hover:text-white"
                href={company.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle
                  aria-hidden="true"
                  className="mt-0.5 size-4 shrink-0"
                />
                {company.mobile}
              </a>
            </li>
            <li>
              <a
                className="flex items-start gap-3 hover:text-white"
                href={`mailto:${company.primaryEmail}`}
              >
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {company.primaryEmail}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {company.factoryAddress}
            </li>
            <li className="flex items-start gap-3">
              <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
              {copy.common.mondayFriday}: {company.hours.mondayFriday}
              <br />
              {copy.common.saturday}: {company.hours.saturday}
            </li>
            <li>
              <a
                className="flex items-center gap-3 hover:text-white"
                href={company.facebookUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Facebook aria-hidden="true" className="size-4 shrink-0" />
                {copy.common.facebook}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-bold text-white">{copy.footer.legal}</h2>
          <ul className="mt-4 space-y-2 text-sm text-blue-100">
            <li>
              <Link
                className="hover:text-white"
                href="/politica-de-privacidade/"
              >
                {copy.footer.privacy}
              </Link>
            </li>
            <li>
              <Link className="hover:text-white" href="/politica-de-cookies/">
                {copy.footer.cookies}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800">
        <div className="mx-auto max-w-7xl px-4 py-8 text-xs leading-6 text-blue-200 sm:px-6 lg:px-8">
          <p>{company.legalFooter}</p>
          <p className="mt-4">
            {copy.footer.copyright.replace("{year}", String(year))}
          </p>
        </div>
      </div>
    </footer>
  );
}
