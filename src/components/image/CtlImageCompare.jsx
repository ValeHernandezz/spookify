'use client'
import React from 'react'
import 'two-up-element'
import Image from 'next/image'
import useEditor from '@/store/Providers'

export default function CtlImageCompare() {
  const { image } = useEditor()
  const { transformedUrl } = image

  if (!transformedUrl) return <div>No has editado la imagen</div>

  return (
    <div className='flex justify-center py-5 max-w-[600px]'>
      <two-up>
        <Image
          id='original'
          src={image.url}
          width={1000}
          height={1000}
          priority={true}
          alt={`Imagen original ${image.original_filename}`}
        />
        <Image
          id='preview'
          src={transformedUrl}
          width={1000}
          height={1000}
          priority={true}
          alt={`Imagen editada ${image.original_filename}`}
        />
      </two-up>
    </div>
  )
}
