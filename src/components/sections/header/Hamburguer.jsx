'use client'
import React, { useState } from 'react'
import { sections } from '@/lib'
import { Menu, X } from '@/icons/index'


export default function Hamburger() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  const handleCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <>
      {/* Hamburger Button */}
      <div className="hamburger sm:hidden z-50 fixed top-10 right-10 bg-primary rounded-full shadow-xl">
        <button
          className="p-2 text-white"
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="sr-only">Open menu</span>
          <Menu className='size-6'/>
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`nav-links fixed z-50 inset-0 p-10 overflow-y-auto ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex justify-center px-4">
          <div className="fixed inset-0 bg-zinc-800/50"></div>
          <div className="rounded-lg shadow-lg relative overflow-hidden w-full mx-auto animate-fade-down animate-duration-500 min-w-[250px]">
            <div className="flex w-full flex-col">
              {/* Header */}
              <div className="flex w-full bg-primary text-white items-center px-4 py-3 justify-between">
                <h2 className="text-2xl font-bold text-center">Menú</h2>

                <div
                  className="close font-bold cursor-pointer"
                  onClick={handleCloseMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="size-8" />
                </div>
              </div>

              {/* Links */}
              <ul className="w-full font-medium text-lg text-zinc-900 py-5 gap-3 px-4 flex flex-col bg-slate-100">
                <a
                  className="w-full flex items-center justify-between"
                  href="/#inicio"
                  onClick={handleCloseMenu}
                >
                  Inicio
                </a>

                {sections.map((item) => (
                  <a
                    className="w-full flex items-center justify-between"
                    href={item.url}
                    onClick={handleCloseMenu}
                    key={item.name}
                  >
                    {item.name}
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
