'use client'
import React from 'react'
import Image from 'next/image'
import useEditor from '@/store/Providers'

export default function CtlImage() {
  const { image } = useEditor()

  return (
    <div className='flex justify-center py-5 max-w-[600px]'>
      <Image
        id='original'
        src={image.url}
        width={1000}
        height={1000}
        priority={true}
        alt={`Imagen ${image.original_filename}`}
      />
    </div>
  )
}
