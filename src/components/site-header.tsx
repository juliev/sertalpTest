"use client";

import Link from "next/link";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/content/company";
import type { Dictionary } from "@/i18n/types";

type Props = {
  copy: Dictionary["global"];
};

export function SiteHeader({ copy }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = [
    { href: "/", label: copy.navigation.home },
    { href: "/janelas/", label: copy.navigation.windows },
    { href: "/portas/", label: copy.navigation.doors },
    { href: "/projetos/", label: copy.navigation.projects },
    { href: "/sobre-nos/", label: copy.navigation.about },
    { href: "/contactos/", label: copy.navigation.contacts },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="rounded text-2xl font-black tracking-tight text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          onClick={closeMenu}
        >
          {company.commercialName}
        </Link>

        <nav
          className="hidden items-center gap-5 lg:flex"
          aria-label={copy.common.navigationLabel}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded py-3 text-sm font-semibold text-gray-700 transition hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-blue-200 px-4 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            <MessageCircle aria-hidden="true" className="size-5" />
            {copy.navigation.whatsapp}
          </a>
          <Link
            href="/contactos/"
            className="inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            {copy.navigation.quote}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-xl border border-gray-200 text-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? copy.common.menuClose : copy.common.menuOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? (
            <X aria-hidden="true" className="size-6" />
          ) : (
            <Menu aria-hidden="true" className="size-6" />
          )}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={copy.common.navigationLabel}
        hidden={!isOpen}
        className="border-t border-gray-200 bg-white px-4 pb-6 pt-3 lg:hidden"
      >
        <div className="mx-auto flex max-w-7xl flex-col">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="rounded-lg px-3 py-3 font-semibold text-gray-800 hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <a
              href={company.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-blue-200 px-4 py-2 font-semibold text-blue-700 focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              <MessageCircle aria-hidden="true" className="size-5" />
              {copy.navigation.whatsapp}
            </a>
            <Link
              href="/contactos/"
              onClick={closeMenu}
              className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-4 py-2 font-semibold text-white focus-visible:outline-2 focus-visible:outline-blue-600"
            >
              {copy.navigation.quote}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
