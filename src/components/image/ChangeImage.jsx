'use client'
import React, { useState } from 'react'
import useEditor from '@/store/Providers'
import { ViewImageStateEnum } from '@/lib/types'
import Photo from '@/components/icons/Photo'
import Edit from '@/components/icons/Edit'
import Compare from '@/components/icons/Compare'
import Download from '@/components/icons/Download'
import Share from '@/components/icons/Share'
import Button from '@/components/utils/Button'

export default function ChangeImage() {
  const { changeViewImage, image } = useEditor()
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
      body: formData,
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

  return (
    <div className='flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row items-center lg:justify-between w-full max-w-[880px] lg:px-20 mx-auto'>
      <div className='flex items-center gap-5 xl:gap-10'>
        <Button
          color='bg-primary'
          title='Original'
          onClick={() => changeViewImage(ViewImageStateEnum.ORIGINAL)}
        >
          <Photo size='size-4 xl:size-5' />
        </Button>

        <Button
          color='bg-primary'
          title='Editada'
          onClick={() => changeViewImage(ViewImageStateEnum.EDIT)}
        >
          <Edit size='size-4 xl:size-5' />
        </Button>

        <Button
          color='bg-primary'
          title='Comparar'
          onClick={() => changeViewImage(ViewImageStateEnum.COMPARE)}
        >
          <Compare size='size-4 xl:size-5' />
        </Button>
      </div>

      <div className='flex items-center gap-5 xl:gap-10'>
        <Button color='bg-primary' title='Descargar' onClick={downloadImage}>
          <Download size='size-4 xl:size-5' />
        </Button>

        <Button
          color='bg-primary'
          title={!loading ? (copied ? 'Copiado' : 'Compartir') : 'Generando'}
          onClick={sharedImage}
        >
          {!loading ? (
            copied ? (
              <svg
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='size-5'
              >
                <path d='M0 0h24v24H0z' stroke='none' />
                <path d='M0 0h24v24H0z' stroke='none' />
                <path d='M7 9.667A2.667 2.667 0 0 1 9.667 7h8.666A2.667 2.667 0 0 1 21 9.667v8.666A2.667 2.667 0 0 1 18.333 21H9.667A2.667 2.667 0 0 1 7 18.333z' />
                <path d='M4.012 16.737A2 2 0 0 1 3 15V5c0-1.1.9-2 2-2h10c.75 0 1.158.385 1.5 1M11 14l2 2 4-4' />
              </svg>
            ) : (
              <Share size='size-4 xl:size-5' />
            )
          ) : (
            <div className='loaderCircleSmall mr-2'></div>
          )}
        </Button>
      </div>
    </div>
  )
}
