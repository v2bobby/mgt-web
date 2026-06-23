import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLenis } from '@/hooks/useLenis'
import { getLenis } from '@/hooks/useLenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Layout({ children }: { children: React.ReactNode }) {
  useLenis()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    const lenis = getLenis()
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
    ScrollTrigger.refresh()
  }, [location.pathname])

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
