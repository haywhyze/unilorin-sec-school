import type { Metadata } from 'next'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { ContactForm } from '@/components/shared/ContactForm'
import { PageHero } from '@/components/ui/PageHero'
import { getPayload } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Unilorin Secondary School — phone, email, address, and a contact form for enquiries.',
}

const defaultContactInfo = [
  {
    label: 'Phone',
    value: '0705 154 9666',
    href: 'tel:+2347051549666',
    description: 'Mon - Fri, 8:00 AM - 4:00 PM',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@uilsecondary.unilorin.edu.ng',
    href: 'mailto:info@uilsecondary.unilorin.edu.ng',
    description: 'We respond within 24-48 hours',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'Address',
    value: 'FM62+H6F, University of Ilorin, Ilorin 240102, Kwara State',
    href: 'https://maps.google.com/?q=University+of+Ilorin+Mini+Campus',
    description: 'Located within the University of Ilorin',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default async function ContactPage() {
  const payload = await getPayload()
  const settings = await payload.findGlobal({ slug: 'site-settings' }) as any

  const phone = settings?.contactPhone || '0705 154 9666'
  const email = settings?.contactEmail || 'info@uilsecondary.unilorin.edu.ng'
  const address = settings?.address || 'FM62+H6F, University of Ilorin, Ilorin 240102, Kwara State'

  const contactInfo = defaultContactInfo.map((info) => {
    if (info.label === 'Phone') {
      return {
        ...info,
        value: phone,
        href: `tel:${phone.replace(/\s/g, '')}`,
      }
    }
    if (info.label === 'Email') {
      return {
        ...info,
        value: email,
        href: `mailto:${email}`,
      }
    }
    if (info.label === 'Address') {
      return {
        ...info,
        value: address,
      }
    }
    return info
  })
  return (
    <>
      <PageHero
        label="Contact"
        title="Get in Touch"
        description="Reach out for admissions enquiries, school visits, or general questions."
      />

      {/* Contact Cards + Form */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-uss">
          {/* Contact Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.label} delay={i * 100}>
                <a
                  href={info.href}
                  target={info.label === 'Address' ? '_blank' : undefined}
                  rel={info.label === 'Address' ? 'noopener noreferrer' : undefined}
                  className="block bg-white rounded-2xl p-8 border border-border text-center hover:shadow-xl transition-all duration-300 h-full group"
                >
                  <div className="w-16 h-16 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center mx-auto mb-5 group-hover:bg-purple-700 group-hover:text-white transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                    {info.label}
                  </div>
                  <div className="font-semibold text-text-heading mb-1 text-sm">{info.value}</div>
                  <div className="text-xs text-text-muted">{info.description}</div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* Form + Map Grid */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Map + Additional Info */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left">
                <SectionHeading label="Visit Us" title="Our Location" centered={false} />
                <p className="text-text-muted leading-relaxed mb-6">
                  Unilorin Secondary School is situated within the serene Mini Campus
                  of the University of Ilorin, providing a safe and intellectually
                  stimulating environment for learning.
                </p>
              </ScrollReveal>

              {/* Google Maps Embed */}
              <ScrollReveal>
                <div className="rounded-2xl overflow-hidden border border-border h-72 shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.0!2d4.6744!3d8.4799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1036b57e4d5c1f1f%3A0x7a0f0f0f0f0f0f0f!2sUniversity%20of%20Ilorin!5e0!3m2!1sen!2sng!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="University of Ilorin Mini Campus Map"
                  />
                </div>
              </ScrollReveal>

              {/* Office Hours */}
              <ScrollReveal>
                <div className="bg-surface-alt rounded-2xl p-6 border border-border">
                  <h4 className="font-display font-bold text-text-heading mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Office Hours
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-text-muted">
                      <span>Monday - Friday</span>
                      <span className="font-medium text-text-heading">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between text-text-muted">
                      <span>Saturday</span>
                      <span className="font-medium text-text-heading">9:00 AM - 1:00 PM</span>
                    </div>
                    <div className="flex justify-between text-text-muted">
                      <span>Sunday</span>
                      <span className="font-medium text-text-muted">Closed</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-surface-alt rounded-2xl p-8 md:p-10 border border-border">
                  <h3 className="text-2xl font-display font-bold text-text-heading mb-2">Send Us a Message</h3>
                  <p className="text-text-muted mb-8">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
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
