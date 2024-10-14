import React from 'react'
import Ghost from '@/components/icons/Ghost'

export default function Header() {
  return (
    <header className="w-full p-10">
      <h2 className="flex text-left items-center gap-x-3 text-3xl font-bold text-gradient">
        <Ghost size="w-10" /> Spookify
      </h2>
    </header>
  )
}