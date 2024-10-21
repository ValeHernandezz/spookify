'use client'
import React, { useState } from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'
import ListOfTools from '@/components/tools/ListOfTools'
import Background from '@/components/utils/Background'

export default function EditorPage() {
  const [isAsideVisible, setIsAsideVisible] = useState(false)

  const toggleAside = () => {
    setIsAsideVisible(!isAsideVisible)
  }

  return (
    <main className='min-h-[100vh]'>
      <Background z={true} />

      <button
        className='block lg:hidden absolute top-36 right-5 w-max z-50 p-2 bg-gray-800 text-white rounded'
        onClick={toggleAside}
      >
        {isAsideVisible ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>

      <section className='grid grid-cols-1 lg:grid-cols-[350px_1fr]'>
        <div
          className={`flex min-h-screen flex-col bg-white transition-transform duration-300 ${
            isAsideVisible ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 lg:block fixed lg:static z-40 w-64 lg:w-auto`}
        >
          <aside className='px-4'>
            <h2 className='text-2xl xl:text-3xl text-center font-bold text-black pt-5'>
              Edita tu imagen
            </h2>
            <ListOfTools />
          </aside>
        </div>

        <div className='flex bg-slate-200 flex-col w-full pb-10 pt-[4.2rem] lg:pt-0'>
          <ViewImage />
          <ChangeImage />
        </div>
      </section>
    </main>
  )
}
