import Image from 'next/image';
import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { ArrowRight } from 'lucide-react';

interface FeaturedProductsProps {
  locale: Locale;
  dict: any;
}

export default function FeaturedProducts({ locale, dict }: FeaturedProductsProps) {
  const products = [
    {
      title: dict.products.windows.title,
      description: dict.products.windows.description,
      image: '/window.svg',
      href: `/${locale}/windows`,
      features: ['Triple glazing', 'Energy efficient', 'Custom sizes']
    },
    {
      title: dict.products.doors.title,
      description: dict.products.doors.description,
      image: '/window.svg', // You can add door icon later
      href: `/${locale}/doors`,
      features: ['Security locks', 'Weather resistant', 'Modern design']
    },
    {
      title: dict.products.blinds.title,
      description: dict.products.blinds.description,
      image: '/window.svg', // You can add blinds icon later
      href: `/${locale}/other-products`,
      features: ['Smart control', 'UV protection', 'Custom fit']
    },
    {
      title: dict.products.accessories.title,
      description: dict.products.accessories.description,
      image: '/window.svg', // You can add accessories icon later
      href: `/${locale}/other-products`,
      features: ['Premium finish', 'German quality', 'Long lasting']
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {dict.products.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Discover our comprehensive range of premium PVC solutions designed for modern living.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.title}
              className="relative group bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={300}
                  height={200}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={product.href}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  {dict.products.learn_more}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            {dict.nav.get_quote}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
