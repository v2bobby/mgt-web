import { Layers, Percent, ClipboardCheck } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'

const revenueStreams = [
  {
    icon: Layers,
    title: 'Tiered SaaS Subscriptions',
    body: 'Developer Tier for individual researchers and small apps. Enterprise Tier with volume-based pricing for companies processing terabytes of data monthly.',
    tag: 'Recurring Revenue',
  },
  {
    icon: Percent,
    title: 'Transactional Verification Tax',
    body: 'For decentralized marketplaces, MarginT takes 0.5%–1% of every transaction facilitated through our trust score. Buyers pay a premium for verified data.',
    tag: 'Transaction-Based',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit-as-a-Service',
    body: 'One-time deep-dive audits for legacy datasets. Companies pay MarginT to clean and score existing repositories before fine-tuning processes.',
    tag: 'Project-Based',
  },
]

export default function BusinessModel() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption-accent">Business Model</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text max-w-4xl mx-auto">
              We Don&apos;t Sell Data. We Sell Certainty.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary max-w-3xl mx-auto">
              The monetization model scales with the volume of the AI economy — designed to capture value across every segment of the data verification market.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Revenue Streams */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <SectionHeader title="Three Revenue Streams" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {revenueStreams.map((stream, i) => (
              <Reveal key={stream.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-mt-border hover:shadow-md hover:border-mt-blue/20 transition-all duration-300 h-full flex flex-col">
                  <stream.icon className="w-10 h-10 text-mt-blue" strokeWidth={1.5} />
                  <h3 className="mt-6 text-xl font-medium text-mt-text">{stream.title}</h3>
                  <p className="mt-3 text-mt-text-secondary leading-relaxed flex-1">{stream.body}</p>
                  <span className="inline-block bg-mt-blue/10 text-mt-blue text-xs px-3 py-1 rounded-full mt-4 self-start font-medium">
                    {stream.tag}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability & Moat */}
      <section className="bg-mt-surface py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text leading-tight tracking-[-0.02em]">
                  Scalability Flywheel
                </h2>
                <p className="mt-4 text-mt-text-secondary leading-relaxed">
                  Every verification makes MarginT smarter. As more data passes through the DAE, our models improve detection accuracy, attracting more enterprises, which generates more data. A classic network effect with compounding returns.
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    'More verifications → better models',
                    'Better models → higher accuracy',
                    'Higher accuracy → more enterprise clients',
                    'More clients → more verifications',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-mt-text-secondary">
                      <span className="w-6 h-6 rounded-full bg-mt-blue/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-mt-blue text-xs font-bold">{i + 1}</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text leading-tight tracking-[-0.02em]">
                  Competitive Moat
                </h2>
                <p className="mt-4 text-mt-text-secondary leading-relaxed">
                  MarginT&apos;s advantage compounds over time through three defensive layers:
                </p>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: 'Data Network Effects',
                      body: 'Proprietary training data from billions of verifications creates an ever-widening accuracy gap.',
                    },
                    {
                      title: 'Protocol Lock-in',
                      body: 'PoD becomes the industry standard, making switching costs prohibitive.',
                    },
                    {
                      title: 'Ecosystem Integration',
                      body: 'Deep integrations with major AI pipelines and decentralized networks create distribution advantages.',
                    },
                  ].map((item, i) => (
                    <li key={i} className="border-l-2 border-mt-blue pl-4">
                      <p className="font-medium text-mt-text">{item.title}</p>
                      <p className="text-sm text-mt-text-secondary mt-1">{item.body}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tech Leverage */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden"
        style={{ background: '#0a0e1a' }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.08) 0%, transparent 70%)',
          }}
        />
        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <h2 className="text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-white">
              Technology as a Force Multiplier
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/70 max-w-3xl mx-auto">
              MarginT operates with software margins. The DAE runs on commodity cloud infrastructure. Each new customer adds revenue without proportional cost. Verification is automated. Scaling is horizontal.
            </p>
          </Reveal>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-12 lg:gap-16">
            {[
              { value: '85%+', label: 'Gross margins' },
              { value: '3x', label: 'Revenue per engineer vs. industry avg' },
              { value: '24/7', label: 'Automated verification uptime' },
            ].map((stat, i) => (
              <Reveal key={stat.value} delay={0.2 + i * 0.1}>
                <div className="text-center">
                  <p className="font-mono text-4xl text-mt-blue font-medium">{stat.value}</p>
                  <p className="text-white/50 text-sm mt-2">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
