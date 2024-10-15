import React from 'react'

export default function Photo({ size }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={size}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z' />
      <path d='m3 16 5-5c.928-.893 2.072-.893 3 0l5 5' />
      <path d='m14 14 1-1c.928-.893 2.072-.893 3 0l3 3' />
    </svg>
  )
}
