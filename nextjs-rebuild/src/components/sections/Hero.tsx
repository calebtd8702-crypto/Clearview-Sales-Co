'use client'

import Image from 'next/image'

export default function Hero() {
  const trackCTAClick = (button: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { location: `hero-${button}` })
    }
  }

  return (
    <section className="relative min-h-screen flex items-end pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/xwcURf0.png"
          alt="ClearView Sales Team"
          fill
          className="object-cover object-[45%_-200px]"
          priority
          quality={90}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 to-blue-900/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          {/* Hide text on mobile, show on desktop */}
          <h1 className="hidden md:block text-4xl lg:text-6xl font-heading font-light text-white text-balance leading-tight">
            Join a high-performing sales team—travel & stay paid, weekly commissions.
          </h1>

          <p className="hidden md:block text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
            ClearView Sales builds high-performing field teams for national partners.
            We train, travel, and sell—together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <a
              href="#apply"
              onClick={() => trackCTAClick('book-call')}
              className="w-full sm:w-auto btn-primary text-center px-8 py-4 text-lg"
            >
              Book a Call
            </a>
            <a
              href="#roles"
              onClick={() => trackCTAClick('see-roles')}
              className="w-full sm:w-auto btn-secondary text-center px-8 py-4 text-lg"
            >
              See Roles
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
