'use client'
import React, { useState } from 'react'
import { sections } from '@/lib'

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
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <div
        className={`nav-links fixed z-50 inset-0 p-10 overflow-y-auto ${
          menuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="flex justify-center px-4">
          <div className="fixed inset-0 bg-gray-500/70"></div>
          <div className="rounded-lg shadow-lg relative overflow-hidden w-full mx-auto animate-fade-down animate-duration-500 min-w-[250px]">
            <div className="flex w-full flex-col">
              {/* Header */}
              <div className="flex w-full bg-fourth text-white items-center py-5 justify-between px-4">
                <h2 className="text-2xl font-bold text-center">Menú</h2>

                <div
                  className="close font-bold cursor-pointer"
                  onClick={handleCloseMenu}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10l4 4m0 -4l-4 4"></path>
                    <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                  </svg>
                </div>
              </div>

              {/* Links */}
              <ul className="w-full font-medium text-lg py-5 gap-2 px-4 flex flex-col space-y-5 bg-white">
                <a
                  className="w-full flex items-center justify-between"
                  href="/#inicio"
                  onClick={handleCloseMenu}
                >
                  Inicio
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
                  </svg>
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
