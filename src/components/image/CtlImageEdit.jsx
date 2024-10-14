'use client'
import Image from 'next/image'
import React from 'react'
import useEditor from '@/store/Providers'
import Loader from '@/components/utils/Loader'

export default function CtlImageEdit() {
  const { image, loading, changeLoading } = useEditor()

  const { transformedUrl } = image

  if (loading) return <Loader />

  if (!transformedUrl) {
    return (
      <div>
        No se ha aplicado ningún efecto. Por favor, selecciona una herramienta.
      </div>
    )
  }

  return (
    <div className='flex justify-center py-5 max-w-[600px]'>
      <Image
        id='preview'
        src={transformedUrl}
        width={1000}
        height={1000}
        priority={true}
        alt={`Imagen editada ${image.original_filename}`}
        onLoad={() => changeLoading(false)}
      />
    </div>
  )
}
