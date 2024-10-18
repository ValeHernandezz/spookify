import React from 'react'
import { images } from '@/lib'

export default function Gallery() {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 text-slate-200 place-items-center max-w-[700px] xl:max-w-[1400px] mx-auto'>
      {images.map(({ id, title, image }) => {
        return (
          <li key={id} className='hover:scale-105 cursor-crosshair transition'>
            <img
              className='rounded-3xl mb-4 max-w-[300px]'
              src={image}
              alt={`Imagen de ${title}`}
            />
            <span className='flex justify-center text-xl'>{title}</span>
          </li>
        )
      })}
    </ul>
  )
}
