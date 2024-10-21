import React from 'react'

interface ButtonProps {
  color: string
  title: string
  onClick: () => void
  children: React.ReactNode
}

export default function Button({
  color,
  title,
  onClick,
  children,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-x-2 text-sm lg:text-base py-1.5 px-3 font-medium rounded-lg hover:opacity-85 transition duration-300 ${color}`}
      onClick={onClick}
    >
      {children}
      {title}
    </button>
  )
}
