import React from 'react'

export default function MagnifyingGlassPlus({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" transform='scale(-1, 1)'>
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 10h3m0 0h3m-3 0V7m0 3v3m5 2l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14"
      />
    </svg>
  )
}
