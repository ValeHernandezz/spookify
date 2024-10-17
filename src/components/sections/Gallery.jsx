import React from 'react'
import { images } from '@/lib'

export default function Gallery() {
  return (
    <ul className='flex justify-center flex-wrap gap-7 text-slate-200'>
      {images.map(({ id, title, image }) => {
        return (
          <li key={id}>
            <img className='rounded-3xl mb-4 max-w-[325px]' src={image} alt={`Imagen de ${title}`} />
            <span className='flex justify-center text-xl'>{title}</span>
          </li>
        )
      })}
    </ul>
  )
}
