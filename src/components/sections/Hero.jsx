'use client'
import React from 'react'
import FormImage from '@/components/dropzone/FormImage'

export default function Hero() {
  return (
    <section className="h-[90vh]">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-x-16 h-[70vh]">
        <div className="pb-5 lg:p-0">
          <h1 className="w-[15ch] md:max-w-[400px] text-center lg:text-left text-white">
            Dale un toque <span className="text-gradient">sobrenatural</span> a tus recuerdos
          </h1>
        </div>
        <FormImage />
      </div>
    </section>
  )
}
