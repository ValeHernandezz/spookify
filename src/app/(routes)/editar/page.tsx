import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'

export default function EditorPage() {
  return (
    <main className='text-center text-white'>
      <h2 className='text-3xl font-bold'>Edita tu imagen</h2>
      <section>
        <ChangeImage/>
        <ViewImage />
      </section>
    </main>
  )
}
