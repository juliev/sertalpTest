import { type Locale } from '@/lib/i18n';
import Image from 'next/image';

interface DoorTypesProps {
  locale: Locale;
  dict: any;
}

export default function DoorTypes({ locale, dict }: DoorTypesProps) {
  const doorTypes = [
    {
      title: 'Entrance Doors',
      description: 'Secure and stylish main entrance solutions',
      image: '/window.svg',
      features: [
        'Multi-point locking system',
        'Reinforced steel core',
        'Thermal break technology',
        'Custom glass options'
      ],
      security: 'RC2 Security Class'
    },
    {
      title: 'Patio Doors',
      description: 'Large openings connecting indoor and outdoor spaces',
      image: '/window.svg',
      features: [
        'Lift-and-slide mechanism',
        'Large glass panels',
        'Weather-tight sealing',
        'Easy operation'
      ],
      security: 'RC1 Security Class'
    },
    {
      title: 'French Doors',
      description: 'Classic double-door design with modern performance',
      image: '/window.svg',
      features: [
        'Traditional aesthetics',
        'Modern PVC technology',
        'Energy efficient glazing',
        'Multiple opening options'
      ],
      security: 'Standard Security'
    },
    {
      title: 'Apartment Doors',
      description: 'Space-saving solutions for apartments and condos',
      image: '/window.svg',
      features: [
        'Compact design',
        'Sound insulation',
        'Fire resistance options',
        'Modern handle systems'
      ],
      security: 'Standard Security'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Door Types & Collections
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Choose from our comprehensive range of door solutions for every application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {doorTypes.map((door, index) => (
            <div key={door.title} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="aspect-w-16 aspect-h-9">
                <Image
                  src={door.image}
                  alt={door.title}
                  width={600}
                  height={300}
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {door.title}
                    </h3>
                    <p className="text-gray-600">
                      {door.description}
                    </p>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 ml-4">
                    {door.security}
                  </span>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {door.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full text-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors border border-blue-200 rounded-md py-2 hover:bg-blue-50">
                  View Detailed Specifications
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Why Choose Our PVC Doors
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Security</h4>
              <p className="text-gray-600">Multi-point locking systems and reinforced frames provide maximum protection for your home.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Energy Efficient</h4>
              <p className="text-gray-600">Superior thermal insulation reduces energy costs and improves indoor comfort year-round.</p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Custom Design</h4>
              <p className="text-gray-600">Wide range of colors, finishes, and hardware options to match your home's architectural style.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
