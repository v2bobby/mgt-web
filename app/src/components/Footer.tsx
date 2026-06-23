import { Link } from 'react-router-dom'
import { Twitter, Linkedin, Github } from 'lucide-react'

const productLinks = [
  { label: 'Features', path: '/product' },
  { label: 'API Docs', path: '/product' },
  { label: 'Use Cases', path: '/product' },
  { label: 'Security', path: '/product' },
]

const companyLinks = [
  { label: 'About', path: '/about' },
  { label: 'Founder', path: '/founder' },
  { label: 'Careers', path: '/about' },
  { label: 'Contact', path: '/about' },
]

const resourceLinks = [
  { label: 'Blog', path: '/resources' },
  { label: 'Documentation', path: '/product' },
  { label: 'Status', path: '/' },
  { label: 'Privacy', path: '/' },
]

export default function Footer() {
  return (
    <footer className="bg-mt-dark">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-20 lg:py-28">
        {/* Top Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <img src="/icon.png" alt="" className="h-8 w-8" draggable={false} />
              <span className="text-xl font-semibold tracking-tight text-white">MarginT</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Trust infrastructure for the AI economy.
            </p>
            <a
              href="mailto:somto.okpaudo@margint.co"
              className="mt-2 text-sm text-mt-blue hover:text-white transition-colors block"
            >
              somto.okpaudo@margint.co
            </a>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/okpaudo-somtochukwu-2b2b7b322/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-medium mb-4">Product</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-medium mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              &copy; 2025 MarginT. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <span>&middot;</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <span>&middot;</span>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
