import React from 'react'
import Link from 'next/link'
import Ghost from '@/components/icons/Ghost'
import Cloudinary from '@/components/icons/footer/Cloudinary'
import GitHub from '@/components/icons/footer/GitHub'
import { sections } from '@/lib'

export default function Footer() {
  return (
    <footer className="w-full p-10 border-t border-slate-200/50">
      <div className="mx-auto px-4 sm:px-6 lg:px-0">
        <div className="w-full mx-auto">
          <Link
            href="#inicio"
            className="flex justify-center items-center gap-x-3 text-3xl font-bold text-gradient"
          >
            <Ghost size="w-10" /> Spookify
          </Link>
          
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-16 ">
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

          <div className="flex space-x-12 justify-center items-center mb-10">
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
            <div className="flex justify-start items-center gap-3 text-slate-200">
              <p>Hecho con</p>
              <Cloudinary className="h-8 text-[#3448C5] hover:text-[#3448C5]/80 transition duration-300" />
            </div>
            <span className="flex justify-center items-center text-base text-slate-500 text-center">
              ©<a href="#inicio">Spookify</a> 2024 | #MoviendoLasManitas
            </span>
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/spooky-ai-hackathon/spookify"
              className="flex justify-end items-center text-slate-200 transition-all duration-500 hover:text-primary "
            >
              <GitHub size="size-9" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
