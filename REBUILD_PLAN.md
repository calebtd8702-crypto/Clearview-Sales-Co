# ClearView Sales Co. - Website Rebuild Plan

## Overview
Complete rebuild of ClearView Sales Co. website from static HTML to modern Next.js application with 10x improvements in performance, accessibility, UX, and conversion optimization.

## What's Being Improved

### 1. **Performance** (Current: ~60-70 → Target: 90+ mobile, 95+ desktop)
- ✅ Static HTML → Next.js with SSR/SSG for faster initial load
- ✅ Single 1.2MB image → Optimized responsive images (WebP/AVIF, srcset)
- ✅ Inline styles → CSS modules + Tailwind (tree-shaking, purging)
- ✅ No lazy loading → Image lazy loading, preconnect for third parties
- ✅ No bundling → Webpack optimization, code splitting, minification

### 2. **Accessibility** (Current: Basic → Target: WCAG 2.1 AA)
- ✅ Missing semantic HTML → Proper landmarks, headings hierarchy
- ✅ No skip links → Keyboard navigation, skip to content
- ✅ Poor contrast in places → All text passes WCAG AA contrast
- ✅ No ARIA labels → Screen reader friendly with proper ARIA
- ✅ Mobile menu not accessible → Fully keyboard navigable menu

### 3. **SEO** (Current: Minimal → Target: Comprehensive)
- ✅ Basic meta tags → Full OpenGraph, Twitter Cards, canonical URLs
- ✅ No structured data → Schema.org JSON-LD (Organization, FAQ, Review)
- ✅ Missing alt text → All images have descriptive alt text
- ✅ No sitemap → Dynamic sitemap.xml and robots.txt
- ✅ Poor mobile UX → Mobile-first, responsive, fast

### 4. **User Experience**
- ✅ Generic design → Premium, modern aesthetic with generous whitespace
- ✅ Hidden mobile text → Smart responsive typography with better mobile UX
- ✅ Basic buttons → Prominent CTAs with microcopy and hover states
- ✅ No form fallback → Calendly + fallback contact form
- ✅ Static testimonial → Dynamic testimonial carousel with real images
- ✅ No social proof → Trust indicators, stats, multi-testimonial system

### 5. **Conversion Optimization**
- ✅ Buried Calendly → Multiple prominent "Book a Call" CTAs throughout
- ✅ No event tracking → GA4 + Meta Pixel with conversion events
- ✅ No A/B testing → Structure ready for variant testing
- ✅ Generic copy → Benefit-driven headlines with clear time commitment
- ✅ No urgency → Strategic scarcity and social proof elements

### 6. **Developer Experience**
- ✅ Single HTML file → Modular component architecture
- ✅ No version control workflow → Git-friendly, environment-based config
- ✅ Manual updates → CMS-ready (Markdown/MDX or headless CMS)
- ✅ No testing → Jest + RTL unit tests, accessibility tests
- ✅ Manual deployment → One-command Vercel deployment

### 7. **Maintainability**
- ✅ Inline styles → Design system with tokens and reusable components
- ✅ Hardcoded content → Content separated from presentation
- ✅ No documentation → Comprehensive README and component docs
- ✅ Scattered brand assets → Centralized theme configuration

## Tech Stack

**Core:**
- Next.js 14 (App Router) - SSR/SSG, API routes, optimizations
- React 18 - Component architecture
- TypeScript - Type safety
- Tailwind CSS 3 - Utility-first styling with custom theme

**Features:**
- next/image - Automatic image optimization
- next/font - Font optimization (Futura + Inter fallback)
- React Hook Form - Form handling
- Framer Motion - Smooth animations
- Calendly React - Embedded scheduling

**Development:**
- Jest + React Testing Library - Testing
- axe-core - Accessibility testing
- ESLint + Prettier - Code quality
- Husky - Pre-commit hooks

**Deployment:**
- Vercel - Hosting and CDN
- Vercel Analytics - Performance monitoring

## Project Structure

```
clearview-nextjs/
├── public/
│   ├── images/
│   │   ├── hero-desktop.webp
│   │   ├── hero-mobile.webp
│   │   ├── logo.svg
│   │   └── testimonials/
│   ├── fonts/
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Home page
│   │   ├── globals.css          # Global styles
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts     # Contact form API
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── MobileMenu.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Mission.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── Roles.tsx
│   │   │   ├── AboutCompany.tsx
│   │   │   └── ScheduleCall.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── CalendlyEmbed.tsx
│   │   │   └── ContactForm.tsx
│   │   └── SEO/
│   │       └── MetaTags.tsx
│   ├── lib/
│   │   ├── analytics.ts         # GA4 + Meta Pixel
│   │   └── constants.ts         # Site-wide constants
│   ├── content/
│   │   ├── testimonials.ts
│   │   ├── roles.ts
│   │   └── company.ts
│   └── types/
│       └── index.ts
├── tests/
│   ├── components/
│   └── accessibility/
├── .env.local.example
├── .eslintrc.json
├── .prettierrc
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## Design System

### Brand Colors
```
Primary Dark: #484848 (Headers, footer)
Accent Blue: #427AA3 (CTAs, links)
Light Blue: #DFEDF5 (Backgrounds, cards)
Highlight: #6FB1D9 (Hover states)
White: #FFFFFF
Success: #10b981 (Checkmarks, positive actions)
```

### Typography
- **Headings**: Futura Light (fallback: Inter, Helvetica, sans-serif)
- **Body**: Inter (system font stack)
- **Scale**: 3rem (H1) → 2rem (H2) → 1.5rem (H3) → 1rem (body)

### Spacing Scale
- xs: 0.5rem, sm: 1rem, md: 1.5rem, lg: 2rem, xl: 3rem, 2xl: 4rem, 3xl: 6rem

### Component Patterns
- **Cards**: Rounded (12px), shadow, hover lift effect
- **Buttons**: Solid primary, outline secondary, ghost tertiary
- **Sections**: Alternating backgrounds for visual rhythm
- **Grid**: 12-column responsive grid
- **Breakpoints**: sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px

## Conversion Funnel

1. **Hero** → "Book a Call" (primary CTA)
2. **Mission** → Social proof, establish trust
3. **How It Works** → Testimonial sidebar (trust building)
4. **About Company** → Credibility, values
5. **Roles** → "Book a Call" per role (targeted CTAs)
6. **Schedule Call** → Calendly embed (primary conversion)
7. **Footer** → Contact info, final CTA

## Timeline & Milestones

- **Phase 1** (Day 1-2): Project setup, design system, core components
- **Phase 2** (Day 3-4): Page implementation, responsive design
- **Phase 3** (Day 5): Forms, Calendly, API routes
- **Phase 4** (Day 6): SEO, analytics, accessibility audit
- **Phase 5** (Day 7): Testing, performance optimization, deployment

## Success Metrics

**Performance:**
- Lighthouse: 90+ (mobile), 95+ (desktop)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Total Bundle Size: < 200kb (gzipped)

**Accessibility:**
- WCAG 2.1 AA compliance
- axe DevTools: 0 violations
- Keyboard navigation: 100% functional

**SEO:**
- All meta tags present
- Schema.org markup validated
- Mobile-friendly test: Pass
- Core Web Vitals: All green

**Conversion:**
- CTA visibility: Above fold on all devices
- Form completion rate: Track with GA4
- Calendly booking rate: Track with events

## Next Steps

1. Review and approve this plan
2. Set up GitHub repository
3. Configure Vercel project
4. Begin Phase 1 development
5. Weekly check-ins for feedback

---

**Prepared by:** Claude Code
**Date:** 2025-11-09
**Version:** 1.0
