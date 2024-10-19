'use client'
import React from 'react'
import Image from 'next/image'
import useEditor from '@/store/Providers'
import ImageContainer from './ImageContainer'
import 'two-up-element'

export default function CtlImageCompare() {
  const { image } = useEditor()
  const { transformedUrl } = image

  if (!transformedUrl || JSON.stringify(transformedUrl) === '{}')
    return (
      <h3 className='text-black font-bold text-3xl text-center py-10'>
        No has usado ningun efecto
      </h3>
    )

  return (
    <ImageContainer>
      <div className='w-full'>
        <two-up>
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
      </div>
    </ImageContainer>
  )
}
