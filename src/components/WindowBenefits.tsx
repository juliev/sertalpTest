import { type Locale } from '@/lib/i18n';
import { Zap, Volume2, Shield, Leaf, Wrench } from 'lucide-react';

interface WindowBenefitsProps {
  locale: Locale;
  dict: any;
}

export default function WindowBenefits({ locale, dict }: WindowBenefitsProps) {
  const benefits = [
    {
      icon: Zap,
      title: 'Energy Savings',
      description: 'Up to 40% reduction in heating and cooling costs',
      stat: '40%'
    },
    {
      icon: Volume2,
      title: 'Acoustic Insulation',
      description: 'Reduce outside noise by up to 32 decibels',
      stat: '32dB'
    },
    {
      icon: Shield,
      title: 'Extended Lifespan',
      description: '10+ year warranty on all installations',
      stat: '10+'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable materials and production processes',
      stat: '100%'
    },
    {
      icon: Wrench,
      title: 'Low Maintenance',
      description: 'Easy to clean and resistant to weather damage',
      stat: 'Easy'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Our PVC Windows
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Experience the perfect combination of comfort, efficiency, and style.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="text-center">
              <div className="mx-auto flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <benefit.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-500">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
