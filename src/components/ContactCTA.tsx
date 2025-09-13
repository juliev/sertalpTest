import Link from 'next/link';
import { type Locale } from '@/lib/i18n';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  locale: Locale;
  dict: any;
}

export default function ContactCTA({ locale, dict }: ContactCTAProps) {
  return (
    <section className="py-16 bg-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {dict.contact.title}
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              {dict.contact.cta.ready_transform}
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-200 mr-4" />
                <div>
                  <p className="text-white font-medium">{dict.contact.cta.call_directly}</p>
                  <p className="text-blue-100">+351 123 456 789</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-200 mr-4" />
                <div>
                  <p className="text-white font-medium">{dict.contact.cta.email_us}</p>
                  <p className="text-blue-100">info@sertalp.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-200 mr-4" />
                <div>
                  <p className="text-white font-medium">{dict.contact.cta.visit_showroom}</p>
                  <p className="text-blue-100">Rua Exemplo, 123, Lisboa</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 lg:mt-0">
            <div className="space-y-4">
              <Link
                href={`/${locale}/contact`}
                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-200"
              >
                {dict.nav.get_quote}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                href={`/${locale}/projects`}
                className="w-full flex items-center justify-center px-8 py-4 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                {dict.contact.cta.view_projects}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <div className="text-center">
                <p className="text-blue-100 text-sm">
                  {dict.contact.cta.call_assistance}
                </p>
                <a
                  href="tel:+351123456789"
                  className="inline-flex items-center text-white font-semibold text-lg hover:text-blue-200 transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  +351 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-blue-500">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-center">
            <div>
              <div className="text-2xl font-bold text-white">Free</div>
              <div className="text-blue-100">{dict.contact.cta.free_consultation}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-blue-100">{dict.contact.cta.response_time}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">10 Year</div>
              <div className="text-blue-100">{dict.contact.cta.product_guarantee}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
