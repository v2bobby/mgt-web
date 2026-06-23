# MarginT — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19.0 | UI framework |
| `react-dom` | ^19.0 | React DOM renderer |
| `react-router-dom` | ^7.0 | Multi-page routing |
| `three` | ^0.172 | 3D particle system (Hero) |
| `gsap` | ^3.12 | Scroll-triggered animations |
| `lenis` | ^1.2 | Smooth scroll |
| `lucide-react` | ^0.460 | Icon library |
| `tailwindcss` | ^4.0 | Utility CSS |
| `@tailwindcss/vite` | ^4.0 | Tailwind Vite integration |
| `typescript` | ^5.7 | Type safety |
| `vite` | ^6.0 | Build tool |
| `@vitejs/plugin-react` | ^4.0 | React Vite plugin |
| `@types/three` | ^0.172 | Three.js types |
| `@types/react` | ^19.0 | React types |
| `@types/react-dom` | ^19.0 | React DOM types |

## Component Inventory

### Layout
| Component | Source | Notes |
|-----------|--------|-------|
| `Navbar` | Custom | Fixed header with scroll-aware transparency, mobile hamburger overlay |
| `Footer` | Custom | 4-column dark footer, shared across all pages |
| `Layout` | Custom | Wraps Navbar + Footer + Lenis init, handles scroll-to-top on route change |

### Pages
| Page | Route | Sections |
|------|-------|----------|
| `Home` | `/` | Hero (particle field), Trusted By, Problem, Solution, Use Cases, CTA |
| `Product` | `/product` | Hero, Feature Deep-Dives, Technical Differentiators |
| `BusinessModel` | `/business-model` | Hero, Revenue Streams, Scalability & Moat, Tech Leverage |
| `Demo` | `/demo` | Hero, Waitlist Form, FAQ |
| `Pricing` | `/pricing` | Hero, Pricing Tiers, Add-Ons |
| `Resources` | `/resources` | Hero, Featured Article, Article Grid |
| `About` | `/about` | Hero, Mission & Vision, Roadmap, CTA |
| `Founder` | `/founder` | Hero, Founder Story, Vision |

### Reusable Components
| Component | Source | Used On |
|-----------|--------|---------|
| `SectionHeader` | Custom | All pages — caption + H2 + optional subtitle centered |
| `FeatureCard` | Custom | Home (Solution), Product — icon + H3 + body + link |
| `StatBlock` | Custom | Home (Problem), Business Model (Tech Leverage) — large number + label |
| `PricingCard` | Custom | Pricing — tier name, price, features, CTA |
| `ArticleCard` | Custom | Resources — thumbnail + tag + title + meta |
| `Reveal` | Custom | All pages — GSAP ScrollTrigger fade-in-up wrapper |
| `ParticleField` | Custom (Three.js) | Home Hero only — 3D particle sphere |
| `TrustBadge` | Custom | Home (Trusted By) — placeholder logo slot |
| `UseCaseRow` | Custom | Home — alternating image/text layout |
| `TimelineItem` | Custom | About — left/right positioned milestone card |
| `AccordionItem` | Custom | Demo FAQ — collapsible Q/A |

### Hooks
| Hook | Purpose |
|------|---------|
| `useLenis` | Initialize Lenis, connect to GSAP ScrollTrigger |
| `useScrollReveal` | Attach GSAP ScrollTrigger fade-in-up to ref elements |
| `useParticleField` | Mount/unmount Three.js particle field on Home hero |

## Animation Implementation

| Animation | Library | Approach | Complexity |
|-----------|---------|----------|------------|
| Trust Particle Field | Three.js | BufferGeometry with 3000 points, PointsMaterial with AdditiveBlending, requestAnimationFrame loop with mouse lerp | **High** |
| Scroll-triggered fade-in-up | GSAP + ScrollTrigger | Shared Reveal component: `opacity: 0→1`, `y: 40→0`, `start: "top 85%"` | Medium |
| Staggered grid reveals | GSAP + ScrollTrigger | Same as above with `stagger: 0.1` on parent children | Medium |
| Stat counter | GSAP | `gsap.to(target, { innerText: value, snap: { innerText: 1 }, duration: 1.5 })` triggered by ScrollTrigger | Medium |
| Navbar background transition | CSS + scroll listener | Toggle class at 80vh scroll threshold, `transition: all 0.4s` | Low |
| Mobile menu slide | CSS | `transform: translateX(100%)` → `translateX(0)`, `transition: transform 0.3s ease` | Low |
| FAQ accordion | CSS + state | `max-height` transition or `grid-template-rows` animation | Low |
| Button hover/active | CSS | `hover:scale-102`, `active:scale-97`, `transition-all duration-300` | Low |
| Page transition (enter) | GSAP | Simple `opacity: 0→1` fade on mount | Low |

## State & Logic

- **Routing**: React Router v7 with `BrowserRouter`. No lazy loading needed (8 pages is small enough for single bundle).
- **Form State**: Waitlist form uses local React state (name, email, company, role, useCase). On submit: simulate 1.5s delay with `setTimeout`, then show success card. Store submitted emails in `localStorage`.
- **Scroll Management**: Lenis instance created once in Layout component. On route change: `lenis.scrollTo(0, { immediate: true })`. Lenis `on('scroll')` drives `ScrollTrigger.update()`.
- **Particle Lifecycle**: ParticleField mounts only on Home page. On unmount: dispose renderer, geometry, material; remove event listeners; cancel animation frame.
- **Mobile Detection**: Particle count reduces from 3000 to 1500 when `window.innerWidth < 768`.

## Other Key Decisions

- **Font Loading**: Geist variable font loaded via `@font-face` from local files in `/public/fonts/`. If files unavailable, use Google Fonts CDN or fallback to system font stack.
- **No shadcn/ui**: The design is fully custom with specific styling tokens. shadcn components would require heavy override. All components built from scratch with Tailwind.
- **No Next.js**: The project uses React + Vite + React Router. All pages are client-side rendered. No SSR needed (content is static/marketing).
- **Image Strategy**: All visuals are either CSS gradients, SVG line-art, or placeholder divs. No external image assets needed for initial build. Founder portrait and blog images can be added later.
- **Three.js Raw (no React Three Fiber)**: The particle field is a single isolated canvas. Using raw Three.js avoids R3F overhead and keeps the implementation explicit and lightweight.
