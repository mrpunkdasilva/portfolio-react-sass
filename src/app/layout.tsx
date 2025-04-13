import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import '../styles/globals.sass'
import { Head } from 'next/head'

export const metadata: Metadata = {
  title: 'Gustavo Henrique | Portfolio',
  description: 'Full Stack Developer especializado em React, Node.js, e tecnologias modernas. Confira meus projetos e experiência em desenvolvimento web.',
  keywords: 'Full Stack Developer, React, Node.js, TypeScript, Web Development, Portfolio',
  authors: [{ name: 'Gustavo Henrique' }],
  creator: 'Gustavo Henrique',
  publisher: 'Gustavo Henrique',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
      },
    ],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://mrpunkdasilva.vercel.app',
    siteName: 'Gustavo Henrique Portfolio',
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Full Stack Developer especializado em React, Node.js, e tecnologias modernas.',
    images: [
      {
        url: '/og-image.png', // Adicione uma imagem OG
        width: 1200,
        height: 630,
        alt: 'Gustavo Henrique Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Henrique | Full Stack Developer',
    description: 'Full Stack Developer especializado em React, Node.js, e tecnologias modernas.',
    creator: '@MrPunkSama',
    images: ['/og-image.png']
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#7928ca" />
        <meta name="msapplication-TileColor" content="#7928ca" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}