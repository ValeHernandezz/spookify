import React from 'react'
import Ghost from '@/components/icons/Ghost'

export default function Header() {
  return (
    <header className="w-full p-10">
      <h2 className="flex text-left items-center gap-x-2 text-2xl font-bold text-gradient">
        <Ghost size="w-12" /> Spookify
      </h2>
    </header>
  )
}
