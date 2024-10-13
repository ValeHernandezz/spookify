'use client'
import React from 'react'
import useEditor from '@/store/Providers'
import { ViewImageStateEnum } from '@/lib/types'

export default function ChangeImage() {
  const { changeViewImage } = useEditor()
  return (
    <div className='flex items-center gap-10 justify-center py-5'>
      <button
        className='p-3 bg-primary rounded-lg '
        onClick={() => changeViewImage(ViewImageStateEnum.ORIGINAL)}
      >
        Original
      </button>
      <button
        className='p-3 bg-primary rounded-lg '
        onClick={() => changeViewImage(ViewImageStateEnum.EDIT)}
      >
        Editada
      </button>
      <button
        className='p-3 bg-primary rounded-lg '
        onClick={() => changeViewImage(ViewImageStateEnum.COMPARE)}
      >
        Comparar
      </button>
    </div>
  )
}
