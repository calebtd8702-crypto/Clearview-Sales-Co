import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold mb-4">
              CLEAR VIEW SALES CO.
            </h3>
            <p className="text-gray-400 max-w-md">
              Earn based on how hard you work. Weekly commissions, step-by-step training, and unlimited earning potential.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/opportunity" className="text-gray-400 hover:text-neon transition-colors">
                  Opportunity
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-neon transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-gray-400 hover:text-neon transition-colors">
                  Apply Now
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:purdy@clearviewsalesco.com" className="hover:text-neon transition-colors">
                  purdy@clearviewsalesco.com
                </a>
              </li>
              <li>
                <a href="tel:+13194235405" className="hover:text-neon transition-colors">
                  (319) 423-5405
                </a>
              </li>
              <li className="text-sm">
                1653 Aspen Ct<br />
                North Liberty, IA 52317
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Clear View Sales Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
