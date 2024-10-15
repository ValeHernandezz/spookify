'use client'
import React from 'react'
import useTransform from '@/hooks/useTransform'
import useEditor from '@/store/Providers'
import { tools } from '@/lib'
import { ToolCategory } from '@/lib/types'
import Trash from '@/components/icons/Trash'
import Undo from '@/components/icons/Undo'
export default function ListOfTools() {
  const { image, changeImage } = useEditor()
  const { transformImage } = useTransform()

  const handleTransform = async (newTransformations) => {
    // Usamos un array para acumular las transformaciones
    const appliedTransformations = image.appliedTransformations || []

    // Verificamos si ya se aplicó la transformación
    const hasTransformationBeenApplied = appliedTransformations.some(
      (transformation) =>
        JSON.stringify(transformation) === JSON.stringify(newTransformations)
    )

    if (!hasTransformationBeenApplied) {
      const updatedTransformations = [
        ...appliedTransformations,
        newTransformations,
      ]

      // Generamos la URL con las transformaciones acumuladas
      const combinedTransformations = updatedTransformations.reduce(
        (acc, transformation) => {
          return { ...acc, ...transformation }
        },
        {}
      )

      const transformedUrl = await transformImage({
        publicId: image.public_id,
        transformations: combinedTransformations,
      })

      if (transformedUrl) {
        // Guardamos la nueva URL y el historial de transformaciones
        changeImage({
          ...image,
          transformedUrl,
          appliedTransformations: updatedTransformations, // Guardamos el historial
        })
      }
    } else {
      console.log('La transformación ya ha sido aplicada')
    }
  }

  const handleUndo = () => {
    const appliedTransformations = image.appliedTransformations || []

    if (appliedTransformations.length > 0) {
      // Quitamos la última transformación del array
      const updatedHistory = appliedTransformations.slice(0, -1)

      // Reconstruimos el objeto de transformaciones acumuladas
      const combinedTransformations = updatedHistory.reduce(
        (acc, transformation) => {
          return { ...acc, ...transformation }
        },
        {}
      )

      // Generamos la nueva URL con las transformaciones restantes
      const transformedUrl = transformImage({
        publicId: image.public_id,
        transformations: combinedTransformations,
      })

      // Actualizamos la imagen con las transformaciones restantes
      changeImage({
        ...image,
        transformedUrl,
        appliedTransformations: updatedHistory,
      })
    }
  }

  const handleReset = () => {
    const transformedUrl = transformImage({
      publicId: image.public_id,
      transformations: {},
    })

    changeImage({
      ...image,
      transformedUrl,
      appliedTransformations: [],
    })
  }

  return (
    <div>
      <ul className='mt-6 space-y-1'>
        {Object.values(ToolCategory).map((category) => (
          <details
            className='group [&_summary::-webkit-details-marker]:hidden'
            key={category}
          >
            <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
              <span className='text-sm font-medium'>{category}</span>
              <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='size-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </span>
            </summary>

            <ul className='mt-2 space-y-1 px-4'>
              {tools
                .filter((tool) => tool.category === category)
                .map((tool) => (
                  <li key={tool.id}>
                    <button
                      className='w-full text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                      onClick={() => handleTransform(tool.transformations)}
                    >
                      {tool.title}
                    </button>
                  </li>
                ))}
            </ul>
          </details>
        ))}
      </ul>

      <div className='flex justify-center gap-5 mt-10'>
        <button
          className='flex items-center gap-x-2 font-bold p-2 text-sm bg-red-500 text-white rounded-lg'
          onClick={handleUndo}
          disabled={!(image.appliedTransformations || []).length}
        >
          <Undo />
          Deshacer
        </button>
        <button
          className='flex items-center gap-x-2 font-bold p-2 text-sm bg-red-800 text-white rounded-lg'
          onClick={handleReset}
          disabled={!(image.appliedTransformations || []).length}
        >
          <Trash />
          Limpiar
        </button>
      </div>
    </div>
  )
}
