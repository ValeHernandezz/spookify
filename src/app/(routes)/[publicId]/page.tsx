'use client'
import Download from '@/components/icons/Download'
import Background from '@/components/utils/Background'
import Button from '@/components/utils/Button'
import { getCldImageUrl } from 'next-cloudinary'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Rocket from '@/components/icons/shared/Rocket'
import MagnifyingGlassPlus from '@/components/icons/shared/MagnifyingGlassPlus'

interface Props {
  params: { publicId: string }
}

export default function SharedPage({ params }: Props) {
  const { publicId } = params
  const router = useRouter()
  console.log(publicId)

  const url = getCldImageUrl({
    src: `spookify/${publicId}`
  })

  const downloadImage = async () => {
    const urlImage = getCldImageUrl({
      src: `spookify/${publicId}`
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
    <main className="min-h-[100vh] mb-32 lg:mb-60">
      <Background z={true} />
      <section className="flex flex-col gap-8 px-6 lg:px-0 items-center justify-center">
        <img
          className="w-full mx-auto rounded-2xl lg:max-w-2xl"
          src={url}
          alt="Imagen creada por Spookify"
        />

        <Button
          color="bg-primary text-slate-100 "
          title="Descargar"
          onClick={downloadImage}
        >
          <Download size="size-4 xl:size-5" />
        </Button>
      </section>

      <section className="text-white px-6 lg:px-0">
        <div className="mx-auto max-w-xl text-center mt-20">
          <h1 className="text-3xl font-extrabold sm:text-5xl leading-tight">
            Sube una imagen y &nbsp;
            <strong className="text-gradient sm:block sm:pt-4">
              experimenta el miedo
            </strong>
          </h1>

          <p className="mt-6 lg:mt-8 mb-8 lg:mb-10 sm:text-xl/relaxed text-pretty">
            Explora Spookify y generar imágenes espeluznantes al instante.
            ¡Prueba la magia del terror y comparte tus creaciones con tus
            amigos!
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8">
            <Link
              className="flex items-center justify-center gap-2 w-full rounded text-lg lg:text-xl px-6 py-2 font-medium bg-primary text-white shadow hover:opacity-85 transition duration-300 lg:w-auto"
              href="/"
            >
              <Rocket className='size-4 lg:size-5' />
              Comienza ahora
            </Link>

            <Link
              className="flex items-center justify-center gap-2 w-full rounded text-lg lg:text-xl px-6 py-2 font-medium bg-zinc-900/45 text-primary shadow hover:opacity-85 transition duration-300 lg:w-auto"
              href="/#examples"
            >
              <MagnifyingGlassPlus className='size-4 lg:size-5' />
              Descubre más
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
