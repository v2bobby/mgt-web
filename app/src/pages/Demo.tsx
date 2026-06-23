import { useState, type FormEvent } from 'react'
import { Check, ChevronDown, Loader2 } from 'lucide-react'
import Reveal from '@/components/Reveal'

const faqs = [
  {
    q: 'When will MarginT be publicly available?',
    a: "We're targeting Q3 2026 for general availability, with private beta access beginning Q2 2026.",
  },
  {
    q: 'What data types does MarginT support?',
    a: 'Initially text-based data. Image and video verification will be available in Q1 2027.',
  },
  {
    q: 'How does pricing work?',
    a: 'We offer a free Developer Tier, volume-based Enterprise plans, and per-transaction pricing for marketplace integrations.',
  },
  {
    q: 'Can I integrate MarginT with my existing pipeline?',
    a: 'Yes. Our API and SDK are designed for plug-and-play integration with any data ingestion endpoint.',
  },
]

export default function Demo() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: 'Developer',
    useCase: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email'
    if (!form.company.trim()) newErrors.company = 'Company is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      // Store in localStorage
      const existing = JSON.parse(localStorage.getItem('marginT_waitlist') || '[]')
      existing.push({ ...form, submittedAt: new Date().toISOString() })
      localStorage.setItem('marginT_waitlist', JSON.stringify(existing))
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption-accent">Launch Demo</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text max-w-3xl mx-auto">
              Be the First to Experience MarginT
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary max-w-2xl mx-auto">
              We&apos;re onboarding a select group of partners for our private beta. Join the waitlist and our team will reach out shortly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-lg mx-auto px-6">
          {!submitted ? (
            <Reveal>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-mt-border">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-mt-text mb-1.5">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`w-full bg-mt-surface border rounded-lg px-4 py-3 text-mt-text focus:border-mt-blue focus:ring-2 focus:ring-mt-blue/20 outline-none transition-all ${
                        errors.name ? 'border-red-400' : 'border-mt-border'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mt-text mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`w-full bg-mt-surface border rounded-lg px-4 py-3 text-mt-text focus:border-mt-blue focus:ring-2 focus:ring-mt-blue/20 outline-none transition-all ${
                        errors.email ? 'border-red-400' : 'border-mt-border'
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mt-text mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className={`w-full bg-mt-surface border rounded-lg px-4 py-3 text-mt-text focus:border-mt-blue focus:ring-2 focus:ring-mt-blue/20 outline-none transition-all ${
                        errors.company ? 'border-red-400' : 'border-mt-border'
                      }`}
                      placeholder="Your company name"
                    />
                    {errors.company && (
                      <p className="text-red-500 text-xs mt-1">{errors.company}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mt-text mb-1.5">
                      Role
                    </label>
                    <div className="relative">
                      <select
                        value={form.role}
                        onChange={(e) => setForm({ ...form, role: e.target.value })}
                        className="w-full bg-mt-surface border border-mt-border rounded-lg px-4 py-3 text-mt-text focus:border-mt-blue focus:ring-2 focus:ring-mt-blue/20 outline-none transition-all appearance-none"
                      >
                        <option>Developer</option>
                        <option>Data Scientist</option>
                        <option>Executive</option>
                        <option>Researcher</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-mt-text-secondary pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-mt-text mb-1.5">
                      Use Case (Optional)
                    </label>
                    <textarea
                      value={form.useCase}
                      onChange={(e) => setForm({ ...form, useCase: e.target.value })}
                      className="w-full bg-mt-surface border border-mt-border rounded-lg px-4 py-3 text-mt-text focus:border-mt-blue focus:ring-2 focus:ring-mt-blue/20 outline-none transition-all min-h-[100px] resize-none"
                      placeholder="Tell us about your use case..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-mt-blue text-white py-3.5 rounded-full font-medium text-sm hover:bg-mt-blue-deep transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Join Waitlist'
                    )}
                  </button>
                </form>
              </div>
            </Reveal>
          ) : (
            <Reveal>
              <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-mt-border text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="mt-6 text-xl font-medium text-mt-text">
                  You&apos;re on the list!
                </h3>
                <p className="mt-3 text-mt-text-secondary">
                  We&apos;ll be in touch soon with early access details. In the meantime, follow us on Twitter for updates.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="bg-mt-surface text-mt-text px-4 py-2 rounded-full text-sm font-medium hover:bg-mt-elevated transition-colors"
                  >
                    Follow on Twitter
                  </a>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mt-surface py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-6">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text text-center tracking-[-0.02em]">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="bg-white rounded-lg border border-mt-border overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-mt-surface/50 transition-colors"
                  >
                    <span className="font-medium text-mt-text text-sm">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-mt-text-secondary flex-shrink-0 ml-4 transition-transform ${
                        openFaq === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === i ? 'max-h-40' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-4 text-sm text-mt-text-secondary leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
