'use client'
import React from 'react'
import useTransform from '@/hooks/useTransform'
import useEditor from '@/store/Providers'
import { toolCategories, tools } from '@/lib'
import { ViewImageStateEnum } from '@/lib/types'
import Trash from '@/components/icons/Trash'
import Undo from '@/components/icons/Undo'
import Arrow from '@/components/icons/Arrow'
import { applyGenerativeReplace } from '@/lib'
import { pollForProcessingImage } from '@cloudinary-util/util'

export default function ListOfTools() {
  const { image, changeImage, changeViewImage, changeLoading } = useEditor()
  const { transformImage } = useTransform()
  const handleTransformBackground = async (newTransformations) => {
    const appliedTransformations = image.appliedTransformations || []

    // Verificamos si ya se aplicó la transformación de fondo
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

      changeViewImage(ViewImageStateEnum.EDIT)

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
      console.log('La transformación de fondo ya ha sido aplicada')
    }
  }

  const handleTransform = async (tool) => {
    const appliedTransformations = image.appliedTransformations || []

    if (tool.category === 'Transformar') {
      changeLoading(true)
      const { fromObject, toObject } = tool.transformations
      const transformedUrl = applyGenerativeReplace(
        image.public_id,
        fromObject,
        toObject
      )

      changeViewImage(ViewImageStateEnum.EDIT)
      changeImage({
        ...image,
        transformedUrl,
        appliedTransformations: [
          ...appliedTransformations,
          { fromObject, toObject },
        ],
      })
      await pollForProcessingImage({ src: transformedUrl })
      changeLoading(false)
    } else {
      const hasTransformationBeenApplied = appliedTransformations.some(
        (transformation) =>
          JSON.stringify(transformation) ===
          JSON.stringify(tool.transformations)
      )

      if (!hasTransformationBeenApplied) {
        const updatedTransformations = [
          ...appliedTransformations,
          tool.transformations,
        ]

        const combinedTransformations = updatedTransformations.reduce(
          (acc, transformation) => {
            return { ...acc, ...transformation }
          },
          {}
        )

        changeViewImage(ViewImageStateEnum.EDIT)
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
  }

  const handleUndo = async () => {
    const appliedTransformations = image.appliedTransformations || []

    if (appliedTransformations.length > 0) {
      const updatedHistory = appliedTransformations.slice(0, -1)

      const combinedTransformations = updatedHistory.reduce(
        (acc, transformation) => {
          return { ...acc, ...transformation }
        },
        {}
      )

      changeViewImage(ViewImageStateEnum.EDIT)
      const transformedUrl = await transformImage({
        publicId: image.public_id,
        transformations: combinedTransformations,
      })

      changeImage({
        ...image,
        transformedUrl,
        appliedTransformations: updatedHistory,
      })
    }
  }

  const handleReset = async () => {
    const transformedUrl = await transformImage({
      publicId: image.public_id,
      transformations: {},
    })
    changeViewImage(ViewImageStateEnum.ORIGINAL)
    changeImage({
      ...image,
      transformedUrl,
      appliedTransformations: [],
    })
  }

  return (
    <div>
      <ul className='mt-6 space-y-1'>
        {Object.values(toolCategories).map((category, index) => (
          <details
            className='group [&_summary::-webkit-details-marker]:hidden'
            key={index}
          >
            <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
              <span className='text-sm font-medium text-black flex items-center'>
                {category.icon()}
                <span className='ml-2'>{category.label}</span>
              </span>
              <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                <Arrow />
              </span>
            </summary>

            <ul className='mt-2 space-y-1 px-4'>
              {tools
                .filter((tool) => tool.category === category.label)
                .map((tool) => (
                  <li key={tool.id}>
                    {tool.id === 1 ? (
                      <>
                        <details className='group [&_summary::-webkit-details-marker]:hidden'>
                          <summary className='flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700'>
                            <span className='text-sm font-medium text-black flex items-center'>
                              {tool.icon()}
                              <span className='ml-2'>{tool.title}</span>
                            </span>
                            <span className='shrink-0 transition duration-300 group-open:-rotate-180'>
                              <Arrow />
                            </span>
                          </summary>

                          <ul className='px-4'>
                            {tool.options.map(
                              ({ id, title, transformations }) => {
                                return (
                                  <button
                                    key={id}
                                    className='w-full flex items-center gap-x-1 text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700'
                                    onClick={() =>
                                      handleTransformBackground(transformations)
                                    }
                                  >
                                    {tool.icon && tool.icon()}
                                    {title}
                                  </button>
                                )
                              }
                            )}
                          </ul>
                        </details>
                      </>
                    ) : (
                      <>
                        <button
                          className='w-full flex items-center gap-x-1 text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700'
                          onClick={() => handleTransform(tool)}
                        >
                          {tool.icon && tool.icon()}
                          {tool.title}
                        </button>
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </details>
        ))}
      </ul>

      <div className='flex justify-center gap-5 mt-10'>
        <button
          className='flex items-center gap-x-1 font-bold py-1 px-2 text-sm bg-red-500 text-white rounded-lg'
          onClick={handleUndo}
          disabled={!(image.appliedTransformations || []).length}
        >
          <Undo />
          Deshacer
        </button>
        <button
          className='flex items-center gap-x-1 font-bold py-1 px-2 text-sm bg-red-800 text-white rounded-lg'
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
