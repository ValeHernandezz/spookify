'use client'
import React, { useState } from 'react'
import useEditor from '@/store/Providers'
import { ViewImageStateEnum } from '@/lib/types'
import Photo from '@/components/icons/Photo'
import Edit from '@/components/icons/Edit'
import Compare from '@/components/icons/Compare'
import Download from '@/components/icons/Download'
import Copy from '@/components/icons/viewImage/Copy'
import Share from '@/components/icons/Share'
import Button from '@/components/utils/Button'

export default function ChangeImage() {
  const { changeViewImage, image, viewImage } = useEditor()
  const [copied, setCopied] = useState(false)
  const [loading, setLoading] = useState(false)

  const downloadImage = async () => {
    const response = await fetch(image.transformedUrl)
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${image.original_filename}.png`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    window.URL.revokeObjectURL(url)
  }

  const sharedImage = async () => {
    setLoading(true)
    const imageResponse = await fetch(image.transformedUrl)
    const blob = await imageResponse.blob()
    const formData = new FormData()
    formData.append('file', blob, 'image.jpg') // El tercer parámetro es el nombre del archivo

    const response = await fetch('/api/shared', {
      method: 'POST',
      body: formData
    })

    const { data } = await response.json()

    const urlToShared = `${process.env.NEXT_PUBLIC_URL_FRONTEND}/${data.id}`

    setLoading(false)
    setCopied(true)

    navigator.clipboard.writeText(urlToShared)

    setTimeout(function () {
      setCopied(false)
    }, 1300)
  }

  const styleButtonSelected = 'inline-flex items-center gap-2 rounded-md bg-primary px-3 py-1.5 text-sm lg:text-base text-slate-100 shadow-sm focus:relative'

  const styleButtonNoSelected = 'inline-flex items-center gap-2 rounded-md px-3 py-1 text-sm lg:text-base text-slate-600 hover:text-slate-900 hover: focus:relative transition duration-300'

  return (
    <div className="flex flex-col gap-y-5 xl:gap-y-0 xl:flex-row items-center xl:justify-between w-full  xl:max-w-[880px] lg:px-20 mx-auto">
      <div className="inline-flex rounded-lg bg-slate-200">
        <button
          className={
            viewImage === ViewImageStateEnum.ORIGINAL
              ? styleButtonSelected
              : styleButtonNoSelected
          }
          onClick={() => changeViewImage(ViewImageStateEnum.ORIGINAL)}
        >
          <Photo size="size-4 xl:size-5" />
          Original
        </button>

        <button
          className={
            viewImage === ViewImageStateEnum.EDIT
              ? styleButtonSelected
              : styleButtonNoSelected
          }
          onClick={() => changeViewImage(ViewImageStateEnum.EDIT)}
        >
          <Edit size="size-4 xl:size-5" />
          Editada
        </button>

        <button
          className={
            viewImage === ViewImageStateEnum.COMPARE
              ? styleButtonSelected
              : styleButtonNoSelected
          }
          onClick={() => changeViewImage(ViewImageStateEnum.COMPARE)}
        >
          <Compare size='size-4 xl:size-5'/>
          Comparar
        </button>
      </div>

      <div className="flex items-center gap-4">
        <Button color="bg-primary text-slate-100 " title="Descargar" onClick={downloadImage}>
          <Download size="size-4 xl:size-5" />
        </Button>

        <Button
          color="bg-primary text-slate-100 w-[124px] lg:w-[136px] flex justify-center"
          title={!loading ? (copied ? 'Copiado' : 'Compartir') : 'Generando'}
          onClick={sharedImage}
        >
          {!loading ? (
            copied ? (
              <Copy className='size-4 xl:size-5'/>
            ) : (
              <Share size="size-4 xl:size-5" />
            )
          ) : (
            <div className="loaderCircleSmall mr-2"></div>
          )}
        </Button>
      </div>
    </div>
  )
}
