import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CLEAR VIEW SALES CO. | Earn Based On How Hard You Work',
  description: 'ClearView trains you step by step. Weekly commissions. Top reps make $3K+ per week.',
  keywords: 'sales jobs, commission sales, field sales, earn money, sales training',
  icons: {
    icon: '/mikelogo.png',
  },
  openGraph: {
    title: 'CLEAR VIEW SALES CO.',
    description: 'Earn based on how hard you work. Weekly commissions, comprehensive training.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
