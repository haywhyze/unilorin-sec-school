'use client'

import { useState } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const placeholderTestimonials = [
  {
    quote:
      'USS gave me a solid academic foundation that prepared me for university. The discipline I learned here continues to guide my career path.',
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
      'The combination of academic rigour and extracurricular activities at USS makes it one of the best secondary schools in Kwara State. I am proud to be a student here.',
    author: 'Ibrahim Saliu',
    role: 'SS3 Student',
  },
]

export function Testimonials({
  testimonials,
}: {
  testimonials?: typeof placeholderTestimonials
}) {
  const items = testimonials && testimonials.length > 0 ? testimonials : placeholderTestimonials
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-purple-900 relative overflow-hidden noise-overlay">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-purple-700/30 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="container-uss relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What People Say About USS"
          light
        />

        <div className="max-w-3xl mx-auto text-center">
          {/* Quote */}
          <div className="relative mb-10">
            <svg
              className="w-12 h-12 text-gold-500/30 mx-auto mb-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-xl md:text-2xl text-white/90 font-display italic leading-relaxed transition-all duration-500">
              &ldquo;{items[active].quote}&rdquo;
            </p>
          </div>

          {/* Author */}
          <div className="mb-8">
            <div className="text-white font-semibold text-lg">{items[active].author}</div>
            <div className="text-gold-400 text-sm">{items[active].role}</div>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-gold-500 scale-125' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
