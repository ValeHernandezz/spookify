import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'
import ListOfTools from '@/components/tools/ListOfTools'

export default function EditorPage() {
  return (
    <main className='text-center text-white'>
      <h2 className='text-3xl font-bold'>Edita tu imagen</h2>
      <section className='flex w-full justify-center pt-10'>
        <ListOfTools />
        <div className='flex flex-col'>
          <ChangeImage />
          <ViewImage />
        </div>
      </section>
    </main>
  )
}
