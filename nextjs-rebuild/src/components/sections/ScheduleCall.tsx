import CalendlyEmbed from '@/components/ui/CalendlyEmbed'

export default function ScheduleCall() {
  return (
    <section id="apply" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-h1 mb-4">Schedule Your Intro Call</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Use the calendar below to book a short introductory call with our hiring team.
            During this 15-minute conversation, we&apos;ll review the position details,
            travel expectations, and commission structure.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <CalendlyEmbed url="https://calendly.com/calebtd8702/intro-call" />
        </div>
      </div>
    </section>
  )
}
