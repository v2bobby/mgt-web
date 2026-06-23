import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

const featuredArticle = {
  tag: 'Featured',
  title: 'Understanding Model Collapse: Why AI Needs Verified Data',
  body: 'A deep dive into the research behind model collapse and how data verification infrastructure prevents degradation in machine learning systems.',
  meta: '5 min read · Jan 15, 2025',
}

const articles = [
  { title: 'The Proof-of-Data Protocol Explained', category: 'Engineering', readTime: 8, date: 'Feb 3, 2025' },
  { title: 'Building Trust in Decentralized Data Markets', category: 'Web3', readTime: 6, date: 'Jan 28, 2025' },
  { title: 'Synthetic Data Detection: A Technical Overview', category: 'Engineering', readTime: 10, date: 'Jan 20, 2025' },
  { title: "MarginT's 2026 Roadmap", category: 'Company', readTime: 4, date: 'Jan 12, 2025' },
  { title: 'Enterprise AI Readiness: The Data Audit', category: 'Enterprise', readTime: 7, date: 'Jan 5, 2025' },
  { title: 'The Future of Data Provenance', category: 'Research', readTime: 9, date: 'Dec 28, 2024' },
]

export default function Resources() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mt-surface pt-32 pb-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16 text-center">
          <Reveal>
            <p className="caption-accent">Resources</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-4 text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.05] tracking-[-0.03em] text-mt-text max-w-4xl mx-auto">
              Insights on AI, Data, and Digital Trust
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <Reveal>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-mt-border grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-video lg:aspect-auto bg-gradient-to-br from-mt-blue/20 to-mt-blue/5 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-24 h-24 opacity-40" fill="none">
                  <circle cx="60" cy="60" r="45" stroke="#2563eb" strokeWidth="2" />
                  <path d="M60 30 L60 60 L85 75" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="60" cy="60" r="5" fill="#2563eb" />
                </svg>
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <span className="inline-block bg-mt-blue/10 text-mt-blue text-xs px-3 py-1 rounded-full font-medium w-fit">
                  {featuredArticle.tag}
                </span>
                <h2 className="mt-4 text-2xl font-medium text-mt-text leading-tight tracking-[-0.01em]">
                  {featuredArticle.title}
                </h2>
                <p className="mt-4 text-mt-text-secondary leading-relaxed">
                  {featuredArticle.body}
                </p>
                <p className="mt-4 text-sm text-mt-text-secondary">{featuredArticle.meta}</p>
                <Link
                  to="#"
                  className="mt-4 text-mt-blue font-medium text-sm inline-flex items-center gap-1 hover:underline"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Article Grid */}
      <section className="bg-white py-16 pb-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <Reveal key={article.title} delay={i * 0.08}>
                <Link to="#" className="group block">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-mt-border hover:shadow-md transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-mt-surface to-mt-elevated" />
                    <div className="p-6">
                      <span className="inline-block bg-mt-elevated text-mt-text-secondary text-xs px-2.5 py-0.5 rounded-full font-medium">
                        {article.category}
                      </span>
                      <h3 className="mt-3 text-base font-medium text-mt-text leading-snug group-hover:text-mt-blue transition-colors">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-xs text-mt-text-secondary">
                        {article.readTime} min read · {article.date}
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
