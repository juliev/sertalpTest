'use client';

import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import { Locale, localeFlags, localeNames, locales } from '@/lib/i18n';

interface HeaderProps {
    locale: Locale;
    dict: any;
}

export default function Header({locale, dict}: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        {name: dict.nav.home, href: `/${locale}`},
        {name: dict.nav.windows, href: `/${locale}/windows`},
        {name: dict.nav.doors, href: `/${locale}/doors`},
        {name: dict.nav.other_products, href: `/${locale}/other-products`},
        {name: dict.nav.projects, href: `/${locale}/projects`},
        {name: dict.nav.about, href: `/${locale}/about`},
        {name: dict.nav.contact, href: `/${locale}/contact`},
    ];

    const switchLanguage = (newLocale: Locale) => {
        const pathWithoutLocale = pathname.replace(`/${locale}`, '');
        const newPath = `/${newLocale}${pathWithoutLocale}`;
        window.location.href = newPath;
    };

    return (
        <header className='bg-white shadow-sm sticky top-0 z-50'>
            <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Link
                            href={`/${locale}`}
                            className='text-2xl font-bold text-blue-600'
                        >
                            Sertalp
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        pathname === item.href
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Language Switcher & CTA */}
                    <div className='hidden md:flex items-center space-x-4'>
                        {/* Language Switcher */}
                        <div className='relative'>
                            <button
                                onClick={() =>
                                    setIsLanguageMenuOpen(!isLanguageMenuOpen)
                                }
                                className='flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer'
                            >
                                <span>{localeFlags[locale]}</span>
                                <span>{localeNames[locale]}</span>
                                <ChevronDown className='h-4 w-4' />
                            </button>

                            {isLanguageMenuOpen && (
                                <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
                                    {locales.map((loc) => (
                                        <button
                                            key={loc}
                                            onClick={() => {
                                                switchLanguage(loc);
                                                setIsLanguageMenuOpen(false);
                                            }}
                                            className={`cursor-pointer block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                                                locale === loc
                                                    ? 'bg-blue-50 text-blue-600'
                                                    : 'text-gray-700'
                                            }`}
                                        >
                                            <span className='mr-2'>
                                                {localeFlags[loc]}
                                            </span>
                                            {localeNames[loc]}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        <Link
                            href={`/${locale}/contact`}
                            className='bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors'
                        >
                            {dict.nav.get_quote}
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className='md:hidden'>
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                        >
                            {isMobileMenuOpen ? (
                                <X className='h-6 w-6' />
                            ) : (
                                <Menu className='h-6 w-6' />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className='md:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                        pathname === item.href
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            {/* Mobile Language Switcher */}
                            <div className='mt-4 pt-4 border-t border-gray-200'>
                                <div className='px-3 py-2 text-sm font-medium text-gray-500'>
                                    Language:
                                </div>
                                {locales.map((loc) => (
                                    <button
                                        key={loc}
                                        onClick={() => {
                                            switchLanguage(loc);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                            locale === loc
                                                ? 'bg-blue-100 text-blue-700'
                                                : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'
                                        }`}
                                    >
                                        <span className='mr-2'>
                                            {localeFlags[loc]}
                                        </span>
                                        {localeNames[loc]}
                                    </button>
                                ))}
                            </div>

                            {/* Mobile CTA */}
                            <div className='mt-4 pt-4 border-t border-gray-200'>
                                <Link
                                    href={`/${locale}/contact`}
                                    className='block w-full bg-blue-600 text-white px-3 py-2 rounded-md text-center text-base font-medium hover:bg-blue-700 transition-colors'
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {dict.nav.get_quote}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
