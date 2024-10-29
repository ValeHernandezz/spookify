import type { Metadata } from 'next'
import { Providers } from '@/store/Providers'
import Background from '@/components/utils/Background'
import Header from '@/sections/header/Header'
import Hamburguer from '@/sections/header/Hamburguer'
import Footer from '@/sections/Footer'

import { Analytics } from '@vercel/analytics/react'

import '@fontsource-variable/figtree'

import './globals.css'

export const metadata: Metadata = {
  title: 'Spookify • Tu portal a la edición sobrenatural',
  description:
    'Spookify es una aplicación web que transforma tus fotos en creaciones aterradoras con tecnología de IA y herramientas avanzadas. ¡Convierte lo ordinario en escalofriante!',
  openGraph: {
    title: 'Spookify • Edición sobrenatural de fotos',
    description:
      'Con Spookify, transforma tus fotos en creaciones aterradoras utilizando efectos espeluznantes impulsados por IA y las potentes herramientas de Cloudinary.',
    url: 'https://spookify-ai.vercel.app/',
    siteName: 'Spookify',
    images: [
      {
        url: 'https://spookify-ai.vercel.app/metaimg.webp',
        width: 1200,
        height: 630,
        alt: 'Una imagen escalofriante transformada con Spookify',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spookify • Edición sobrenatural de fotos',
    description:
      'Transforma tus fotos con Spookify y crea efectos aterradores usando IA y Cloudinary. ¡Dale un toque espeluznante a tus creaciones!',
    images: ['https://spookify-ai.vercel.app/metaimg.webp'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <head>
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      </head>
      <body>
        <Providers>
          <div className="fondo absolute w-full inset-0 bg-[url('/background.webp')] bg-cover bg-center -z-10"></div>

          <Background z={false} />
          <Hamburguer />
          <div id='app'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>

        <Analytics />
      </body>
    </html>
  )
}
