'use client'
import React from 'react'
import 'two-up-element'
import Image from 'next/image'
import useEditor from '@/store/Providers'
import ImageContainer from './ImageContainer'
export default function CtlImageCompare() {
  const { image } = useEditor()
  const { transformedUrl } = image

  if (!transformedUrl) return <div>No has editado la imagen</div>

  return (
    <ImageContainer>
      <two-up className='w-full'>
        <Image
          id='original'
          className='w-full object-cover'
          src={image.url}
          width={1000}
          height={700}
          priority={true}
          alt={`Imagen original ${image.original_filename}`}
        />
        <Image
          id='preview'
          className='w-full object-cover'
          src={transformedUrl}
          width={1000}
          height={700}
          priority={true}
          alt={`Imagen editada ${image.original_filename}`}
        />
      </two-up>
    </ImageContainer>
  )
}
