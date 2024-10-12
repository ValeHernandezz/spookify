import React from 'react'
import { getCldImageUrl } from 'next-cloudinary'
import useEditor from '@/store/Providers'

export default function CtlImage({ publicId }) {
  const { image, changeImage } = useEditor()
  console.log(image)

  const url = getCldImageUrl({
    src: `${publicId}`,
  })

  console.log(url)
  return (
    <div className='max-w-[300px]'>
      <img className='' src={image.url} alt='Imagen a editar' />
    </div>
  )
}
