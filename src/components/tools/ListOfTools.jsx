'use client'
import React from 'react'
import useTransform from '@/hooks/useTransform'
import useEditor from '@/store/Providers'
import { tools } from '@/lib'

export default function ListOfTools() {
  const { image, changeImage } = useEditor()
  const { transformImage } = useTransform()

  const handleTransform = (newTransformations) => {
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

      const transformedUrl = transformImage({
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

      <div className='flex gap-5 mt-5'>
        <button
          className='p-4 bg-red-500 text-white rounded-lg'
          onClick={handleUndo}
          disabled={!(image.appliedTransformations || []).length}
        >
          Deshacer último efecto
        </button>
        <button
          className='p-4 bg-red-800 text-white rounded-lg'
          onClick={handleReset}
          disabled={!(image.appliedTransformations || []).length}
        >
          Borrar todos los efectos
        </button>
      </div>
    </div>
  )
}
