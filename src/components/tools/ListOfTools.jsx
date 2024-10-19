'use client'
import React from 'react'
import useTransform from '@/hooks/useTransform'
import useEditor from '@/store/Providers'
import { toolCategories, tools } from '@/lib'
import { ViewImageStateEnum, ToolCategoryEnum } from '@/lib/types'
import Trash from '@/components/icons/Trash'
import Undo from '@/components/icons/Undo'
import Arrow from '@/components/icons/Arrow'
import GenerateTransform from '@/components/tools/GenerateTransform'

export default function ListOfTools() {
  const { image, changeImage, changeViewImage } = useEditor()
  const { transformImage } = useTransform()

  const applyTransformation = async (newTransformation) => {
    const appliedTransformations = image.appliedTransformations || []

    const hasTransformationBeenApplied = appliedTransformations.some(
      (transformation) =>
        JSON.stringify(transformation) === JSON.stringify(newTransformation)
    )

    if (!hasTransformationBeenApplied) {
      const updatedTransformations = [
        ...appliedTransformations,
        newTransformation,
      ]

      const transformedUrl = await transformImage({
        publicId: image.public_id,
        transformations: updatedTransformations,
      })

      if (transformedUrl) {
        changeImage({
          ...image,
          transformedUrl,
          appliedTransformations: updatedTransformations,
        })
      }
    }
  }

  const handleTransformCustom = async (e) => {
    e.preventDefault()
    const fields = Object.fromEntries(new window.FormData(e.target))
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fields),
      })

      const { data } = await response.json()

      if (response.ok) {
        const normalizedData = normalizeApiResponse(data)
        await applyTransformation(normalizedData)
      } else {
        console.error('Error al generar transformación:', data.error)
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }

  const handleTransform = async (tool) => {
    if (tool.replace) {
      await applyTransformation({ replace: tool.replace })
    } else {
      await applyTransformation(tool.transformations)
    }
  }

  const normalizeApiResponse = (data) => {
    if (data.replace) {
      return { replace: data.replace }
    } else if (data.replaceBackground) {
      return { replaceBackground: data.replaceBackground }
    }
    return data
  }
  const handleUndo = async () => {
    const appliedTransformations = image.appliedTransformations || []

    if (appliedTransformations.length > 0) {
      const updatedHistory = appliedTransformations.slice(0, -1)

      const transformedUrl = await transformImage({
        publicId: image.public_id,
        transformations: updatedHistory,
      })

      changeImage({
        ...image,
        transformedUrl,
        appliedTransformations: updatedHistory,
      })
    }
  }

  const handleReset = () => {
    changeViewImage(ViewImageStateEnum.ORIGINAL)
    changeImage({
      ...image.url,
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
                  <li className='' key={tool.id}>
                    <button
                      className='w-full flex items-center gap-x-1 text-left rounded-lg px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700'
                      onClick={() => handleTransform(tool)}
                    >
                      {tool.icon && tool.icon()}
                      {tool.title}
                    </button>
                  </li>
                ))}
              {category.label !== ToolCategoryEnum.Crop && (
                <GenerateTransform
                  handleTransformCustom={handleTransformCustom}
                  categoryLabel={category.label}
                />
              )}
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
