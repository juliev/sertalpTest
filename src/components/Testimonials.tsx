'use client';

import { useState } from 'react';
import { type Locale } from '@/lib/i18n';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialsProps {
  locale: Locale;
  dict: any;
}

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
}

export default function Testimonials({ locale, dict }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = dict.testimonials_data;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {dict.testimonials.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            See what our customers have to say about their experience with our products and services.
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="bg-gray-50 rounded-lg p-8 mx-4">
                    {/* Stars */}
                    <div className="flex justify-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg text-gray-600 text-center mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="text-center">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500 mb-2">{testimonial.location}</p>
                      <p className="text-sm text-blue-600 font-medium">{testimonial.product}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label={dict.common.aria_labels.previous_testimonial}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label={dict.common.aria_labels.next_testimonial}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`${dict.common.aria_labels.go_to_testimonial} ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 border-t border-gray-200 pt-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10+</div>
                <div className="text-sm text-gray-500">{dict.common.stats.years_experience}</div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-sm text-gray-500">{dict.common.stats.happy_customers}</div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5★</div>
                <div className="text-sm text-gray-500">{dict.common.stats.average_rating}</div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-500">{dict.common.stats.satisfaction_rate}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
