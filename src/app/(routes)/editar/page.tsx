import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import ChangeImage from '@/components/image/ChangeImage'
import Background from '@/components/utils/Background'
import Aside from '@/components/sections/Aside'
import BtnAside from '@/components/utils/BtnAside'

export default function EditorPage() {
  return (
    <main className='min-h-[100vh] mb-32'>
      <Background z={true} />
      <BtnAside />
      <section className='grid grid-cols-1 lg:grid-cols-[350px_1fr] px-4 2xl:px-0'>
        <Aside />
        <div className='flex bg-zinc-950 flex-col w-full pb-10 pt-[4.2rem] lg:pt-0 rounded-lg lg:rounded-none lg:rounded-r-lg'>
          <ViewImage />
          <ChangeImage />
        </div>
      </section>
    </main>
  )
}
