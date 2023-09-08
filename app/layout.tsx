import Navbar from '@/components/Navbar'
import './globals.css'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'sassquatch.dev',
  description: 'A SASS boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html       
      suppressHydrationWarning
      lang='en'
      className={cn(
        'bg-white text-slate-900 antialiased light',
        inter.className
      )}>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='min-h-screen pt-12 bg-slate-50 antialiased'>
        <Navbar />
        <div className='container max-w-7xl mx-auto h-full pt-12'>
          {children}
        </div>
      </body>
    </html>
  )
}
