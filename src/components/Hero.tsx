'use client';

import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Locale } from '@/lib/i18n';

interface HeroProps {
    locale: Locale;
    dict: any;
}

export default function Hero({locale, dict}: HeroProps) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: '/window_hero.jpg', // Using existing SVG for now
            alt: 'Premium PVC Windows Installation',
        },
        {
            image: '/window.svg', // You can add more hero images later
            alt: 'Modern PVC Doors',
        },
    ];

    return (
        <section className='bg-[url(/window_hero.jpg)] bg-no-repeat bg-cover bg-center relative overflow-hidden'>
            <div className='max-w-7xl mx-auto'>
                <div className='relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32'>
                    <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
                        <div className='sm:text-center lg:text-left'>
                            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
                                <span className='block xl:inline'>
                                    {dict.hero.headline
                                        .split(' ')
                                        .slice(0, -6)
                                        .join(' ')}
                                </span>
                                <span className='block text-blue-600 xl:inline'>
                                    {dict.hero.headline
                                        .split(' ')
                                        .slice(-6)
                                        .join(' ')}
                                </span>
                            </h1>
                            <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
                                {dict.hero.subheading}
                            </p>
                            <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
                                <div className='rounded-md shadow'>
                                    <Link
                                        href={`/${locale}/contact`}
                                        className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200 md:py-4 md:text-lg md:px-10'
                                    >
                                        {dict.hero.primary_cta}
                                        <ArrowRight className='ml-2 h-5 w-5' />
                                    </Link>
                                </div>
                                <div className='mt-3 sm:mt-0 sm:ml-3'>
                                    <button className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors duration-200 md:py-4 md:text-lg md:px-10'>
                                        <Play className='mr-2 h-5 w-5' />
                                        {dict.hero.secondary_cta}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Hero Image */}

            {/* Background decoration */}
            <div className='absolute top-0 right-0 hidden lg:block'>
                <svg
                    className='absolute top-0 right-0 mt-8 mr-8 text-blue-100'
                    width='404'
                    height='384'
                    fill='currentColor'
                    viewBox='0 0 404 384'
                >
                    <defs>
                        <pattern
                            id='b1e6e422-73f8-40a6-b5d9-c8586e37e0e7'
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            patternUnits='userSpaceOnUse'
                        >
                            <rect
                                x={0}
                                y={0}
                                width={4}
                                height={4}
                                fill='currentColor'
                            />
                        </pattern>
                    </defs>
                    <rect
                        width={404}
                        height={384}
                        fill='url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)'
                    />
                </svg>
            </div>
        </section>
    );
}
