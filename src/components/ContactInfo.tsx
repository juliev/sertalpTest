import { type Locale } from '@/lib/i18n';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

interface ContactInfoProps {
  locale: Locale;
  dict: any;
}

export default function ContactInfo({ locale, dict }: ContactInfoProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Phone</h3>
              <p className="text-gray-600">+351 123 456 789</p>
              <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM, Sat 9AM-4PM</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">info@sertalp.com</p>
              <p className="text-sm text-gray-500">We respond within 24 hours</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{dict.contact.address}</h3>
              <p className="text-gray-600">
                Rua Exemplo, 123<br />
                1000-000 Lisboa<br />
                Portugal
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <Clock className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">{dict.contact.hours}</h3>
              <div className="text-gray-600 space-y-1">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">Interactive Map</p>
          <p className="text-sm text-gray-400">Location: Lisboa, Portugal</p>
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Why Contact Us?</h3>
        <ul className="space-y-2 text-sm text-blue-800">
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
            Free consultation and quote
          </li>
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
            Professional site visit and measurements
          </li>
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
            Custom design recommendations
          </li>
          <li className="flex items-center">
            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
            10-year product guarantee
          </li>
        </ul>
      </div>
    </div>
  );
}
