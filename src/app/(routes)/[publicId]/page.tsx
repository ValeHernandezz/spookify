'use client'
import Download from '@/components/icons/Download'
import Background from '@/components/utils/Background'
import Button from '@/components/utils/Button'
import { getCldImageUrl } from 'next-cloudinary'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  params: { publicId: string }
}

export default function SharedPage({ params }: Props) {
  const { publicId } = params
  const router = useRouter()
  console.log(publicId)

  const url = getCldImageUrl({
    src: `spookify/${publicId}`,
  })

  const downloadImage = async () => {
    const urlImage = getCldImageUrl({
      src: `spookify/${publicId}`,
    })
    const response = await fetch(urlImage)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `Imagen de spookify.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }
  const validateUrl = async (url: string) => {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      if (response.ok) {
        return
      } else {
        return router.push('/')
      }
    } catch {
      return router.push('/')
    }
  }

  useEffect(() => {
    validateUrl(url)
  }, [url])

  return (
    <main className='min-h-[100vh]'>
      <Background z={true} />

      <img
        className='w-full p-5 lg:p-16 mx-auto rounded-lg lg:max-w-[800px]'
        src={url}
        alt='Imagen creada por Spookify'
      />

      <div className='flex items-center justify-center'>
        <Button color='bg-primary' title='Descargar' onClick={downloadImage}>
          <Download size='size-4 xl:size-5' />
        </Button>
      </div>

      <section className='text-white'>
        <div className='mx-auto max-w-screen-xl px-4 pt-16 pb-28 lg:flex lg:items-center'>
          <div className='mx-auto max-w-xl text-center'>
            <h1 className='text-3xl font-extrabold sm:text-5xl leading-tight'>
              Sube una imagen y &nbsp;
              <strong className='text-gradient sm:block sm:pt-4'>
                experimenta el miedo
              </strong>
            </h1>

            <p className='mt-4 sm:text-xl/relaxed text-pretty'>
              Explora Spookify y generar imágenes espeluznantes al instante.
              ¡Prueba la magia del terror y comparte tus creaciones con tus
              amigos!
            </p>

            <div className='mt-8 flex flex-wrap justify-center gap-4'>
              <Link
                className='block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow transition-all hover:opacity-80 focus:outline-none focus:ring sm:w-auto'
                href='/'
              >
                Comienza ahora
              </Link>

              <Link
                className='block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-white focus:outline-none focus:ring sm:w-auto'
                href='/#examples'
              >
                Descubre más
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
