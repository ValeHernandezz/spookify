'use client'
import { Providers } from '@/store/Providers'
import Gallery from '@/components/sections/Examples'
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
