import React from 'react'

export default function Background({ z }) {
  return (
    <div
      className={`${
        z ? 'z-[-1]' : 'z-[-50]'
      } fixed inset-0 h-[130vh] w-[130vw] bg-gradient-to-b from-zinc-900 to-zinc-800`}
    ></div>
  )
}
