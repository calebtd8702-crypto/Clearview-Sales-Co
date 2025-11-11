'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroProps {
  headline: string
  subhead: string
  primaryCTA: { text: string; href: string }
  secondaryCTA?: { text: string; href: string }
}

export default function Hero({ headline, subhead, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://i.imgur.com/Xeq3wNf.png)' }}
      />

      {/* Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-blue-900/50 to-blue-900/70" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 -right-1/4 w-1/2 h-1/2 bg-neon/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute bottom-0 -left-1/4 w-1/2 h-1/2 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-[6rem] lg:text-[7rem] font-display font-bold mb-4 md:mb-8 leading-tight md:leading-none text-balance text-white"
          >
            {headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-sm sm:text-base md:text-xl lg:text-2xl text-white mb-6 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            {subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Link href={primaryCTA.href} className="inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold bg-charcoal text-white rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto">
              {primaryCTA.text}
              <svg
                className="ml-2 w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            {secondaryCTA && (
              <Link href={secondaryCTA.href} className="inline-flex items-center justify-center px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-lg font-semibold border-2 border-white text-white rounded-full hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                {secondaryCTA.text}
              </Link>
            )}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-32 sm:bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.svg
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </motion.svg>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
