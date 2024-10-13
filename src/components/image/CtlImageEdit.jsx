import { getCldImageUrl } from 'next-cloudinary'
import Image from 'next/image'
import React from 'react'

export default function CtlImageEdit({ publicId }) {
  const url = getCldImageUrl({
    src: publicId,
    replaceBackground: 'Add scary ghosts to the background',
  })

  return (
    <div className='flex justify-center py-5'>
      <Image
        id='preview'
        src={url}
        width={1000}
        height={1000}
        priority={true}
        alt='iamgen'
      />
    </div>
  )
}
