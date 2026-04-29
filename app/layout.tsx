import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'CODA GROWTH | AI Automation & B2B Efficiency & Automation Consultancy',
  description: 'Scale your Revenue Systems with AI & Automation. Get the free AI Marketing Guide and learn the systems top SaaS companies use to grow revenue on autopilot.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${inter.variable} ${roboto.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
