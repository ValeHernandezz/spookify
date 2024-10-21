'use client'
import React, { useState } from 'react'
import useTransform from '@/hooks/useTransform'
import useEditor from '@/store/Providers'
import { toolCategories, tools } from '@/lib'
import { ViewImageStateEnum, ToolCategoryEnum } from '@/lib/types'
import Trash from '@/components/icons/listOfTools/general/Trash'
import Undo from '@/components/icons/listOfTools/general/Undo'
import Arrow from '@/components/icons/Arrow'
import GenerateTransform from '@/components/tools/GenerateTransform'
import Swal from 'sweetalert2'

export default function ListOfTools() {
  const {
    image,
    changeImage,
    changeViewImage,
    loadingPrompt,
    changeLoadingPrompt,
    toggleAside
  } = useEditor()
  const { transformImage } = useTransform()
  const [openIndex, setOpenIndex] = useState(null)

  const handleToggle = (index, e) => {
    const isOpen = e.target.open
    if (isOpen) {
      setOpenIndex(index)
    }
  }

  const isReplace = (transformation, from) => {
    return transformation.replace && transformation.replace.from === from
  }

  const isReplaceBackground = (transformation) => {
    return transformation.replaceBackground !== undefined
  }

  const applyTransformation = async (newTransformation) => {
    let appliedTransformations = image.appliedTransformations || []

    toggleAside()

    appliedTransformations = appliedTransformations.filter((transformation) => {
      if (newTransformation.replace) {
        const from = newTransformation.replace.from

        if (
          from === 'appearance' ||
          from === 'face' ||
          from === 'clothes_overalls_shoes' ||
          from === 'person'
        ) {
          return !isReplace(transformation, from)
        }
      }

      if (newTransformation.replaceBackground) {
        return !isReplaceBackground(transformation)
      }

      if (
        newTransformation.replace &&
        newTransformation.replace.from === 'person'
      ) {
        return (
          !isReplace(transformation, 'clothes_overalls_shoes') &&
          !isReplace(transformation, 'face') &&
          !isReplace(transformation, 'person')
        )
      }

      if (
        newTransformation.replace &&
        newTransformation.replace.from === 'clothes_overalls_shoes'
      ) {
        return (
          !isReplace(transformation, 'person') &&
          !isReplace(transformation, 'face')
        )
      }

      if (
        newTransformation.replace &&
        newTransformation.replace.from === 'face'
      ) {
        return (
          !isReplace(transformation, 'person') &&
          !isReplace(transformation, 'clothes_overalls_shoes')
        )
      }

      return true
    })

    appliedTransformations.push(newTransformation)

    console.log('updatedTransformations', appliedTransformations)

    const transformedUrl = await transformImage({
      publicId: image.public_id,
      transformations: appliedTransformations
    })

    const isUrlValid = await validateUrl(transformedUrl)

    if (!isUrlValid) {
      Swal.fire({
        position: 'center',
        icon: 'Error!',
        title: 'La URL generada no es válida, vuelve a intentarlo',
        showConfirmButton: false,
        timer: 1500
      })
      return
    }

    changeImage({
      ...image,
      transformedUrl,
      appliedTransformations
    })
  }

  const validateUrl = async (url) => {
    try {
      const response = await fetch(url, { method: 'HEAD' })
      return response.ok // Si es true, la URL es válida
    } catch {
      return false
    }
  }

  const handleTransformCustom = async (e, categoryLabel) => {
    e.preventDefault()
    changeLoadingPrompt(true)
    const fields = Object.fromEntries(new window.FormData(e.target))
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...fields,
          category: categoryLabel
        })
      })

      const { data } = await response.json()

      if (response.ok) {
        await handleTransform(data)
        changeLoadingPrompt(false)
      } else {
        console.error('Error al generar transformación:', data.error)
      }
    } catch (error) {
      console.error('Error de red:', error)
      changeLoadingPrompt(false)
    }
  }

  const handleTransform = async (tool) => {
    if (tool.replace) {
      await applyTransformation({ replace: tool.replace })
    } else if (tool.replaceBackground) {
      await applyTransformation({ replaceBackground: tool.replaceBackground })
    } else if (tool.transformations) {
      await applyTransformation(tool.transformations)
    }
  }

  const handleUndo = async () => {
    const appliedTransformations = image.appliedTransformations || []

    if (appliedTransformations.length > 0) {
      const updatedHistory = appliedTransformations.slice(0, -1)

      const transformedUrl = await transformImage({
        publicId: image.public_id,
        transformations: updatedHistory
      })

      changeImage({
        ...image,
        transformedUrl,
        appliedTransformations: updatedHistory
      })
    }
  }

  const handleReset = async () => {
    Swal.fire({
      title: '¿Seguro que deseas limpiar todos los efectos?',
      text: 'Se quitaran todos los efectos aplicados',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        changeViewImage(ViewImageStateEnum.ORIGINAL)

        changeImage({
          ...image,
          transformedUrl: null,
          appliedTransformations: []
        })
      }
    })
  }

  const hasTransformationBeenApplied = !(image.appliedTransformations || [])
    .length

  return (
    <div>
      <div className="space-y-1">
        {Object.values(toolCategories).map((category, index) => (
          <details
            className="group [&_summary::-webkit-details-marker]:hidden"
            key={index}
            open={openIndex === index} // Solo abre si es el índice seleccionado
            onToggle={(e) => handleToggle(index, e)} // Controlamos el estado con onToggle
          >
            <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-slate-200/90 hover:bg-zinc-950/35 hover:text-slate-400 transition duration-300">
              <span className="text-sm font-medium text-slate-200 flex items-center">
                {category.icon()}
                <span className="ml-2">{category.label}</span>
              </span>
              <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                <Arrow />
              </span>
            </summary>

            <ul className="mt-2 space-y-1 px-4">
              {tools
                .filter((tool) => tool.category === category.label)
                .map((tool) => (
                  <li key={tool.id}>
                    {tool.id === 4 || tool.id === 5 ? (
                      <CustomForm
                        tool={tool}
                        handleTransform={handleTransform}
                      />
                    ) : (
                      <DefaultButton
                        tool={tool}
                        handleTransform={handleTransform}
                      />
                    )}
                  </li>
                ))}
              {category.label !== ToolCategoryEnum.Adjust && (
                <GenerateTransform
                  loading={loadingPrompt}
                  handleTransformCustom={handleTransformCustom}
                  categoryLabel={category.label}
                />
              )}
            </ul>
          </details>
        ))}
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <button
          className={`flex items-center gap-x-2 font-medium px-2 text-sm py-1.5 lg:px-3 lg:text-base bg-primary text-slate-100 rounded-lg transition duration-300 ${
            hasTransformationBeenApplied
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer hover:opacity-85'
          }`}
          onClick={handleUndo}
          disabled={hasTransformationBeenApplied}
        >
          <Undo className='size-4 xl:size-5' />
          Deshacer
        </button>
        <button
          className={`flex items-center gap-x-2 font-medium px-2 text-sm py-1.5 lg:px-3 sm:text-base bg-red-800 text-slate-200 rounded-lg transition duration-300 ${
            hasTransformationBeenApplied
              ? 'cursor-not-allowed opacity-50'
              : 'cursor-pointer hover:opacity-85'
          }`}
          onClick={handleReset}
          disabled={hasTransformationBeenApplied}
        >
          <Trash className='size-4 xl:size-5' />
          Limpiar
        </button>
      </div>
    </div>
  )
}
const CustomForm = ({ tool, handleTransform }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const newTransformation = {
      transformations: {
        width: formData.get('width'),
        height: formData.get('heigth'),
        ...tool.transformations
      }
    }

    handleTransform(newTransformation)
  }

  return (
    <form key={tool.id} className="pl-4 pb-4" onSubmit={handleSubmit}>
      <label className="w-full flex items-center gap-x-2 text-left rounded-lg text-sm font-medium text-slate-300">
        {tool.icon && tool.icon()}
        {tool.title}
      </label>

      <div className="flex items-center gap-x-2 py-3">
        <input
          type="number"
          name="width"
          placeholder="Ancho"
          className="w-full rounded-md text-slate-200/90 bg-slate-400/20 pl-2 border-gray-500 py-2 pe-2 shadow-sm text-sm"
        />
        <input
          type="number"
          name="heigth"
          placeholder="Alto"
          className="w-full rounded-md text-slate-200/90 bg-slate-400/20 pl-2 border-gray-500 py-2 pe-2 shadow-sm text-sm"
        />
      </div>

      <button className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1 text-slate-100 hover:opacity-85 transition duration-300">
        <span className="text-sm font-medium">
          {tool.id === 5 ? 'Recortar' : 'Expandir'}
        </span>
      </button>
    </form>
  )
}

const DefaultButton = ({ tool, handleTransform }) => (
  <button
    className="w-full flex items-center gap-x-2 text-left rounded-lg px-4 py-2 text-sm font-medium text-slate-300 hover:bg-zinc-950/35 hover:text-slate-300/90 transition duration-300"
    onClick={() => handleTransform(tool)}
  >
    {tool.icon && tool.icon()}
    {tool.title}
  </button>
)
