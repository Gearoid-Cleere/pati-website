import type { Metadata } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import patiFavicon from './PATI_Favicon.png'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const sourceSerif = Source_Serif_4({ 
  subsets: ["latin"],
  variable: "--font-source-serif",
})

export const metadata: Metadata = {
  title: 'PATI - Parenting and Technology Institute',
  description:
    'Helping Families, Schools and Organisations Navigate Technology with Confidence. Expert-led programmes supporting parents, school communities and employees to manage children\'s technology use.',
  generator: 'v0.app',
  icons: {
    icon: patiFavicon.src,
    apple: patiFavicon.src,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sourceSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
