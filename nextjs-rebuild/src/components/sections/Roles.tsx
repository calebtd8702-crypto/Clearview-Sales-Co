'use client'

export default function Roles() {
  const roles = [
    {
      title: 'Field Sales Representative',
      responsibilities: [
        'Door-to-door consultative selling',
        '2–4 week travel tours',
        'Weekly commission',
      ],
      pay: 'Average Rep Makes: $2,000/week',
    },
    {
      title: 'Team Lead',
      responsibilities: [
        'Manage 4–8 reps',
        'Coordinate logistics',
        'Performance bonus',
      ],
      pay: 'Average Rep Makes: $3,000/week',
    },
  ]

  const trackCTAClick = (role: string) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead', { location: `role-${role}` })
    }
  }

  return (
    <section id="roles" className="section-padding bg-primary-light">
      <div className="container-custom">
        <h2 className="text-h1 text-center mb-12">Open Roles</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="bg-primary-blue text-white rounded-xl p-8 shadow-card"
            >
              <h3 className="text-h2 mb-6">{role.title}</h3>
              <ul className="space-y-3 mb-6">
                {role.responsibilities.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-400 font-bold mr-3 text-xl">✓</span>
                    <span className="text-white/90">{item}</span>
                  </li>
                ))}
                <li className="flex items-start pt-2">
                  <span className="text-green-400 font-bold mr-3 text-xl">✓</span>
                  <strong className="text-white">{role.pay}</strong>
                </li>
              </ul>
              <a
                href="#apply"
                onClick={() => trackCTAClick(role.title.toLowerCase().replace(/\s+/g, '-'))}
                className="block w-full text-center bg-white text-primary-blue px-6 py-3 rounded-lg font-semibold
                         hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-md"
              >
                Book a Call
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
