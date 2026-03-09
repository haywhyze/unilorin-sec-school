import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { ContactForm } from '@/components/shared/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Unilorin Secondary School — phone, email, address, and a contact form for enquiries.',
}

const contactInfo = [
  {
    label: 'Phone',
    value: '0705 154 9666',
    href: 'tel:+2347051549666',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@uilsecondary.unilorin.edu.ng',
    href: 'mailto:info@uilsecondary.unilorin.edu.ng',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'Mini Campus, University of Ilorin, Ilorin, Kwara State, Nigeria',
    href: 'https://maps.google.com/?q=University+of+Ilorin',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-36 pb-20 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="container-uss relative z-10">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-gold-400 mb-4">
            <span className="w-8 h-0.5 bg-gold-500 inline-block" /> Contact
          </span>
          <h1 className="text-white max-w-2xl">Get in Touch</h1>
          <p className="text-white/70 text-lg mt-4 max-w-xl">We&apos;d love to hear from you. Reach out for admissions enquiries, school visits, or general questions.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-uss">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <SectionHeading label="Reach Us" title="Contact Information" centered={false} />
              <div className="space-y-6 mb-10">
                {contactInfo.map((info) => (
                  <ScrollReveal key={info.label}>
                    <a
                      href={info.href}
                      target={info.label === 'Address' ? '_blank' : undefined}
                      rel={info.label === 'Address' ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-purple-50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 group-hover:bg-purple-200 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-uss-muted mb-0.5">{info.label}</div>
                        <div className="text-uss-dark font-medium">{info.value}</div>
                      </div>
                    </a>
                  </ScrollReveal>
                ))}
              </div>

              {/* Map */}
              <ScrollReveal>
                <div className="rounded-2xl overflow-hidden border border-uss-border h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0!2d4.6744!3d8.4799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036b57e4d5c1f1f%3A0x7a0f0f0f0f0f0f0f!2sUniversity%20of%20Ilorin!5e0!3m2!1sen!2sng!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University of Ilorin Map"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-purple-50 rounded-2xl p-8 md:p-10 border border-purple-100">
                  <h3 className="text-2xl mb-2">Send Us a Message</h3>
                  <p className="text-uss-muted mb-8">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
