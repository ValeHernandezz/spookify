import React from 'react'
import Logo from '@/components/utils/Logo'

import { sections } from '@/lib'

export default function Header() {
  return (
    <header
      className="w-full p-10 flex items-center justify-between"
      id="inicio"
    >
      <div>
        <Logo href="/" className="text-left" />
      </div>

      <nav>
        <ul className="hidden sm:flex gap-8 text-slate-100 ">
          {sections.map(({ id, name, url }) => {
            return (
              <li className="text-xl font-semibold" key={id}>
                <a className="shadow-effect" href={url}>
                  {name}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
