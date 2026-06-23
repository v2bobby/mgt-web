import { Twitter, Linkedin, Mail } from 'lucide-react'
import Reveal from '@/components/Reveal'

export default function Founder() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Portrait */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-mt-elevated to-mt-surface border border-mt-border shadow-md flex items-center justify-center max-w-sm mx-auto lg:mx-0">
                  <span className="text-6xl font-light text-mt-text-secondary/30">OS</span>
                </div>
              </Reveal>
            </div>
            {/* Info */}
            <div className="lg:col-span-3">
              <Reveal delay={0.1}>
                <p className="caption-accent">Founder & CEO</p>
              </Reveal>
              <Reveal delay={0.2}>
                <h1 className="mt-4 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text">
                  Okpaudo Somtochukwu
                </h1>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary">
                  Visionary technologist and entrepreneur building the trust infrastructure for the AI economy. With a deep conviction that verified data is the foundation of trustworthy AI, Somtochukwu founded MarginT to solve the growing crisis of data authenticity threatening the entire machine learning ecosystem.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex items-center gap-3 mt-6">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-mt-elevated flex items-center justify-center text-mt-text-secondary hover:text-mt-blue hover:bg-mt-blue/10 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/okpaudo-somtochukwu-2b2b7b322/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-mt-elevated flex items-center justify-center text-mt-text-secondary hover:text-mt-blue hover:bg-mt-blue/10 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="mailto:somto.okpaudo@margint.co"
                    className="w-10 h-10 rounded-full bg-mt-elevated flex items-center justify-center text-mt-text-secondary hover:text-mt-blue hover:bg-mt-blue/10 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="bg-white py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-16">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text leading-tight tracking-[-0.02em]">
              The Origin of MarginT
            </h2>
          </Reveal>
          <div className="mt-6 space-y-6">
            <Reveal delay={0.1}>
              <p className="text-mt-text-secondary leading-relaxed">
                The idea for MarginT emerged from observing a fundamental paradox: as AI systems became more powerful, the data feeding them was becoming less reliable. Synthetic content, bot-generated submissions, and duplicate data farms were polluting the very foundation of machine intelligence.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-mt-text-secondary leading-relaxed">
                In 2025, Somtochukwu assembled a team of researchers and engineers to build what would become the Data Authenticity Engine — a system capable of detecting synthetic fingerprints, semantic duplicates, and anomalous submission patterns at scale.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-mt-text-secondary leading-relaxed">
                Today, MarginT stands at the intersection of cryptography, machine learning, and distributed systems — building the protocols and infrastructure that will define how the world verifies data for decades to come.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.25}>
            <blockquote className="mt-10 bg-mt-surface rounded-xl p-8 border-l-4 border-mt-blue">
              <p className="text-lg text-mt-text italic leading-relaxed">
                &ldquo;The AI revolution cannot survive on a diet of digital trash. We are not just building middleware; we are building the foundation of digital truth.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-mt-text-secondary font-medium">
                — Okpaudo Somtochukwu, Founder & CEO
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-mt-surface py-28 lg:py-36">
        <div className="max-w-3xl mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text tracking-[-0.02em]">
              A Note on the Future
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-mt-text-secondary leading-relaxed">
              We are at an inflection point. The next decade of AI progress will be determined not by model architecture alone, but by the quality of data those models consume. MarginT exists to ensure that quality — to make certain that the AI economy is built on a foundation of verified, authentic, high-signal data. I invite you to join us in building that future.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 font-serif italic text-2xl text-mt-text">
              Okpaudo Somtochukwu
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
