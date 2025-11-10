'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function AboutPage() {
  const values = [
    {
      title: 'Integrity First',
      description: 'We do what we say, every time. No gimmicks, no false promises.',
    },
    {
      title: 'People Over Numbers',
      description: 'Success starts with taking care of our team. You're not a number here.',
    },
    {
      title: 'Continuous Growth',
      description: 'We invest in training, coaching, and development. Always improving.',
    },
    {
      title: 'Accountability',
      description: 'We hold ourselves to the highest standards. Own your results.',
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-charcoal to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display-lg mb-6">About Clear View</h1>
            <p className="text-2xl text-gray-300 leading-relaxed">
              We build and lead the most reliable sales teams across the Midwest.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-display-md mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in the heartland of Iowa, Clear View Sales Co. started with a simple belief: great sales teams are built on trust, training, and transparency.
                </p>
                <p>
                  What began as a small operation has grown into a respected name in field sales, partnering with national brands to bring their products directly to customers across the Midwest and beyond.
                </p>
                <p>
                  We don't just hire reps—we train them, support them, and build careers with them.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-square bg-gradient-to-br from-neon/20 to-charcoal/20 rounded-3xl"
            >
              {/* Placeholder for image */}
              <div className="w-full h-full flex items-center justify-center text-6xl">
                📍
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-display-md mb-6">Leadership</h2>
            <p className="text-xl text-gray-600">
              Led by founder Michael Purdy, our leadership team brings years of combined experience in direct sales, team management, and customer relations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto bg-white p-12 rounded-3xl shadow-xl"
          >
            <p className="text-xl text-gray-700 leading-relaxed italic">
              "We believe in leading by example. Our leaders have walked the same routes, knocked the same doors, and faced the same challenges as our reps. We know what it takes to succeed because we've done it."
            </p>
            <div className="mt-8 text-center">
              <p className="font-display font-bold text-2xl">Michael Purdy</p>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">What we stand for.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-neon/5 to-transparent border-2 border-gray-100 hover:border-neon transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold mb-3 text-charcoal">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-display-md mb-6">Ready to Join Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a team that values integrity, hard work, and your success.
            </p>
            <Link href="/apply" className="btn-primary text-xl px-12 py-5">
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
