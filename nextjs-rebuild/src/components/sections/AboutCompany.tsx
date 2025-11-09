export default function AboutCompany() {
  const blocks = [
    {
      title: 'Our Story',
      content:
        'Founded in the heartland of Iowa, Clearview Sales Company started with a simple belief: that great sales teams are built on trust, training, and transparency. What began as a small operation has grown into a respected name in field sales, partnering with national brands to bring their products directly to customers across the Midwest and beyond.',
    },
    {
      title: 'Our Leadership',
      content:
        'Led by founder Michael Purdy, our leadership team brings years of combined experience in direct sales, team management, and customer relations. We believe in leading by example—our leaders have walked the same routes, knocked the same doors, and faced the same challenges as our reps.',
    },
    {
      title: 'Our Values',
      values: [
        {
          label: 'Integrity First:',
          text: 'We do what we say, every time.',
        },
        {
          label: 'People Over Numbers:',
          text: 'Success starts with taking care of our team.',
        },
        {
          label: 'Continuous Growth:',
          text: 'We invest in training, coaching, and development.',
        },
        {
          label: 'Accountability:',
          text: 'We hold ourselves to the highest standards.',
        },
      ],
    },
  ]

  return (
    <section id="company" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-h1 text-center mb-12">About Clearview Sales Company</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <div key={index} className="card">
              <h3 className="text-h3 text-primary-blue mb-4">{block.title}</h3>
              {block.content && (
                <p className="text-gray-700 leading-relaxed">{block.content}</p>
              )}
              {block.values && (
                <ul className="space-y-3">
                  {block.values.map((value, idx) => (
                    <li key={idx} className="text-gray-700">
                      <strong className="text-primary-blue">{value.label}</strong>{' '}
                      {value.text}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
