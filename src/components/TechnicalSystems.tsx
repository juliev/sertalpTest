'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';

interface TechnicalSystemsProps {
  locale: Locale;
  dict: any;
}

export default function TechnicalSystems({ locale, dict }: TechnicalSystemsProps) {
  const [expandedSystem, setExpandedSystem] = useState<number | null>(null);

  const systems = [
    {
      name: 'A 70 Casement',
      description: 'Premium casement system with superior thermal performance',
      image: '/window.svg',
      keySpecs: {
        'Profile Depth': '70mm',
        'Chambers': '5-chamber system',
        'Reinforcement': 'Steel reinforced',
        'U-Value': 'From 1.0 W/m²K'
      },
      features: [
        'Outstanding thermal insulation',
        'Multi-point locking system',
        'Wide range of opening options',
        'Excellent weather resistance'
      ],
      energyRating: 'A++',
      applications: ['Residential', 'Commercial', 'Renovation']
    },
    {
      name: 'C 70 Sliding',
      description: 'Innovative sliding system for modern architecture',
      image: '/window.svg',
      keySpecs: {
        'Profile Depth': '70mm',
        'Chambers': '4-chamber system',
        'Max Sash Weight': '150kg',
        'U-Value': 'From 1.2 W/m²K'
      },
      features: [
        'Smooth sliding operation',
        'Large glass surfaces',
        'Space-saving design',
        'Integrated drainage system'
      ],
      energyRating: 'A+',
      applications: ['Modern homes', 'Balconies', 'Terraces']
    },
    {
      name: 'A 84 Concealed Leaf',
      description: 'Premium system with hidden sash for clean aesthetics',
      image: '/window.svg',
      keySpecs: {
        'Profile Depth': '84mm',
        'Chambers': '6-chamber system',
        'Glass Thickness': 'Up to 48mm',
        'U-Value': 'From 0.8 W/m²K'
      },
      features: [
        'Concealed leaf design',
        'Maximum thermal efficiency',
        'Premium aesthetics',
        'Enhanced security features'
      ],
      energyRating: 'A+++',
      applications: ['Luxury homes', 'Premium projects', 'Energy-efficient buildings']
    },
    {
      name: 'E 170 Lift-and-Slide',
      description: 'Heavy-duty system for large openings',
      image: '/window.svg',
      keySpecs: {
        'Profile Depth': '170mm',
        'Max Sash Weight': '400kg',
        'Max Height': '3000mm',
        'U-Value': 'From 1.1 W/m²K'
      },
      features: [
        'Effortless operation of large panels',
        'Exceptional weather sealing',
        'High load capacity',
        'Panoramic glass areas'
      ],
      energyRating: 'A+',
      applications: ['Large openings', 'Patio doors', 'Commercial facades']
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedSystem(expandedSystem === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Technical Window Systems
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Advanced engineering for superior performance and durability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((system, index) => (
            <div
              key={system.name}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {system.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {system.description}
                    </p>
                  </div>
                  <div className="ml-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      system.energyRating === 'A+++' 
                        ? 'bg-green-100 text-green-800'
                        : system.energyRating === 'A++' 
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {system.energyRating}
                    </span>
                  </div>
                </div>

                {/* Key Specs Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {Object.entries(system.keySpecs).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-3">
                      <div className="text-xs text-gray-500 mb-1">{key}</div>
                      <div className="text-sm font-semibold text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full text-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
                >
                  {expandedSystem === index ? 'View Less Details' : 'View Technical Details'}
                </button>

                {/* Expanded Details */}
                {expandedSystem === index && (
                  <div className="mt-6 border-t border-gray-200 pt-6">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Features:</h4>
                      <ul className="space-y-2">
                        {system.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {system.applications.map((application, appIndex) => (
                          <span
                            key={appIndex}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {application}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
