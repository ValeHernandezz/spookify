import React from 'react'

export default function Compare({ size }) {
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
      <path d='M4 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0' />
      <path d='M11 6h5a2 2 0 0 1 2 2v8' />
      <path d='m14 9-3-3 3-3M13 18H8a2 2 0 0 1-2-2V8' />
      <path d='m10 15 3 3-3 3' />
    </svg>
  )
}
