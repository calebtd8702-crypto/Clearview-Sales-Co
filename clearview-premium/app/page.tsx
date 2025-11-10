'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Hero from '@/components/ui/Hero'
import StatsSection from '@/components/ui/StatsSection'
import CTASection from '@/components/ui/CTASection'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero
        headline="Earn based on how hard you work."
        subhead="ClearView trains you step by step. Weekly commissions. Top reps make $3K+ per week."
        primaryCTA={{ text: 'Schedule Intro Call', href: '/apply' }}
        secondaryCTA={{ text: 'Apply Now', href: '/apply' }}
      />

      {/* Stats Section */}
      <StatsSection />

      {/* How It Works */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-display-md mb-6">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We handle everything so you can focus on earning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Get Trained',
                description: 'Step-by-step coaching from day one. Learn the system that works.',
              },
              {
                step: '02',
                title: 'Start Selling',
                description: 'Hit the field with proven scripts, support, and real-time feedback.',
              },
              {
                step: '03',
                title: 'Get Paid Weekly',
                description: 'Earn commissions every week. No caps. The harder you work, the more you earn.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -left-4 top-0 text-8xl font-display font-bold text-gray-100 group-hover:text-neon/20 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10 pt-8">
                  <h3 className="text-2xl font-display font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-display-md mb-6">Real Results</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from reps who are earning.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                quote: "Before joining Clear View, I had never worked in sales. The team trained me from day one and showed me that I can control how much money I make with my effort. It's been a game changer.",
                author: 'Ben E.',
                role: 'Sales Representative',
              },
              {
                quote: "The training is unmatched. They don't just throw you out there - they teach you the exact system, practice with you, and support you every step. I'm making more than I ever did.",
                author: 'Sarah K.',
                role: 'Team Lead',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-neon/50 transition-colors"
              >
                <p className="text-lg italic mb-6 text-gray-300">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </main>
  )
}
