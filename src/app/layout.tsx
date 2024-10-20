import type { Metadata } from 'next'
import Background from '@/components/utils/Background'
import Header from '@/sections/header/Header'
import Hamburguer from '@/sections/header/Hamburguer'
import Footer from '@/sections/Footer'

import '@fontsource-variable/figtree'

import './globals.css'

export const metadata: Metadata = {
  title: 'Spookify • Tu portal a la edición sobrenatural',
  description:
    'Spookify es una aplicación web que te permite transformar tus fotos y videos en creaciones aterradoras y espectaculares. Sube tus medios y aplica efectos espeluznantes utilizando tecnología de IA y las potentes herramientas de Cloudinary. ¡Convierte lo ordinario en lo extraordinariamente escalofriante!',
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
        <div className="fondo absolute w-[105vw] inset-0 bg-[url('/background.webp')] bg-cover bg-center -z-10"></div>

        <Background z={false} />
        <Hamburguer />
        <div id='app'>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
