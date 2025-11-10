'use client'

import { motion } from 'framer-motion'

export default function StatsSection() {
  const stats = [
    { value: '$3,000+', label: 'Top Rep Weekly Earnings' },
    { value: '100%', label: 'Commission-Based' },
    { value: '2-4 weeks', label: 'Training Period' },
    { value: 'Weekly', label: 'Payouts' },
  ]

  return (
    <section className="py-24 bg-charcoal text-white">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold mb-2 text-neon">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
