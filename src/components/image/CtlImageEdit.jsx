'use client'
import Image from 'next/image'
import React from 'react'
import useEditor from '@/store/Providers'
import Loader from '@/components/utils/Loader'
import ImageContainer from './ImageContainer'

export default function CtlImageEdit() {
  const { image, loading, changeLoading } = useEditor()

  const { transformedUrl } = image

  if (loading) {
    return <Loader />
  }

  if (!transformedUrl || JSON.stringify(transformedUrl) === '{}') {
    return (
      <h3 className='text-black font-bold text-3xl text-center py-10'>
        No has usado ningun efecto
      </h3>
    )
  }

  return (
    <ImageContainer>
      <Image
        id='preview'
        className='w-full object-cover'
        src={transformedUrl}
        width={1000}
        height={700}
        priority={true}
        alt={`Imagen editada ${image.original_filename}`}
        onLoad={() => changeLoading(false)}
      />
    </ImageContainer>
  )
}
