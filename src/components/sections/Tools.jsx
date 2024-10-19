import React from 'react'
import Arrow from '@/components/icons/tools/Arrow'

export default function Tools() {
  return (
    <section id='tools' className="text-slate-200 text-[17px] pt-10 md:pt-20 pb-60 grid xl:grid-cols-[650px_1fr] max-w-[700px] xl:max-w-[1400px] mx-auto gap-10 place-items-center">
      <div className="px-6 md:px-0">
        <img src="/tools/tools.webp" alt="Imagen de herramientas" />
      </div>
      <aside className='px-6 md:px-0'>
        <h2 className="text-4xl text-center md:text-left font-bold mb-8 w-[15ch] md:w-auto mx-auto">
          Se potencia con <span className="text-gradient">Cloudinary</span> y sus herramientas
        </h2>
        <p className="mb-8 text-pretty md:text-balance">
          Hemos integrado la API de Cloudinary y sus potentes herramientas para
          transformar y optimizar tus imágenes de manera eficiente. Desde la
          manipulación de imágenes hasta la generación de efectos únicos, puedes
          aprovechar todo el poder de Cloudinary para llevar tu creatividad a un
          nuevo nivel.
        </p>
        <div className="flex flex-col gap-3 text-primary">
          <div className="w-max">
            <a
              className="flex items-center transition duration-300 hover:text-tertiary"
              href="https://next.cloudinary.dev/cldimage/examples"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Arrow className="size-5 mr-2" />
              Documentación de la API de Cloudinary
            </a>
          </div>
          <div className="w-max">
            <a
              className="flex items-center transition duration-300 hover:text-tertiary"
              href="https://cloudinary.com/demos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Arrow className="size-5 mr-2" />
              Prueba las demo de Cloudinary aquí
            </a>
          </div>
        </div>
      </aside>
    </section>
  )
}
