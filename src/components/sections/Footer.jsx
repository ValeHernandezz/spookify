import React from 'react'
import Logo from '@/components/utils/Logo'
import { sections } from '@/lib'
import { GitHub, CloudinaryWordmark } from '@/icons/index'

export default function Footer() {
  return (
    <footer className="w-full py-10 px-6 md:px-10 border-t border-slate-200/50">
      <div className="w-full mx-auto flex flex-col justify-center gap-12">
        <div className="flex justify-center">
          <Logo href="#inicio" />
        </div>

        <ul className="text-lg flex items-center justify-center flex-col gap-3 sm:gap-4 md:gap-12 md:flex-row transition-all duration-500">
          {sections.map(({ id, name, url }) => {
            return (
              <li key={id}>
                <a
                  href={url}
                  className="text-slate-400 hover:text-primary transition duration-500"
                >
                  {name}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center">
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/nicomelendez"
            className="flex items-center gap-3 text-slate-200 transition-all duration-300 hover:text-primary opacity-85 hover:opacity-100"
          >
            <img
              className="size-9 rounded-full"
              src="/profiles/nicomelendez-profile.webp"
              alt="Foto perfil Valentina Hernández"
            />
            <small className="text-lg">nicomelendez</small>
          </a>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/ValeHernandezz"
            className="flex items-center gap-3 text-slate-200 transition-all duration-300 hover:text-primary opacity-85 hover:opacity-100"
          >
            <img
              className="size-9 rounded-full"
              src="/profiles/valehernandezz-profile.webp"
              alt="Foto perfil Valentina Hernández"
            />
            <small className="text-lg">valehernandezz</small>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
          <div className="flex justify-center md:justify-start items-center gap-3 text-slate-200">
            <p>Hecho con</p>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://cloudinary.com/"
            >
              <CloudinaryWordmark className="h-8 text-[#3448C5] hover:text-[#3448C5]/80 transition duration-300" />
            </a>
          </div>
          <span className="flex justify-center md:justify-center items-center text-base text-slate-500 text-center">
            ©
            <a
              href="#inicio"
              className="hover:text-slate-400 transition duration-300"
            >
              Spookify
            </a>
            &nbsp;2024 | #MoviendoLasManitas
          </span>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/spooky-ai-hackathon/spookify"
            className="flex justify-center md:justify-end items-center text-slate-200 transition-all duration-500 hover:text-primary "
          >
            <GitHub size="size-9" />
          </a>
        </div>
      </div>
    </footer>
  )
}
