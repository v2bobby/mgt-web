import { Link } from 'react-router-dom'
import { ChevronDown, Shield, Fingerprint, Zap } from 'lucide-react'
import ParticleField from '@/components/ParticleField'
import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'

const solutionCards = [
  {
    icon: Shield,
    title: 'Data Authenticity Engine',
    body: 'Our DAE detects synthetic fingerprints, semantic duplicates, and anomalous submission patterns using embedding similarity analysis and statistical signature recognition.',
    link: 'Explore DAE',
    linkTo: '/product',
  },
  {
    icon: Fingerprint,
    title: 'Proof-of-Data Protocol',
    body: 'Every data point receives a cryptographic metadata wrapper tracking source origin, transformation history, and a probabilistic quality score between 0 and 1.',
    link: 'Explore PoD',
    linkTo: '/product',
  },
  {
    icon: Zap,
    title: 'Plug-and-Play Integration',
    body: "A single API call wraps your data ingestion endpoints with MarginT verification. Only high-score data triggers expensive compute or reward distributions.",
    link: 'View API Docs',
    linkTo: '/product',
  },
]

const useCases = [
  {
    title: 'AI Training Pipelines',
    body: 'Fortune 500 companies spending millions on compute cannot afford to train on bad data. MarginT acts as a Quality Gate, auditing massive datasets to ensure they are free of copyright-infringing synthetic content and duplicates.',
    tag: 'Enterprise',
  },
  {
    title: 'Decentralized Subnets',
    body: "In subnet architectures like Reppo and Bittensor, MarginT serves as the Validator's Validator — providing standardized trust metrics to slash bad actors and reward high-quality contributors fairly.",
    tag: 'Web3',
  },
  {
    title: 'Data Marketplaces',
    body: 'Buyers currently purchase datasets blind. MarginT provides a Blue Checkmark for data — significantly increasing market value by proving authenticity and human origin.',
    tag: 'Marketplaces',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero — Trust Particle Field */}
      <section className="relative min-h-[100dvh] flex items-center justify-center bg-mt-surface overflow-hidden">
        <ParticleField />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pointer-events-none">
          <Reveal>
            <p className="caption-accent">Trust Infrastructure for the AI Economy</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text">
              Verify What Powers AI
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary max-w-2xl mx-auto">
              MarginT&apos;s Proof-of-Data protocol ensures every data point entering your AI pipeline is authentic, traceable, and high-signal.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 pointer-events-auto">
              <Link
                to="/demo"
                className="bg-mt-blue text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mt-blue-deep hover:shadow-glow transition-all duration-300 active:scale-[0.97]"
              >
                Launch Demo
              </Link>
              <Link
                to="/business-model"
                className="bg-transparent text-mt-text border border-mt-border px-7 py-3.5 rounded-full text-sm font-medium hover:border-mt-blue hover:text-mt-blue transition-all duration-300"
              >
                Read the Whitepaper
              </Link>
            </div>
          </Reveal>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-slow">
          <ChevronDown className="w-6 h-6 text-mt-text-secondary/40" />
        </div>
      </section>

      {/* Trusted By */}
      <section className="bg-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption">Trusted by forward-thinking teams</p>
          </Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 lg:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="w-28 h-10 bg-mt-elevated rounded-md opacity-50" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <Reveal>
                <p className="caption-accent">The Crisis</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.02em] text-mt-text">
                  AI Is Choking on Synthetic Data
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary">
                  As AI systems consume their own generated content, &ldquo;model collapse&rdquo; threatens to degrade machine learning outputs. Decentralized data networks are flooded with bot-submitted noise. Without verification, the AI economy runs on digital trash.
                </p>
              </Reveal>
              <div className="mt-10 flex flex-col sm:flex-row gap-10">
                <Reveal delay={0.3}>
                  <div>
                    <p className="font-mono text-3xl font-medium text-mt-text">73%</p>
                    <p className="text-sm text-mt-text-secondary mt-1">of enterprises report data quality as top AI concern</p>
                  </div>
                </Reveal>
                <Reveal delay={0.4}>
                  <div>
                    <p className="font-mono text-3xl font-medium text-mt-text">$4.2T</p>
                    <p className="text-sm text-mt-text-secondary mt-1">projected AI market by 2028 — all needing clean data</p>
                  </div>
                </Reveal>
              </div>
            </div>
            {/* Right: Visual */}
            <Reveal delay={0.2} direction="left">
              <div className="bg-mt-dark rounded-xl p-8 shadow-lg min-h-[320px] flex items-center justify-center relative overflow-hidden">
                {/* Abstract contamination visualization */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${Math.random() * 80 + 20}px`,
                        height: `${Math.random() * 80 + 20}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: i < 5 ? 'rgba(239, 68, 68, 0.6)' : 'rgba(37, 99, 235, 0.3)',
                        filter: 'blur(20px)',
                        animation: `pulse ${2 + Math.random() * 3}s ease-in-out infinite`,
                      }}
                    />
                  ))}
                </div>
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto">
                    <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <p className="mt-4 text-white/60 text-sm">Contaminated Data Detected</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="bg-mt-surface py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <SectionHeader
            caption="The Solution"
            title="Three Pillars of Digital Trust"
          />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 shadow-sm border border-mt-border hover:shadow-md hover:border-mt-blue/20 transition-all duration-300 h-full flex flex-col">
                  <card.icon className="w-10 h-10 text-mt-blue" strokeWidth={1.5} />
                  <h3 className="mt-6 text-xl font-medium text-mt-text">{card.title}</h3>
                  <p className="mt-3 text-mt-text-secondary leading-relaxed flex-1">{card.body}</p>
                  <Link
                    to={card.linkTo}
                    className="mt-6 text-mt-blue font-medium text-sm hover:underline inline-flex items-center gap-1"
                  >
                    {card.link} <span>&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <SectionHeader
            caption="Use Cases"
            title="Built for the Entire Data Ecosystem"
          />
          <div className="mt-16 space-y-20">
            {useCases.map((uc, i) => (
              <div
                key={uc.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                <Reveal delay={0} className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div>
                    <span className="inline-block bg-mt-elevated text-mt-text-secondary text-xs px-3 py-1 rounded-full font-medium">
                      {uc.tag}
                    </span>
                    <h3 className="mt-4 text-[clamp(1.5rem,2.5vw,2rem)] font-medium text-mt-text leading-tight">
                      {uc.title}
                    </h3>
                    <p className="mt-4 text-mt-text-secondary leading-relaxed">
                      {uc.body}
                    </p>
                  </div>
                </Reveal>
                <Reveal
                  delay={0.15}
                  direction={i % 2 === 0 ? 'left' : 'right'}
                  className={i % 2 === 1 ? 'lg:order-1' : ''}
                >
                  <div className="bg-mt-surface rounded-xl p-6 border border-mt-border min-h-[240px] flex items-center justify-center">
                    {/* Abstract geometric illustration */}
                    <svg
                      viewBox="0 0 200 120"
                      className="w-full max-w-[280px] opacity-60"
                      fill="none"
                    >
                      <circle cx="100" cy="60" r="40" stroke="#2563eb" strokeWidth="1.5" opacity="0.3" />
                      <circle cx="100" cy="60" r="25" stroke="#2563eb" strokeWidth="1" opacity="0.5" />
                      <circle cx="100" cy="60" r="10" fill="#2563eb" opacity="0.2" />
                      {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
                        const rad = (angle * Math.PI) / 180
                        const x = 100 + 40 * Math.cos(rad)
                        const y = 60 + 40 * Math.sin(rad)
                        return (
                          <g key={idx}>
                            <circle cx={x} cy={y} r="4" fill="#2563eb" opacity="0.4" />
                            <line
                              x1="100"
                              y1="60"
                              x2={x}
                              y2={y}
                              stroke="#2563eb"
                              strokeWidth="0.5"
                              opacity="0.2"
                            />
                          </g>
                        )
                      })}
                    </svg>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 lg:py-36 overflow-hidden"
        style={{
          background: '#0a0e1a',
        }}
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
              The AI Revolution Cannot Survive on Digital Trash
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
              Join the waitlist to be among the first to integrate MarginT&apos;s trust infrastructure into your data pipeline.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/demo"
                className="bg-mt-blue text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mt-blue-deep hover:shadow-glow transition-all duration-300 active:scale-[0.97]"
              >
                Join the Waitlist
              </Link>
              <Link
                to="/about"
                className="bg-transparent text-white border border-white/20 px-7 py-3.5 rounded-full text-sm font-medium hover:border-white/40 transition-all duration-300"
              >
                Contact Sales
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
