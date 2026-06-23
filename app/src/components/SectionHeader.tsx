import Reveal from './Reveal'

interface SectionHeaderProps {
  caption?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeader({
  caption,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {caption && (
        <Reveal delay={0}>
          <p className="caption-accent">{caption}</p>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <h2
          className={`mt-4 text-[clamp(2rem,3.5vw,3.5rem)] font-medium leading-[1.1] tracking-[-0.02em] ${
            light ? 'text-white' : 'text-mt-text'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.2}>
          <p
            className={`mt-6 text-lg leading-relaxed ${
              light ? 'text-white/70' : 'text-mt-text-secondary'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
