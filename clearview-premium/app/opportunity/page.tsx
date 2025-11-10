'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function OpportunityPage() {
  const benefits = [
    {
      icon: '💰',
      title: 'Unlimited Earning Potential',
      description: 'No salary cap. Top reps consistently earn $3K+ per week. Your effort determines your income.',
    },
    {
      icon: '📚',
      title: 'Comprehensive Training',
      description: 'Step-by-step coaching from day one. Learn proven scripts, objection handling, and closing techniques.',
    },
    {
      icon: '✈️',
      title: 'Paid Travel & Lodging',
      description: 'We cover approved flights and hotels. Focus on results while we handle logistics.',
    },
    {
      icon: '📈',
      title: 'Weekly Commissions',
      description: 'Get paid every week. Transparent commission structure with no hidden fees.',
    },
    {
      icon: '🎯',
      title: 'Career Growth',
      description: 'Clear path to team lead positions. Manage reps, coordinate logistics, earn bonuses.',
    },
    {
      icon: '🤝',
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
      <section className="py-32 bg-gradient-to-br from-white to-gray-50">
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
      <section className="py-24 bg-white">
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
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
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
