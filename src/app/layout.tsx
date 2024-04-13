import { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import { ABOUT_ME } from '@/lib/data'
import { Footer } from '@/components/footer'
import { Background } from '@/components/background'
import { ThemeSwitch } from '@/components/theme-switch'

import { Providers } from './providers'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: '#171717', media: '(prefers-color-scheme: dark)' },
  ]
}

export const metadata: Metadata = {
  authors: [{ name: 'Gabriel Lima', url: 'https://splorg.online' }],
  creator: 'Gabriel Lima',
  description: ABOUT_ME[0],
  keywords: [
    'TypeScript',
    'JavaScript',
    'React',
    'Next.js',
    'TailwindCSS',
    'Node.js',
    'Engineering',
    'Frontend',
    'Backend',
    'Fullstack',
    'Engineer',
    'Developer',
    'Portfolio'
  ],
  publisher: 'Gabriel Lima',
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: 'splorg.online',
  twitter: {
    card: 'summary_large_image',
    site: 'splorg.online',
    title: 'splorg.online',
  },
  metadataBase: new URL('https://splorg.online'),
  openGraph: {
    title: 'splorg.online',
    description: ABOUT_ME[0],
    url: 'https://splorg.online',
    siteName: 'splorg.online',
    images: [
      {
        url: 'https://github.com/splorg.png',
      }
    ],
    locale: 'en_US',
    type:  'website'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} h-full min-h-screen relative w-full bg-neutral-200 dark:bg-neutral-900 motion-reduce:transform-none motion-reduce:transition-none`}>
        <Background />
        <Providers>
          <ThemeSwitch />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
