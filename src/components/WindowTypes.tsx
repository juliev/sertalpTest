'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import Image from 'next/image';

interface WindowTypesProps {
  locale: Locale;
  dict: any;
}

export default function WindowTypes({ locale, dict }: WindowTypesProps) {
  const [activeType, setActiveType] = useState(0);

  const windowTypes = [
    {
      title: dict.windows_page.types.tilt_turn.title,
      description: dict.windows_page.types.tilt_turn.description,
      image: '/window.svg',
      features: [
        'Dual opening mechanism',
        'Enhanced ventilation control',
        'Easy cleaning access',
        'Maximum security when tilted'
      ],
      specs: {
        'U-Value': '1.1 W/m²K',
        'Sound Insulation': 'Up to 32 dB',
        'Air Permeability': 'Class 4',
        'Water Tightness': 'Class E1050'
      }
    },
    {
      title: dict.windows_page.types.casement.title,
      description: dict.windows_page.types.casement.description,
      image: '/window.svg',
      features: [
        'Side or top hinged opening',
        'Maximum ventilation area',
        'Clean aesthetic lines',
        'Excellent weatherproofing'
      ],
      specs: {
        'U-Value': '1.0 W/m²K',
        'Sound Insulation': 'Up to 30 dB',
        'Air Permeability': 'Class 4',
        'Water Tightness': 'Class E900'
      }
    },
    {
      title: dict.windows_page.types.pivot.title,
      description: dict.windows_page.types.pivot.description,
      image: '/window.svg',
      features: [
        'Central axis rotation',
        'Space-saving design',
        'Modern contemporary look',
        'Easy maintenance access'
      ],
      specs: {
        'U-Value': '1.2 W/m²K',
        'Sound Insulation': 'Up to 28 dB',
        'Air Permeability': 'Class 3',
        'Water Tightness': 'Class E750'
      }
    },
    {
      title: dict.windows_page.types.sliding.title,
      description: dict.windows_page.types.sliding.description,
      image: '/window.svg',
      features: [
        'Horizontal sliding operation',
        'Space-efficient design',
        'Large glass areas',
        'Panoramic views'
      ],
      specs: {
        'U-Value': '1.3 W/m²K',
        'Sound Insulation': 'Up to 26 dB',
        'Air Permeability': 'Class 3',
        'Water Tightness': 'Class E600'
      }
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Window Types & Styles
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose from our comprehensive range of window opening mechanisms.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8">
          <div className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm">
            {windowTypes.map((type, index) => (
              <button
                key={type.title}
                onClick={() => setActiveType(index)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeType === index
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                {type.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active Window Type Content */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {windowTypes[activeType].title}
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                {windowTypes[activeType].description}
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                <ul className="space-y-2">
                  {windowTypes[activeType].features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Specifications:</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(windowTypes[activeType].specs).map(([key, value]) => (
                    <div key={key} className="border border-gray-200 rounded-lg p-3">
                      <div className="text-sm text-gray-500">{key}</div>
                      <div className="font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <Image
                src={windowTypes[activeType].image}
                alt={windowTypes[activeType].title}
                width={500}
                height={400}
                className="rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
