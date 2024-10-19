'use client'
import { Providers } from '@/store/Providers'
import Gallery from '@/sections/Gallery'
import Hero from '@/sections/Hero'
import Tools from '@/sections/Tools'

export default function Home() {
  return (
    <Providers>
      <main>
        <Hero />
        <Gallery />
        <Tools />
      </main>
    </Providers>
  )
}
