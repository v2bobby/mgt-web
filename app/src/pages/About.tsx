import { Link } from 'react-router-dom'
import Reveal from '@/components/Reveal'

const milestones = [
  {
    year: '2021',
    title: 'Founded',
    body: 'Founded with a vision to simplify digital transformation and bring trust to the AI data pipeline.',
    side: 'left' as const,
  },
  {
    year: '2023',
    title: 'Growth',
    body: 'Reached 100+ clients across 12 countries and validated the Proof-of-Data protocol with early enterprise partners.',
    side: 'right' as const,
  },
  {
    year: '2025',
    title: 'Innovation',
    body: 'Launched proprietary enterprise management framework and expanded the Data Authenticity Engine to multi-modal detection.',
    side: 'left' as const,
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption-accent">About</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text max-w-4xl mx-auto">
              Building the Foundation of Digital Truth
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary max-w-3xl mx-auto">
              MarginT was founded on a simple conviction: the AI revolution cannot survive on a diet of digital trash. We are building the essential sanitation and verification infrastructure required for the next decade of machine intelligence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text leading-tight tracking-[-0.02em]">
                  Our Mission
                </h2>
                <p className="mt-4 text-mt-text-secondary leading-relaxed">
                  To ensure that every data point entering an AI pipeline is authentic, traceable, and high-signal. We believe that verified data is not a luxury — it is a prerequisite for trustworthy artificial intelligence.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div>
                <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text leading-tight tracking-[-0.02em]">
                  Our Vision
                </h2>
                <p className="mt-4 text-mt-text-secondary leading-relaxed">
                  By 2028, the MarginT Score will be the industry-standard metric for data quality. We envision a fully decentralized verification network where validators earn fees for running detection nodes, creating a self-sustaining ecosystem of digital trust.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="bg-mt-surface py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text text-center tracking-[-0.02em]">
              Our Roadmap
            </h2>
          </Reveal>
          <div className="mt-16 max-w-3xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-mt-border -translate-x-1/2 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 0.15}>
                  <div className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${i > 0 ? 'lg:mt-12' : ''}`}>
                    {/* Dot */}
                    <div className="hidden lg:block absolute left-1/2 top-6 -translate-x-1/2 z-10">
                      <div className="w-3 h-3 rounded-full bg-mt-blue" />
                    </div>

                    {m.side === 'left' ? (
                      <>
                        <div className="lg:text-right lg:pr-12">
                          <div className="bg-white rounded-xl p-6 shadow-sm border border-mt-border">
                            <span className="font-mono text-sm text-mt-blue font-medium">{m.year}</span>
                            <h3 className="mt-2 text-lg font-medium text-mt-text">{m.title}</h3>
                            <p className="mt-2 text-sm text-mt-text-secondary leading-relaxed">{m.body}</p>
                          </div>
                        </div>
                        <div />
                      </>
                    ) : (
                      <>
                        <div className="hidden lg:block" />
                        <div className="lg:pl-12">
                          <div className="bg-white rounded-xl p-6 shadow-sm border border-mt-border">
                            <span className="font-mono text-sm text-mt-blue font-medium">{m.year}</span>
                            <h3 className="mt-2 text-lg font-medium text-mt-text">{m.title}</h3>
                            <p className="mt-2 text-sm text-mt-text-secondary leading-relaxed">{m.body}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 overflow-hidden"
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
              Want to Learn More?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-white/60 max-w-2xl mx-auto">
              Reach out to our team for partnership inquiries, press, or general questions.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="mailto:somto.okpaudo@margint.co"
              className="mt-4 text-mt-blue hover:text-white transition-colors text-sm font-medium inline-block"
            >
              somto.okpaudo@margint.co
            </a>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6">
              <Link
                to="/founder"
                className="inline-block bg-mt-blue text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-mt-blue-deep hover:shadow-glow transition-all duration-300 active:scale-[0.97]"
              >
                Meet the Founder
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
