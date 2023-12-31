import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Roboto } from "@next/font/google"
import Navbar from './components/Navbar'



const inter = Inter({ subsets: ['latin'] })

const text = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: "--roboto-font"
})

export const metadata: Metadata = {
  title: 'Blessings Portfolio',
  description: 'Generated by Jerrified',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body className={` ${text.className} bg-black`} >
          {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
