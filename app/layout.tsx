import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travel',
  description: 'Travel with next gen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>

        <Navbar/>
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
