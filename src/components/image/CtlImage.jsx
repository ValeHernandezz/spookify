import React from 'react'
import { getCldImageUrl } from 'next-cloudinary'
import useEditor from '@/store/Providers'

export default function CtlImage({ publicId }) {
  const { image, changeImage } = useEditor()
  console.log(image)

  const url = getCldImageUrl({
    width: 600,
    height: 600,
    src: `${publicId}`,
  })

  console.log(url)
  return (
    <div className='max-w-[300px]'>
      <img className='' src={url} alt='Imagen a editar' />
    </div>
  )
}
