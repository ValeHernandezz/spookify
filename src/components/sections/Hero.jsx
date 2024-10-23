'use client'
import React from 'react'
import FormImage from '@/components/dropzone/FormImage'

export default function Hero() {
  return (
    <section className='h-[90vh]'>
      <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-x-16 h-[70vh]'>
        <div className='pb-5 lg:p-0'>
          <h1 className='text-4xl sm:text-5xl xl:text-[3.2rem] xs:w-[15ch] md:max-w-[400px] text-center lg:text-left text-white'>
            Añade un toque <span className='text-gradient'>espeluznante</span> a
            tus recuerdos
          </h1>
        </div>
        <FormImage />
      </div>
    </section>
  )
}
