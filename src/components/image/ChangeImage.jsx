'use client'
import React from 'react'
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

        <Button color='bg-primary' title='Compartir' onClick={() => {}}>
          <Share size='size-4 xl:size-5' />
        </Button>
      </div>
    </div>
  )
}
