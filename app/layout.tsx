import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function Navbar() {
  return (
    <nav className='w-10 bg-cupcake-dark-grey'>
      <Link href="/">Home</Link>
      <Link href="/categories">Categories</Link>
    </nav>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className='my-24 mx-16'>
          {children}
        </main>
      </body>
    </html>
  )
}
