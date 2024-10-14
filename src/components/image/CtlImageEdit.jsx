'use client'
import Image from 'next/image'
import React from 'react'
import useEditor from '@/store/Providers'
import Loader from '@/components/utils/Loader'

export default function CtlImageEdit() {
  const { image, loading } = useEditor()

  const url = image.transformedUrl || image.originalUrl
  
  if (loading) return <Loader />

  if (!url) {
    return (
      <div>
        No se ha aplicado ningun efecto. Por favor, selecciona una herramienta.
      </div>
    )
  }

  return (
    <div className='flex justify-center py-5 max-w-[600px]'>
      <Image
        id='preview'
        src={url}
        width={1000}
        height={1000}
        priority={true}
        alt='imagen editada'
      />
    </div>
  )
}
