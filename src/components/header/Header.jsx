import React from 'react'
import Ghost from '@/components/icons/Ghost'
import Link from 'next/link'

import { sections } from '@/lib'

export default function Header() {
  return (
    <header
      className="w-full p-10 flex items-center justify-between"
      id="inicio"
    >
      <div>
        <Link
          href="/"
          className="flex text-left items-center gap-x-3 text-3xl font-bold text-gradient"
        >
          <Ghost size="w-10" /> Spookify
        </Link>
      </div>
      <nav>
        <ul className="hidden sm:flex gap-5 text-slate-200 ">
          {sections.map(({ id, name, url }) => {
            return (
              <li className="text-lg font-semibold" key={id}>
                <a
                  className="hover:bg-slate-100/5 hover:border-slate-950/30 hover:border-[1px] border-transparent border-[1px]  py-1.5 px-3 transition duration-300 rounded-md "
                  href={url}
                >
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
