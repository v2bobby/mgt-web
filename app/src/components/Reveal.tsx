import { useRef, useEffect, type ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
  distance?: number
}

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  distance = 40,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const directions: Record<string, { x: number; y: number }> = {
      up: { x: 0, y: distance },
      down: { x: 0, y: -distance },
      left: { x: distance, y: 0 },
      right: { x: -distance, y: 0 },
    }

    const dir = directions[direction]

    gsap.set(el, { opacity: 0, x: dir.x, y: dir.y })

    const anim = gsap.to(el, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    return () => {
      anim.kill()
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill()
      })
    }
  }, [delay, direction, duration, distance])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
