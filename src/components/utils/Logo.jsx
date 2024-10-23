import React from 'react'
import Link from 'next/link'
import Ghost from '@/components/icons/header/Ghost'

export default function Logo({ href, className}) {
  return (
    <Link href={href} className={`flex justify-center items-center gap-x-3 hover:scale-105 transition duration-300 ${className}`}>
      <Ghost size="w-10" />
      <span className="text-3xl font-bold text-gradient">Spookify</span>
    </Link>
  )
}