'use client'
import { Providers } from '@/store/Providers'
import FormImage from '@/components/dropzone/FormImage'
import Gallery from '@/components/sections/Gallery'

export default function Home() {
  return (
    <Providers>
      <main>
        <section className='h-[90vh]'>
          <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-x-16 h-[70vh]'>
            <div className='pb-5 lg:p-0'>
              <h1 className='w-[15ch] md:max-w-[400px] text-center lg:text-left text-white'>
                Dale un toque{' '}
                <span className='text-gradient'>sobrenatural</span> a tus
                recuerdos
              </h1>
            </div>
            <FormImage />
          </div>
        </section>
        <section id='ejemplos' className='pt-20 pb-40'>
          <h2 className='text-4xl font-bold text-center text-white mb-16 w-[15ch] md:w-auto mx-auto'>
            ¡Transforma tus imágenes en{' '}
            <span className='text-gradient'>pesadillas</span>!
          </h2>
          <Gallery />
        </section>
      </main>
    </Providers>
  )
}
