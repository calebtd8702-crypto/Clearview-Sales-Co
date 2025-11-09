export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="container-custom">
        <div className="text-center space-y-4">
          <p className="text-lg font-semibold">
            <strong>Clearview Sales Company, LLC</strong> — Iowa-based, Midwest strong.
          </p>

          <p className="text-primary-light">
            1653 Aspen Ct, North Liberty, IA 52317
          </p>

          <p className="text-primary-light">
            Email:{' '}
            <a
              href="mailto:purdy@clearviewsalesco.com"
              className="text-white hover:underline transition-all"
            >
              purdy@clearviewsalesco.com
            </a>
            {' | '}
            Phone:{' '}
            <a
              href="tel:+13194235405"
              className="text-white hover:underline transition-all"
            >
              (319) 423-5405
            </a>
          </p>

          <p className="pt-4 border-t border-white/20 mt-6">
            © {currentYear} Clearview Sales Company, LLC • All rights reserved.
          </p>

          <p className="text-sm text-primary-highlight">
            Built on integrity, hard work, and opportunity — serving partners across the USA.
          </p>
        </div>
      </div>
    </footer>
  )
}
