import React from 'react'

export default function ImageContainer({ children }) {
  return (
    <div className='flex justify-center h-auto w-full mx-auto md:max-w-[800px] p-5 lg:p-10 sombra'>
      {children}
    </div>
  )
}
