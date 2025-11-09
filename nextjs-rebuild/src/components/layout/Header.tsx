'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#company', label: 'Company' },
    { href: '#roles', label: 'Careers' },
  ]

  const trackCTAClick = (location: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { location })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary-dark shadow-lg">
      <nav className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/mikelogo.png"
              alt="ClearView Sales Company"
              width={160}
              height={40}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-primary-light font-semibold hover:text-white transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => trackCTAClick('header')}
              className="bg-primary-blue text-white px-5 py-2.5 rounded-lg font-semibold
                       hover:bg-primary-highlight transition-all duration-300
                       hover:-translate-y-0.5 shadow-md"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-primary-light hover:text-white transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary-dark border-t border-gray-700 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-primary-light font-semibold hover:bg-gray-700 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => {
                setMobileMenuOpen(false)
                trackCTAClick('mobile-header')
              }}
              className="block mx-4 mt-4 text-center bg-primary-blue text-white px-5 py-3 rounded-lg font-semibold
                       hover:bg-primary-highlight transition-colors"
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
