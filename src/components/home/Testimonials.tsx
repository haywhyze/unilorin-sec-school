'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const placeholderTestimonials = [
  {
    quote:
      'USS gave me a solid academic foundation that prepared me for university. The discipline I learned here continues to guide my career.',
    author: 'Aisha Abdullahi',
    role: 'Alumni, Class of 2018',
  },
  {
    quote:
      'As a parent, I am thoroughly impressed with the standard of education and care my children receive. The teachers are dedicated and the environment is nurturing.',
    author: 'Dr. Olumide Fashola',
    role: 'Parent',
  },
  {
    quote:
      'The combination of academic rigour and extracurricular activities at USS makes it one of the best secondary schools in Kwara State.',
    author: 'Ibrahim Saliu',
    role: 'SS3 Student',
  },
]

export function Testimonials({
  testimonials,
}: {
  testimonials?: typeof placeholderTestimonials
}) {
  const items =
    testimonials && testimonials.length > 0 ? testimonials : placeholderTestimonials
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-cream-dark relative overflow-hidden">
      {/* Subtle dot pattern */}
      <div className="dot-grid absolute inset-0" />

      <div className="container-uss relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          description="Hear from our community of students, parents, and alumni."
        />

        {/* Desktop: 3 cards side by side */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-border gold-bar-top hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Gold quotation mark */}
              <svg
                className="w-10 h-10 text-gold-300 mb-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-text-body leading-relaxed mb-6 italic">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="border-t border-border pt-5">
                <div className="font-display font-bold text-text-heading">{item.author}</div>
                <div className="text-sm text-gold-600">{item.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: carousel with single card + dots */}
        <div className="md:hidden">
          <div className="bg-white rounded-2xl p-8 border border-border gold-bar-top max-w-lg mx-auto">
            {/* Gold quotation mark */}
            <svg
              className="w-10 h-10 text-gold-300 mb-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-text-body leading-relaxed mb-6 italic transition-all duration-500">
              &ldquo;{items[active].quote}&rdquo;
            </p>

            <div className="border-t border-border pt-5 mb-6">
              <div className="font-display font-bold text-text-heading">
                {items[active].author}
              </div>
              <div className="text-sm text-gold-600">{items[active].role}</div>
            </div>

            {/* Dots navigation */}
            <div className="flex items-center justify-center gap-3">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === active
                      ? 'bg-gold-500 scale-125'
                      : 'bg-purple-200 hover:bg-purple-300'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
