'use client'

import { useState, type ChangeEvent } from 'react'

type FormStatus = 'idle' | 'sending' | 'sent'

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const subjectOptions = [
  { value: '', label: 'Select a subject' },
  { value: 'general', label: 'General Inquiry' },
  { value: 'admissions', label: 'Admissions' },
  { value: 'academics', label: 'Academics' },
  { value: 'other', label: 'Other' },
]

const inputBaseClass =
  'w-full rounded-xl border bg-white px-4 py-3.5 text-[var(--color-uss-dark)] placeholder:text-[var(--color-uss-muted)]/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1'

const inputIdleClass =
  'border-border focus:border-gold-400 focus:ring-gold-400/30'

const inputErrorClass =
  'border-red-500 focus:border-red-500 focus:ring-red-400/30'

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return undefined
      case 'email':
        if (!value.trim()) return 'Email address is required'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email'
        return undefined
      case 'subject':
        if (!value) return 'Please select a subject'
        return undefined
      case 'message':
        if (!value.trim()) return 'Message is required'
        if (value.trim().length < 10)
          return 'Message must be at least 10 characters'
        return undefined
      default:
        return undefined
    }
  }

  const handleBlur = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors((prev) => ({ ...prev, [name]: error }))
    }
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >

    // Validate all fields
    const newErrors: FormErrors = {}
    let hasErrors = false

    for (const field of ['name', 'email', 'subject', 'message']) {
      const error = validateField(field, data[field] || '')
      if (error) {
        newErrors[field as keyof FormErrors] = error
        hasErrors = true
      }
    }

    setTouched({ name: true, email: true, subject: true, message: true })
    setErrors(newErrors)

    if (hasErrors) return

    setStatus('sending')

    // Simulated submit
    console.log('Contact form submitted:', data)

    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        setTouched({})
        setErrors({})
        form.reset()
      }, 4000)
    }, 1200)
  }

  const getInputClass = (field: string) =>
    `${inputBaseClass} ${touched[field] && errors[field as keyof FormErrors] ? inputErrorClass : inputIdleClass}`

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Success banner */}
      {status === 'sent' && (
        <div
          className="flex items-center gap-3 rounded-xl border border-green-200 bg-green-50 px-5 py-4"
          role="alert"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500">
            <svg
              className="h-4 w-4 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <p className="font-semibold text-green-800">
              Message sent successfully!
            </p>
            <p className="text-sm text-green-700">
              We will get back to you within 24-48 hours.
            </p>
          </div>
        </div>
      )}

      {/* Name and Email row */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Full Name */}
        <div>
          <label
            htmlFor="contact-name"
            className="mb-2 block text-sm font-semibold text-[var(--color-uss-dark)]"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            required
            placeholder="Your full name"
            className={getInputClass('name')}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.name && errors.name && (
            <p className="mt-1.5 flex items-center gap-1 text-sm text-red-500">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="contact-email"
            className="mb-2 block text-sm font-semibold text-[var(--color-uss-dark)]"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            required
            placeholder="you@example.com"
            className={getInputClass('email')}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {touched.email && errors.email && (
            <p className="mt-1.5 flex items-center gap-1 text-sm text-red-500">
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Phone Number (optional) */}
      <div>
        <label
          htmlFor="contact-phone"
          className="mb-2 block text-sm font-semibold text-[var(--color-uss-dark)]"
        >
          Phone Number <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <input
          type="tel"
          id="contact-phone"
          name="phone"
          placeholder="e.g. +234 800 000 0000"
          className={`${inputBaseClass} ${inputIdleClass}`}
          onChange={handleChange}
        />
      </div>

      {/* Subject */}
      <div>
        <label
          htmlFor="contact-subject"
          className="mb-2 block text-sm font-semibold text-[var(--color-uss-dark)]"
        >
          Subject <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="contact-subject"
            name="subject"
            required
            className={`${getInputClass('subject')} appearance-none pr-10`}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            {subjectOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <svg
            className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-uss-muted)]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
        {touched.subject && errors.subject && (
          <p className="mt-1.5 flex items-center gap-1 text-sm text-red-500">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="contact-message"
          className="mb-2 block text-sm font-semibold text-[var(--color-uss-dark)]"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className={`${getInputClass('message')} resize-y`}
          onBlur={handleBlur}
          onChange={handleChange}
        />
        {touched.message && errors.message && (
          <p className="mt-1.5 flex items-center gap-1 text-sm text-red-500">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={status !== 'idle'}
        className="btn btn-primary group w-full justify-center py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'idle' && (
          <>
            Send Message
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
        {status === 'sending' && (
          <span className="flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending...
          </span>
        )}
        {status === 'sent' && (
          <span className="flex items-center gap-2">
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Message Sent!
          </span>
        )}
      </button>
    </form>
  )
}
