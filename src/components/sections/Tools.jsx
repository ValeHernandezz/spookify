import React from 'react'
import { toolsLinks } from '@/lib'

export default function Tools() {
  return (
    <section
      id="tools"
      className="text-slate-200 text-[17px] pt-10 md:pt-20 pb-60 grid xl:grid-cols-[650px_1fr] max-w-[700px] xl:max-w-[1700px] mx-auto gap-10 place-items-center px-6 md:px-0"
    >
      <div>
        <img src="/tools/tools.webp" alt="Imagen de herramientas" />
      </div>

      <aside>
        <h2 className="text-4xl text-center xl:text-left font-bold mb-8 w-[15ch] md:w-[25ch] mx-auto xl:mx-0">
          Haz realidad tus monstruosidades con{' '}
          <span className="text-gradient">Cloudinary</span> y{' '}
          <span className="text-gradient">Perplexity</span>
        </h2>

        <p className="mb-8 text-pretty">
          Edita tus imágenes al estilo Halloween de forma rápida y precisa con
          la API de Cloudinary. Puedes optar por uno de nuestros estilos
          predeterminados o personalizar tu creación con una idea propia, y
          Perplexity se encargará de que tu descripción se refleje tal como la
          imaginaste.
        </p>

        <ul className="flex flex-col gap-3 text-primary">
          {toolsLinks.map(({ id, title, href, icon: Icon }) => {
            return (
              <li key={id} className="w-max ">
                <a
                  className="flex items-center transition duration-500 hover:text-tertiary"
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="size-5 mr-2" />
                  <div className="group relative w-max">
                    {title}
                    <span class="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-primary group-hover:w-full"></span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>
      </aside>
    </section>
  )
}
