'use client'
import React from 'react'
import ListOfTools from '@/components/tools/ListOfTools'
import useEditor from '@/store/Providers'
export default function Aside() {
  const { isAsideVisible } = useEditor()
  return (
    <div
      className={`flex lg:min-h-screen flex-col bg-[#18181b] transition-transform duration-300 rounded-lg lg:rounded-none lg:rounded-l-lg ${
        isAsideVisible ? 'translate-x-0' : '-translate-x-[110%]'
      } lg:translate-x-0 lg:block absolute lg:static z-10 w-64 lg:w-auto`}
    >
      <aside className='p-5 lg:pt-10'>
        <h2 className='text-2xl lg:text-3xl text-center font-bold text-slate-200'>
          Edita tu imagen
        </h2>
        <p className='text-sm xl:text-base text-slate-200/70 text-center mt-3 mb-6 mx-4 text-pretty'>
          Usa imágenes con buena calidad para mejores resultados.
        </p>
        <ListOfTools />
      </aside>
    </div>
  )
}
