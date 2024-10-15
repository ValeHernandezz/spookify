'use client'
import React from 'react'
import useEditor from '@/store/Providers'
import { ViewImageStateEnum } from '@/lib/types'
import Photo from '@/components/icons/Photo'
import Edit from '@/components/icons/Edit'
import Compare from '@/components/icons/Compare'
import Download from '@/components/icons/Download'
import Share from '@/components/icons/Share'

export default function ChangeImage() {
  const { changeViewImage } = useEditor()
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-10 p-5'>
        <button
          className='flex items-center gap-x-2 p-3 bg-primary rounded-lg '
          onClick={() => changeViewImage(ViewImageStateEnum.ORIGINAL)}
        >
          <Photo />
          Original
        </button>
        <button
          className='flex items-center gap-x-2 p-3 bg-primary rounded-lg '
          onClick={() => changeViewImage(ViewImageStateEnum.EDIT)}
        >
          <Edit />
          Editada
        </button>
        <button
          className='flex items-center gap-x-2 p-3 bg-primary rounded-lg '
          onClick={() => changeViewImage(ViewImageStateEnum.COMPARE)}
        >
          <Compare />
          Comparar
        </button>
      </div>
      <div className='flex items-center gap-10 p-5'>
        <button
          className='flex items-center gap-x-2 p-3 bg-primary rounded-lg '
          onClick={() => {}}
        >
          <Download />
          Descargar
        </button>
        <button
          className='flex items-center gap-x-2 p-3 bg-primary rounded-lg '
          onClick={() => {}}
        >
          <Share />
          Compartir
        </button>
      </div>
    </div>
  )
}
