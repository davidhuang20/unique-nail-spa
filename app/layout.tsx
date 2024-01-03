import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer, Header } from '@/app/componets'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Unique Nail Spa',
  description: 'A Nail Salon where you ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <div className='flex flex-col'>
          <Header />
          <main className='flex flex-grow'>
            {children}
            <Analytics />
            <SpeedInsights/>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
