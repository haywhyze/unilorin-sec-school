'use client'

import { useState, type FormEvent } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    // Visual feedback — in production, wire this to an API route or email service
    setTimeout(() => {
      setStatus('sent')
      setTimeout(() => {
        setStatus('idle')
        ;(e.target as HTMLFormElement).reset()
      }, 3000)
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-uss-dark mb-1.5">
            Full Name <span className="text-uss-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-uss-dark placeholder:text-uss-muted/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-uss-dark mb-1.5">
            Email Address <span className="text-uss-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-uss-dark placeholder:text-uss-muted/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-uss-dark mb-1.5">
          Subject <span className="text-uss-red-500">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-uss-dark focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all"
        >
          <option value="">Select a subject</option>
          <option value="admissions">Admissions Enquiry</option>
          <option value="academics">Academic Enquiry</option>
          <option value="visit">Schedule a School Visit</option>
          <option value="general">General Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-uss-dark mb-1.5">
          Message <span className="text-uss-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-purple-200 bg-white text-uss-dark placeholder:text-uss-muted/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all resize-y"
          placeholder="How can we help you?"
        />
      </div>

      <button
        type="submit"
        disabled={status !== 'idle'}
        className={`btn w-full justify-center text-base py-3.5 ${
          status === 'sent'
            ? 'bg-green-600 text-white'
            : 'btn-primary'
        } disabled:opacity-70`}
      >
        {status === 'idle' && (
          <>
            Send Message
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </>
        )}
        {status === 'sending' && 'Sending...'}
        {status === 'sent' && (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Message Sent!
          </>
        )}
      </button>
    </form>
  )
}
