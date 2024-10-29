'use client'
import React from 'react'
import useEditor from '@/store/Providers'

export default function BtnAside() {
  const { isAsideVisible, toggleAside } = useEditor()
  return (
    <button
      className='block lg:hidden absolute top-36 right-5 w-max z-20 py-1.5 px-3 bg-zinc-800 text-white rounded'
      onClick={toggleAside}
    >
      {isAsideVisible ? 'Cerrar menú' : 'Abrir menú'}
    </button>
  )
}
