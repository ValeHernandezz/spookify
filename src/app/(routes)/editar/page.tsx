'use client'
import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'
import ListOfTools from '@/components/tools/ListOfTools'
import Background from '@/components/utils/Background'
import useEditor from '@/store/Providers'

export default function EditorPage() {
  const { isAsideVisible, toggleAside } = useEditor()

  return (
    <main className="min-h-[100vh] mb-32">
      <Background z={true} />

      <button
        className="block lg:hidden absolute top-36 right-5 w-max z-20 p-2 bg-gray-800 text-white rounded"
        onClick={toggleAside}
      >
        {isAsideVisible ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>

      <section className="grid grid-cols-1 lg:grid-cols-[350px_1fr] px-4 2xl:px-0">
        <div
          className={`flex lg:min-h-screen flex-col bg-[#18181b] transition-transform duration-300 rounded-lg lg:rounded-none lg:rounded-l-lg ${
            isAsideVisible ? 'translate-x-0' : '-translate-x-[110%]'
          } lg:translate-x-0 lg:block fixed lg:static z-10 w-64 lg:w-auto`}
        >
          <aside className="p-5 lg:pt-10">
            <h2 className="text-2xl lg:text-3xl text-center font-bold text-slate-200">
              Edita tu imagen
            </h2>
            <p className='text-sm xl:text-base text-slate-200/70 text-center mt-3 mb-6 mx-4 text-pretty'>
              Usa imágenes con buena calidad para mejores resultados.
            </p>
            <ListOfTools />
          </aside>
        </div>

        <div className="flex bg-zinc-950 flex-col w-full pb-10 pt-[4.2rem] lg:pt-0 rounded-lg lg:rounded-none lg:rounded-r-lg">
          <ViewImage />
          <ChangeImage />
        </div>
      </section>
    </main>
  )
}
