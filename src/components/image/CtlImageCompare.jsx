'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import useEditor from '@/store/Providers'
import ImageContainer from './ImageContainer'

// Deshabilitamos SSR para el componente que usa Web Components (two-up)
const TwoUpElement = dynamic(() => import('two-up-element'), { ssr: false })

export default function CtlImageCompare() {
  const { image } = useEditor()
  const { transformedUrl } = image

  if (!transformedUrl) return <div>No has editado la imagen</div>

  return (
    <ImageContainer>
      <TwoUpElement className='w-full'>
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
      </TwoUpElement>
    </ImageContainer>
  )
}
