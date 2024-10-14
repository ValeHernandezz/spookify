'use client'
import React from 'react'
import useTransform from '@/hooks/useTransform'
import useEditor from '@/store/Providers'

export default function ListOfTools() {
  const { image, changeImage } = useEditor()
  const { transformImage } = useTransform()

  const tools = [
    {
      id: 1,
      title: 'Remplazar background',
      transformations: {
        replaceBackground: 'Add scary ghosts to the background',
      },
    },
    {
      id: 2,
      title: 'Rellenar imagen',
      transformations: {
        crop: 'pad',
        fillBackground: 'c_fill_pad',
        width: 1000,
        height: 1000,
        alt: '',
        sizes: '100vw',
      },
    },
    {
      id: 3,
      title: 'Parte importante',
      transformations: {
        width: 300,
        height: 300,
        crop: {
          type: 'thumb',
          width: 600,
          height: 600,
          source: true,
        },
        sizes: '100vw',
      },
    },
  ]

  const handleTransform = async (transformations) => {
    const transformedUrl = await transformImage({
      publicId: image.public_id,
      transformations,
    })

    if (transformedUrl) {
      changeImage({ ...image, transformedUrl }) 
    }
  }

  return (
    <div>
      <ul className='flex flex-col gap-y-5 px-10'>
        {tools.map(({ id, title, transformations }) => (
          <button
            key={id}
            className='p-4 bg-secondary rounded-lg'
            onClick={() => handleTransform(transformations)}
          >
            {title}
          </button>
        ))}
      </ul>
    </div>
  )
}
