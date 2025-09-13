'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';

interface CustomizationOptionsProps {
  locale: Locale;
  dict: any;
}

export default function CustomizationOptions({ locale, dict }: CustomizationOptionsProps) {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedGlass, setSelectedGlass] = useState(0);
  const [selectedOpening, setSelectedOpening] = useState(0);

  const colors = [
    { name: 'White', value: '#FFFFFF', popular: true },
    { name: 'Cream', value: '#F5F5DC', popular: true },
    { name: 'Grey', value: '#8B8B8B', popular: true },
    { name: 'Anthracite', value: '#2F4F4F', popular: false },
    { name: 'Brown', value: '#8B4513', popular: false },
    { name: 'Green', value: '#228B22', popular: false },
  ];

  const finishes = [
    { name: 'Smooth', description: 'Clean, modern appearance' },
    { name: 'Woodgrain', description: 'Natural wood texture' },
    { name: 'Textured', description: 'Subtle surface texture' },
  ];

  const glassTypes = [
    {
      name: 'Standard Double Glazing',
      uValue: '1.4 W/m²K',
      description: 'Cost-effective solution for most applications',
      features: ['Good insulation', 'Standard performance', 'Budget-friendly']
    },
    {
      name: 'Low-E Double Glazing',
      uValue: '1.1 W/m²K',
      description: 'Enhanced thermal performance with low-E coating',
      features: ['Better insulation', 'Reduced heat loss', 'Energy efficient']
    },
    {
      name: 'Triple Glazing',
      uValue: '0.8 W/m²K',
      description: 'Maximum thermal efficiency and sound insulation',
      features: ['Superior insulation', 'Excellent sound dampening', 'Premium performance']
    },
    {
      name: 'Smart Glass',
      uValue: '1.0 W/m²K',
      description: 'Electrochromic glass with variable transparency',
      features: ['Privacy control', 'UV protection', 'Modern technology']
    },
  ];

  const openingMechanisms = [
    {
      name: 'Turn Only',
      description: 'Simple inward opening mechanism',
      animation: '→'
    },
    {
      name: 'Tilt Only',
      description: 'Top-hinged tilting for ventilation',
      animation: '↗'
    },
    {
      name: 'Tilt & Turn',
      description: 'Dual mechanism for maximum flexibility',
      animation: '⟲'
    },
    {
      name: 'Side Hung',
      description: 'Traditional side-hinged casement',
      animation: '↺'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Customization Options
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Personalize your windows to match your style and performance requirements.
          </p>
        </div>

        <div className="space-y-12">
          {/* Colors & Finishes */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Colors & Finishes</h3>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Available Colors</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {colors.map((color, index) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(index)}
                    className={`relative p-4 rounded-lg border-2 transition-all ${
                      selectedColor === index 
                        ? 'border-blue-600 ring-2 ring-blue-200' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-12 h-12 rounded-full mx-auto mb-2 border border-gray-300"
                      style={{ backgroundColor: color.value }}
                    />
                    <div className="text-sm font-medium text-gray-900">{color.name}</div>
                    {color.popular && (
                      <div className="absolute -top-2 -right-2">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Popular
                        </span>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Surface Finishes</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {finishes.map((finish, index) => (
                  <div key={finish.name} className="border border-gray-200 rounded-lg p-4">
                    <h5 className="font-medium text-gray-900 mb-1">{finish.name}</h5>
                    <p className="text-sm text-gray-600">{finish.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Glass Types */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Glass Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {glassTypes.map((glass, index) => (
                <button
                  key={glass.name}
                  onClick={() => setSelectedGlass(index)}
                  className={`text-left p-6 rounded-lg border-2 transition-all ${
                    selectedGlass === index 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-gray-900">{glass.name}</h4>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {glass.uValue}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{glass.description}</p>
                  <ul className="space-y-1">
                    {glass.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </div>

          {/* Opening Mechanisms */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Opening Mechanisms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {openingMechanisms.map((mechanism, index) => (
                <button
                  key={mechanism.name}
                  onClick={() => setSelectedOpening(index)}
                  className={`text-center p-6 rounded-lg border-2 transition-all ${
                    selectedOpening === index 
                      ? 'border-blue-600 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="text-4xl mb-4">{mechanism.animation}</div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{mechanism.name}</h4>
                  <p className="text-sm text-gray-600">{mechanism.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Smart Features */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Smart Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🌀</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Micro-ventilation</h4>
                <p className="text-sm text-gray-600">Continuous fresh air without opening windows fully</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🏠</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Smart-Box Integration</h4>
                <p className="text-sm text-gray-600">Compatible with home automation systems</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl mb-4">🔧</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Integrated Shutters</h4>
                <p className="text-sm text-gray-600">Built-in blinds and shutters for complete privacy control</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
