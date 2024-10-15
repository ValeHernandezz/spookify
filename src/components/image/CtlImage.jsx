'use client'
import React from 'react'
import Image from 'next/image'
import useEditor from '@/store/Providers'
import ImageContainer from './ImageContainer'
export default function CtlImage() {
  const { image } = useEditor()

  return (
    <ImageContainer>
      <Image
        className='w-full object-cover'
        src={image.url}
        width={1000}
        height={700}
        priority={true}
        alt={`Imagen ${image.original_filename}`}
      />
    </ImageContainer>
  )
}
