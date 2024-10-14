'use client'
import React from 'react'
import 'two-up-element'
import { getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'

export default function CtlImageCompare({ publicId }) {
  const urlOriginal = getCldImageUrl({
    src: publicId,
  })

  const url = getCldImageUrl({
    src: publicId,
    replaceBackground: 'Add scary ghosts to the background',
  })

  return (
    <div className='flex justify-center py-5 max-w-[600px]'>
      <two-up>
        <Image
          id='original'
          src={urlOriginal}
          width={1000}
          height={1000}
          priority={true}
          alt='iamgen'
        />
        <Image
          id='preview'
          src={url}
          width={1000}
          height={1000}
          priority={true}
          alt='iamgen'
        />
      </two-up>
    </div>
  )
}
