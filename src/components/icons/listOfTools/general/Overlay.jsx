import React from 'react'

export default function Overlay() {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='size-6'
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182A4 4 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182A2 2 0 0 1 13.192 9zM15 13h.01M18 13h.01' />
      <path d='M15 16.5c1 .667 2 .667 3 0M8.632 15.982A4.037 4.037 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183A2 2 0 0 1 4.192 4h6.616a2 2 0 0 1 2 2M6 8h.01M9 8h.01' />
      <path d='M6 12c.764-.51 1.528-.63 2.291-.36' />
    </svg>
  )
}
