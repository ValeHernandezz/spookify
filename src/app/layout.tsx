import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Background from '@/components/utils/Background'
import { Providers } from '@/store/Providers'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fondo absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center -z-10"></div>

        <Background z={false} />
        <Providers>
          <div id='app'>
            <Header />
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
