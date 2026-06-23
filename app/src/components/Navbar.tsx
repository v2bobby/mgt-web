import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Product', path: '/product' },
  { label: 'Business Model', path: '/business-model' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Resources', path: '/resources' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const isHome = location.pathname === '/'
  const showSolidBg = scrolled || !isHome

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          showSolidBg
            ? 'bg-white/90 backdrop-blur-md border-b border-mt-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src="/icon.png"
                alt=""
                className="h-8 w-8"
                draggable={false}
              />
              <span className="text-xl font-semibold tracking-tight text-mt-text">
                MarginT
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[15px] font-medium transition-colors ${
                      isActive
                        ? 'text-mt-blue'
                        : 'text-mt-text hover:text-mt-blue'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-4">
              <Link
                to="/demo"
                className="hidden sm:inline-flex bg-mt-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-mt-blue-deep transition-colors active:scale-[0.97]"
              >
                Launch Demo
              </Link>
              <button
                onClick={() => setMenuOpen(true)}
                className="lg:hidden p-2 text-mt-text hover:text-mt-blue transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-white transition-transform duration-300 lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between h-[72px] px-6 border-b border-mt-border">
          <div className="flex items-center gap-2.5">
            <img src="/icon.png" alt="" className="h-8 w-8" draggable={false} />
            <span className="text-xl font-semibold tracking-tight text-mt-text">MarginT</span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 text-mt-text hover:text-mt-blue transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-2xl font-medium text-mt-text hover:text-mt-blue transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/demo"
            className="mt-4 bg-mt-blue text-white px-6 py-3 rounded-full text-lg font-medium text-center hover:bg-mt-blue-deep transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Launch Demo
          </Link>
        </div>
      </div>
    </>
  )
}
