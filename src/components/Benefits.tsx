import { type Locale } from '@/lib/i18n';
import { 
  Shield, 
  Zap, 
  Volume2, 
  Users, 
  MapPin, 
  Headphones,
  Wrench,
  Lock
} from 'lucide-react';

interface BenefitsProps {
  locale: Locale;
  dict: any;
}

export default function Benefits({ locale, dict }: BenefitsProps) {
  const benefits = [
    {
      icon: Shield,
      title: dict.benefits.premium_materials.title,
      description: dict.benefits.premium_materials.description,
    },
    {
      icon: Zap,
      title: dict.benefits.energy_efficiency.title,
      description: dict.benefits.energy_efficiency.description,
    },
    {
      icon: Volume2,
      title: dict.benefits.sound_insulation.title,
      description: dict.benefits.sound_insulation.description,
    },
    {
      icon: Users,
      title: dict.benefits.expert_installation.title,
      description: dict.benefits.expert_installation.description,
    },
    {
      icon: MapPin,
      title: dict.benefits.nationwide_coverage.title,
      description: dict.benefits.nationwide_coverage.description,
    },
    {
      icon: Headphones,
      title: dict.benefits.after_sales.title,
      description: dict.benefits.after_sales.description,
    },
    {
      icon: Wrench,
      title: dict.benefits.custom_solutions.title,
      description: dict.benefits.custom_solutions.description,
    },
    {
      icon: Lock,
      title: dict.benefits.security.title,
      description: dict.benefits.security.description,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {dict.benefits.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Discover why thousands of customers choose our premium PVC solutions for their homes.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="relative group"
              >
                <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-blue-50 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="mt-1 text-sm font-medium text-gray-600">{dict.common.stats.happy_customers}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">10</div>
              <div className="mt-1 text-sm font-medium text-gray-600">{dict.common.stats.year_guarantee}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">40%</div>
              <div className="mt-1 text-sm font-medium text-gray-600">{dict.common.stats.energy_savings}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">24h</div>
              <div className="mt-1 text-sm font-medium text-gray-600">{dict.common.stats.quote_response}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
