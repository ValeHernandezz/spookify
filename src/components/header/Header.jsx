import React from 'react'
import Ghost from '@/components/icons/Ghost'
import Link from 'next/link'

import { sections } from '@/lib'

export default function Header() {
  return (
    <header className="w-full p-10 flex items-center justify-between" id='inicio'>
      <div>
        <Link
          href="/"
          className="flex text-left items-center gap-x-3 text-3xl font-bold text-gradient"
        >
          <Ghost size="w-10" /> Spookify
        </Link>
      </div>
      <nav>
        <ul className="flex gap-8 text-slate-200">
          {sections.map(({ id, name, url }) => {
            return (
              <li className="text-lg hover:bg-slate-200/10 py-1 px-2 transition duration-300 rounded-md" key={id}>
                <a href={url}>{name}</a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
