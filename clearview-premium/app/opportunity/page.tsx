'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function OpportunityPage() {
  const router = useRouter()
  const [selectedState, setSelectedState] = useState('')

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
  ]

  const handleViewRoles = () => {
    if (selectedState) {
      router.push(`/roles/${selectedState.toLowerCase().replace(/\s+/g, '-')}`)
    }
  }
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Unlimited Earning Potential',
      description: 'No salary cap. Top reps consistently earn $3K+ per week. Your effort determines your income.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Comprehensive Training',
      description: 'Step-by-step coaching from day one. Learn proven scripts, objection handling, and closing techniques.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: 'Paid Travel & Lodging',
      description: 'We cover approved flights and hotels. Focus on results while we handle logistics.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Weekly Commissions',
      description: 'Get paid every week. Transparent commission structure with no hidden fees.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Career Growth',
      description: 'Clear path to team lead positions. Manage reps, coordinate logistics, earn bonuses.',
    },
    {
      icon: (
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Support System',
      description: 'Work with a team that pushes each other to succeed. Daily coaching and feedback.',
    },
  ]

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
      <section className="py-32 bg-gradient-to-br from-bg-light to-bg-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display-lg mb-6">The Opportunity</h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              A career where your effort directly determines your income. No caps, no limits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-bg-lighter">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md mb-4">What You Get</h2>
            <p className="text-xl text-gray-600">Everything you need to succeed.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl border-2 border-gray-100 hover:border-neon transition-all duration-300 hover:shadow-xl group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-charcoal text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-display-md mb-4">Open Positions</h2>
            <p className="text-xl text-gray-400">Choose your path.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-neon transition-all duration-300"
              >
                <h3 className="text-2xl font-display font-bold mb-2">{role.title}</h3>
                <div className="text-neon font-bold text-xl mb-4">{role.pay}</div>
                <p className="text-gray-300 mb-6">{role.description}</p>
                <div className="space-y-2 mb-6">
                  {role.responsibilities.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <span className="text-neon mr-2 mt-1">✓</span>
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/apply" className="btn-primary w-full justify-center">
                  Apply for {role.title}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View Roles by State */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-display font-bold mb-4 text-center">
                View Roles in Your Area
              </h3>
              <p className="text-gray-300 text-center mb-6">
                These positions are available nationwide. Select your state to see openings in your area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg bg-white text-gray-900 border-2 border-gray-300 focus:border-neon focus:outline-none transition-colors"
                >
                  <option value="">Select your state...</option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleViewRoles}
                  disabled={!selectedState}
                  className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  View Roles
                </button>
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
            <h2 className="text-display-md mb-6">Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a call with our team. We'll walk you through everything.
            </p>
            <Link href="/apply" className="btn-primary text-xl px-12 py-5">
              Schedule Intro Call
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
