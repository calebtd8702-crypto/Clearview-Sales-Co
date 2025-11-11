'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'

export default function StatRolesPage() {
  const params = useParams()
  const stateSlug = params.state as string

  // Convert slug back to readable state name
  const stateName = stateSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const roles = [
    {
      title: 'Field Sales Representative',
      pay: '$2,000/week average',
      description: 'Door-to-door consultative selling. 2-4 week travel tours. Weekly commission payouts.',
      responsibilities: [
        'Conduct in-person sales presentations',
        'Meet with potential customers daily',
        'Hit weekly sales targets',
        'Report daily metrics to team lead',
      ],
    },
    {
      title: 'Team Lead',
      pay: '$3,000/week average',
      description: 'Manage 4-8 reps. Coordinate logistics and travel. Performance-based bonuses.',
      responsibilities: [
        'Manage and coach sales team',
        'Plan routes and logistics',
        'Track team performance',
        'Conduct field training',
      ],
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 bg-gradient-to-br from-neon/10 to-bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block bg-neon/10 text-neon px-6 py-2 rounded-full font-semibold mb-6">
              {stateName}
            </div>
            <h1 className="text-display-lg mb-6">Open Positions in {stateName}</h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Join our growing team in {stateName}. Competitive pay, full training, and unlimited growth potential.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles Grid */}
      <section className="py-24 bg-bg-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md mb-4">Available Roles</h2>
            <p className="text-xl text-gray-600">Currently hiring for both positions.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-neon transition-all duration-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-display font-bold mb-2">{role.title}</h3>
                <div className="text-neon font-bold text-xl mb-4">{role.pay}</div>
                <p className="text-gray-600 mb-6">{role.description}</p>
                <div className="space-y-2 mb-6">
                  {role.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-neon mr-2 mt-1">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="btn-primary w-full justify-center">
                  Apply for {role.title}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-display-md text-center mb-12">Why Join Clear View?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Weekly Pay</h3>
                <p className="text-gray-400">Get paid every week with transparent commissions</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Full Training</h3>
                <p className="text-gray-400">Step-by-step coaching from day one</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Travel & Lodging</h3>
                <p className="text-gray-400">We cover approved flights and hotels</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-display-md mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Apply now to join our team in {stateName}. We'll reach out within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/apply" className="btn-primary text-xl px-12 py-5">
                Apply Now
              </Link>
              <Link href="/opportunity" className="btn-secondary text-xl px-12 py-5">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
