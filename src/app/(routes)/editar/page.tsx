import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'
import ListOfTools from '@/components/tools/ListOfTools'
import Background from '@/components/utils/Background'

export default function EditorPage() {
  return (
    <main className='min-h-[100vh]'>
      <Background z={true} />
      <section className='grid grid-cols-[350px_1fr]'>
        <div className='flex min-h-screen flex-col bg-white'>
          <div className='px-4'>
            <h2 className='text-2xl xl:text-3xl text-center font-bold text-black pt-5'>
              Edita tu imagen
            </h2>
            <ListOfTools />
          </div>
        </div>
        <div className='flex bg-slate-200 flex-col w-full'>
          <ViewImage />

          <ChangeImage />
        </div>
      </section>
    </main>
  )
}
