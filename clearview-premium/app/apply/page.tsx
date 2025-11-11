'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import CalendlyEmbed from '@/components/ui/CalendlyEmbed'

export default function ApplyPage() {
  const router = useRouter()
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [experienceOption, setExperienceOption] = useState<'upload' | 'describe'>('upload')
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [selectedState, setSelectedState] = useState('')

  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgvrekar'

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    const formElement = e.currentTarget
    const formData = new FormData(formElement)

    // Add the resume file if uploaded
    if (experienceOption === 'upload' && resumeFile) {
      formData.append('resume', resumeFile)
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setFormSubmitted(true)
      } else {
        const data = await response.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setError('Failed to submit form. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0])
    }
  }

  const handleViewRoles = () => {
    if (selectedState) {
      router.push(`/roles/${selectedState.toLowerCase().replace(/\s+/g, '-')}`)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-neon/10 to-bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-display-lg mb-6">Let's Get Started</h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              Join our growing team with opportunities across the USA. Schedule your intro call or fill out a quick application below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* View Roles by State */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-gradient-to-br from-neon/5 to-bg-light p-8 rounded-2xl border-2 border-gray-200">
              <h3 className="text-2xl font-display font-bold mb-3 text-center">
                View Open Roles in Your Area
              </h3>
              <p className="text-gray-600 text-center mb-6">
                See available positions in your state before applying.
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

      {/* Two Column: Calendly + Quick Form */}
      <section className="py-16 bg-bg-lighter">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Calendly */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Option 1: Schedule a Call
              </h2>
              <p className="text-gray-600 mb-8">
                Book a 15-minute intro call with our team. We'll answer all your questions and walk you through next steps.
              </p>
              <div className="bg-white rounded-2xl p-4 shadow-lg">
                <CalendlyEmbed url="https://calendly.com/calebtd8702/intro-call" />
              </div>
            </motion.div>

            {/* Quick Apply Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-display font-bold mb-4">
                Option 2: Quick Apply
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out this quick form and we'll reach out within 24 hours.
              </p>

              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-neon focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-neon focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-neon focus:outline-none transition-colors"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label htmlFor="position" className="block text-sm font-semibold mb-2">
                      Position of Interest *
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-neon focus:outline-none transition-colors"
                    >
                      <option value="">Select a position</option>
                      <option value="field-rep">Field Sales Representative</option>
                      <option value="team-lead">Team Lead</option>
                      <option value="not-sure">Not Sure</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Sales Background
                    </label>
                    <div className="flex gap-6 mb-4">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="experienceOption"
                          value="describe"
                          checked={experienceOption === 'describe'}
                          onChange={() => setExperienceOption('describe')}
                          className="w-4 h-4 text-neon focus:ring-neon focus:ring-2"
                        />
                        <span className="ml-2 text-gray-700">Describe Experience</span>
                      </label>
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="experienceOption"
                          value="upload"
                          checked={experienceOption === 'upload'}
                          onChange={() => setExperienceOption('upload')}
                          className="w-4 h-4 text-neon focus:ring-neon focus:ring-2"
                        />
                        <span className="ml-2 text-gray-700">Upload Resume</span>
                      </label>
                    </div>

                    {experienceOption === 'describe' ? (
                      <textarea
                        id="experience"
                        name="experience"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-neon focus:outline-none transition-colors"
                        placeholder="Tell us about your previous sales experience..."
                      />
                    ) : (
                      <div>
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-neon focus:outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-neon file:text-white file:cursor-pointer hover:file:bg-neon/90"
                        />
                        {resumeFile && (
                          <p className="mt-2 text-sm text-gray-600">
                            Selected: {resumeFile.name}
                          </p>
                        )}
                        <p className="mt-2 text-xs text-gray-500">
                          Accepted formats: PDF, DOC, DOCX
                        </p>
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full justify-center text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-neon/10 border-2 border-neon rounded-2xl p-8 text-center"
                >
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-display font-bold mb-2">Application Received!</h3>
                  <p className="text-gray-600">
                    We'll review your application and reach out within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-light">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-display-md text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do I need sales experience?',
                  a: 'No. We train you from day one. Many of our top reps had zero sales experience when they started.',
                },
                {
                  q: 'How much can I realistically earn?',
                  a: 'It depends on your effort. Average reps make $2,000/week. Top performers make $3,000+/week.',
                },
                {
                  q: 'What does the training look like?',
                  a: 'Step-by-step coaching, role-plays, live feedback, and field training with experienced reps.',
                },
                {
                  q: 'When do I get paid?',
                  a: 'Weekly. Every week. Transparent commission structure with no hidden fees.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl border-2 border-gray-100 shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
