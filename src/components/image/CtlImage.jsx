'use client'
import React from 'react'
import { getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'

export default function CtlImage({ publicId }) {
  const urlOriginal = getCldImageUrl({
    src: publicId,
  })

  return (
    <div className='flex justify-center py-5 max-w-[600px]'>
      <Image
        id='original'
        src={urlOriginal}
        width={1000}
        height={1000}
        priority={true}
        alt='iamgen'
      />
    </div>
  )
}
