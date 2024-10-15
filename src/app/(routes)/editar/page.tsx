import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'
import ListOfTools from '@/components/tools/ListOfTools'
import Background from '@/components/utils/Background'

export default function EditorPage() {
  return (
    <main className='min-h-[100vh]'>
      <Background z={true} />
      <section className='flex'>
        <div className='flex h-screen flex-col bg-white w-[400px]'>
          <div className='px-4'>
            <h2 className='text-3xl font-bold text-black pt-5'>
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
