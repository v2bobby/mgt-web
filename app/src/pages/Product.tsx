import Reveal from '@/components/Reveal'
import SectionHeader from '@/components/SectionHeader'

const features = [
  {
    title: 'Data Authenticity Engine',
    body: 'The DAE is the brain of MarginT. It employs three primary detection vectors:',
    items: [
      'Embedding Similarity Analysis — detects semantic duplicates even when phrasing is altered.',
      'Synthetic Fingerprinting — algorithms trained to recognize statistical signatures of LLM-generated content.',
      'Anomaly Detection — identifies submission patterns deviating from natural human behavior, flagging bot-driven data farms.',
    ],
    visual: (
      <svg viewBox="0 0 240 160" className="w-full max-w-[320px]" fill="none">
        <rect x="20" y="60" width="60" height="40" rx="8" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
        <text x="50" y="85" textAnchor="middle" fill="#5a6270" fontSize="10">Input</text>
        <line x1="80" y1="80" x2="110" y2="80" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
        <rect x="110" y="40" width="80" height="80" rx="8" stroke="#2563eb" strokeWidth="2" opacity="0.6" />
        <text x="150" y="75" textAnchor="middle" fill="#0a0e1a" fontSize="10" fontWeight="500">DAE</text>
        <text x="150" y="90" textAnchor="middle" fill="#5a6270" fontSize="8">Engine</text>
        <line x1="190" y1="80" x2="220" y2="80" stroke="#2563eb" strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
        <rect x="220" y="60" width="40" height="40" rx="8" stroke="#2563eb" strokeWidth="1.5" opacity="0.4" />
        <text x="240" y="85" textAnchor="middle" fill="#5a6270" fontSize="10">Output</text>
        {[30, 50, 70, 90, 110].map((y, i) => (
          <circle key={i} cx={150} cy={y} r="2" fill="#2563eb" opacity="0.2" />
        ))}
      </svg>
    ),
    reverse: false,
  },
  {
    title: 'Proof-of-Data Protocol',
    body: 'PoD is a lightweight metadata wrapper assigned to every data point. It tracks:',
    items: [
      'Source Origin — cryptographically signed identity of the submitter.',
      'Transformation History — a ledger of how the data was cleaned or modified.',
      'Quality Score — a probabilistic trust score between 0 and 1.',
    ],
    visual: (
      <svg viewBox="0 0 240 160" className="w-full max-w-[320px]" fill="none">
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={40}
              y={20 + i * 35}
              width="160"
              height="28"
              rx="6"
              stroke="#2563eb"
              strokeWidth="1"
              opacity={0.3 + i * 0.15}
            />
            <rect x={50} y={28 + i * 35} width="40" height="12" rx="3" fill="#2563eb" opacity="0.15" />
            <rect x={100} y={28 + i * 35} width="60" height="12" rx="3" fill="#2563eb" opacity="0.1" />
            <rect x={170} y={28 + i * 35} width="20" height="12" rx="3" fill="#2563eb" opacity="0.2" />
          </g>
        ))}
        <line x1="120" y1="48" x2="120" y2="55" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="83" x2="120" y2="90" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="118" x2="120" y2="125" stroke="#2563eb" strokeWidth="1" opacity="0.3" />
      </svg>
    ),
    reverse: true,
  },
  {
    title: 'API/SDK Gateway',
    body: 'MarginT is designed for plug-and-play integration. A single API call wraps your data ingestion endpoints with verification, ensuring only high-score data triggers expensive compute or reward distributions.',
    items: [],
    code: true,
    visual: (
      <svg viewBox="0 0 240 160" className="w-full max-w-[320px]" fill="none">
        <rect x="20" y="20" width="200" height="120" rx="8" fill="#0a0e1a" />
        <text x="35" y="50" fill="#2563eb" fontSize="9" fontFamily="monospace">import {'{ marginT }'} from '@marginT/sdk'</text>
        <text x="35" y="70" fill="#5a6270" fontSize="9" fontFamily="monospace" />
        <text x="35" y="90" fill="#06b6d4" fontSize="9" fontFamily="monospace">const verified = await marginT</text>
        <text x="35" y="105" fill="#06b6d4" fontSize="9" fontFamily="monospace">  .verify(data, {'{'}</text>
        <text x="55" y="120" fill="#ffffff" fontSize="9" fontFamily="monospace">    threshold: 0.85,</text>
      </svg>
    ),
    reverse: false,
  },
]

const stats = [
  { value: '<50ms', label: 'Verification latency per data point' },
  { value: '99.7%', label: 'Synthetic content detection accuracy' },
  { value: '10M+', label: 'Daily verifications at scale' },
  { value: 'Zero', label: 'Trust required — cryptographically proven' },
]

export default function Product() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption-accent">Product</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text max-w-4xl mx-auto">
              Verify Every Data Point. Secure Every Pipeline.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg leading-relaxed text-mt-text-secondary max-w-3xl mx-auto">
              MarginT provides end-to-end data verification infrastructure — from ingestion to training, from marketplace transactions to decentralized validation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Feature Deep-Dives */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20 ${
                idx < features.length - 1 ? 'border-b border-mt-border' : ''
              }`}
            >
              <div className={feature.reverse ? 'lg:order-2' : ''}>
                <Reveal>
                  <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-medium text-mt-text leading-tight tracking-[-0.02em]">
                    {feature.title}
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 text-mt-text-secondary leading-relaxed">{feature.body}</p>
                </Reveal>
                {feature.items.length > 0 && (
                  <ul className="mt-6 space-y-3">
                    {feature.items.map((item, i) => (
                      <Reveal key={i} delay={0.15 + i * 0.05}>
                        <li className="flex items-start gap-3">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-mt-blue flex-shrink-0" />
                          <span className="text-mt-text-secondary">{item}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                )}
                {feature.code && (
                  <Reveal delay={0.2}>
                    <div className="mt-6 bg-mt-dark rounded-lg p-6 overflow-x-auto">
                      <pre className="text-sm font-mono text-white/90 leading-relaxed">
                        <code>
                          <span className="text-purple-400">import</span>{' '}
                          <span className="text-yellow-300">{'{ marginT }'}</span>{' '}
                          <span className="text-purple-400">from</span>{' '}
                          <span className="text-green-400">&apos;@marginT/sdk&apos;</span>
                          {'\n\n'}
                          <span className="text-blue-400">const</span>{' '}
                          <span className="text-white">verified</span>{' '}
                          <span className="text-white">=</span>{' '}
                          <span className="text-purple-400">await</span>{' '}
                          <span className="text-white">marginT</span>
                          <span className="text-white">.</span>
                          <span className="text-cyan-400">verify</span>
                          <span className="text-white">(data, {'{'}</span>
                          {'\n  '}
                          <span className="text-white">threshold:</span>{' '}
                          <span className="text-orange-400">0.85</span>
                          <span className="text-white">,</span>
                          {'\n  '}
                          <span className="text-white">provenance:</span>{' '}
                          <span className="text-orange-400">true</span>
                          {'\n'}
                          <span className="text-white">{'})'}</span>
                        </code>
                      </pre>
                    </div>
                  </Reveal>
                )}
              </div>
              <Reveal
                delay={0.15}
                direction={feature.reverse ? 'right' : 'left'}
                className={feature.reverse ? 'lg:order-1' : ''}
              >
                <div className="bg-mt-surface rounded-xl p-8 border border-mt-border flex items-center justify-center min-h-[280px]">
                  {feature.visual}
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Differentiators */}
      <section className="bg-mt-surface py-28 lg:py-36">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <SectionHeader title="Why MarginT?" />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.value} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-6 shadow-sm border border-mt-border">
                  <p className="font-mono text-3xl text-mt-blue font-medium">{stat.value}</p>
                  <p className="text-sm text-mt-text-secondary mt-2">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
