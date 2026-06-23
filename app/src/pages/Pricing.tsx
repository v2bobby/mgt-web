import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import Reveal from '@/components/Reveal'

const tiers = [
  {
    name: 'Developer',
    price: '$0',
    suffix: '/month',
    description: 'Perfect for individual researchers and small apps.',
    features: [
      '1,000 verifications/month',
      'Text data support',
      'Basic quality scores',
      'Community support',
    ],
    cta: 'Get Started Free',
    ctaStyle: 'secondary' as const,
    featured: false,
  },
  {
    name: 'Professional',
    price: '$499',
    suffix: '/month',
    description: 'For growing teams with serious data needs.',
    features: [
      '100,000 verifications/month',
      'Text + image data support',
      'Advanced provenance tracking',
      'Priority email support',
      'API access',
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'primary' as const,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    suffix: '',
    description: 'Volume-based pricing for large organizations.',
    features: [
      'Unlimited verifications',
      'Multi-modal support (text, image, video)',
      'Custom model training',
      'Dedicated success manager',
      'SSO & advanced security',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
    ctaStyle: 'secondary' as const,
    featured: false,
  },
]

const addOns = [
  {
    title: 'Verification Tax',
    body: '0.5%–1% per marketplace transaction. Automatically applied to all verified dataset sales.',
  },
  {
    title: 'Audit-as-a-Service',
    body: 'One-time deep-dive audits starting at $5,000. Clean and score your existing data repositories before fine-tuning.',
  },
]

export default function Pricing() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption-accent">Pricing</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text">
              Transparent Pricing for Every Scale
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary">
              Start free. Scale as your verification needs grow.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.1}>
                <div
                  className={`relative rounded-xl p-8 h-full flex flex-col ${
                    tier.featured
                      ? 'bg-mt-dark border border-mt-blue/30 shadow-lg'
                      : 'bg-white border border-mt-border shadow-sm'
                  }`}
                >
                  {tier.featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-mt-blue text-white text-xs px-4 py-1 rounded-full font-medium">
                      Most Popular
                    </span>
                  )}
                  <h3
                    className={`text-xl font-medium ${
                      tier.featured ? 'text-white' : 'text-mt-text'
                    }`}
                  >
                    {tier.name}
                  </h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span
                      className={`font-mono text-4xl font-medium ${
                        tier.featured ? 'text-white' : 'text-mt-text'
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.suffix && (
                      <span
                        className={`text-base ${
                          tier.featured ? 'text-white/60' : 'text-mt-text-secondary'
                        }`}
                      >
                        {tier.suffix}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-3 text-sm ${
                      tier.featured ? 'text-white/60' : 'text-mt-text-secondary'
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mt-6 space-y-3 flex-1">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            tier.featured ? 'text-mt-blue' : 'text-mt-blue'
                          }`}
                          strokeWidth={2}
                        />
                        <span
                          className={`text-sm ${
                            tier.featured ? 'text-white/80' : 'text-mt-text-secondary'
                          }`}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={tier.name === 'Enterprise' ? '/demo' : '/demo'}
                    className={`mt-8 block text-center py-3 rounded-full text-sm font-medium transition-all duration-300 active:scale-[0.97] ${
                      tier.ctaStyle === 'primary'
                        ? 'bg-mt-blue text-white hover:bg-mt-blue-deep'
                        : tier.featured
                        ? 'bg-transparent text-white border border-white/20 hover:border-white/40'
                        : 'bg-transparent text-mt-text border border-mt-border hover:border-mt-blue hover:text-mt-blue'
                    }`}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="bg-mt-surface py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-16">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text text-center tracking-[-0.02em]">
              Additional Services
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, i) => (
              <Reveal key={addon.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-mt-border">
                  <h3 className="text-lg font-medium text-mt-text">{addon.title}</h3>
                  <p className="mt-2 text-sm text-mt-text-secondary leading-relaxed">
                    {addon.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
