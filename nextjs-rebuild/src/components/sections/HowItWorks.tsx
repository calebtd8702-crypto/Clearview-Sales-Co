import Image from 'next/image'

export default function HowItWorks() {
  const features = [
    {
      title: 'Paid Travel & Lodging',
      description: 'We cover approved flights and hotels so you can focus on results.',
    },
    {
      title: 'Training',
      description: 'Role-plays and live coaching that build confidence fast.',
    },
    {
      title: 'Weekly Commission',
      description: 'Transparent plan. Fast payouts. Clear targets.',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-h1 text-center mb-12">How It Works</h2>

        <div className="grid lg:grid-cols-[1fr,400px] gap-8 lg:gap-12">
          {/* Features */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3 className="text-h3 mb-3">{feature.title}</h3>
                <p className="text-white/90 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Testimonial Sidebar */}
          <div className="bg-primary-light rounded-xl p-8 shadow-card flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <Image
                src="https://i.imgur.com/M07d5HX.png"
                alt="Ben E."
                width={120}
                height={120}
                className="rounded-full border-4 border-primary-blue object-cover"
              />
            </div>
            <blockquote className="text-lg italic text-gray-800 mb-6 leading-relaxed">
              &quot;Before joining Clear View, I had never worked in sales. The team trained me
              from day one and showed me that I can control how much money I make with my
              effort. It&apos;s been a game changer.&quot;
            </blockquote>
            <cite className="text-sm text-gray-600 not-italic">
              <strong className="text-primary-blue font-semibold">Ben E.</strong>, Sales
              Representative
            </cite>
          </div>
        </div>
      </div>
    </section>
  )
}
