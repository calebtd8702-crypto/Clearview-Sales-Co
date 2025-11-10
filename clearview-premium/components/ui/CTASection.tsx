'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="py-32 bg-gradient-to-br from-neon/5 to-neon/10">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-display-md mb-6">Ready to start earning?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Schedule a 15-minute intro call with our team. We'll walk you through the opportunity, answer your questions, and get you started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/apply" className="btn-primary text-xl px-12 py-5">
              Schedule Intro Call
            </Link>
            <Link href="/opportunity" className="btn-outline text-xl px-12 py-5">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
