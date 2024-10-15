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
      className={`flex items-center gap-x-2 text-sm p-2.5 rounded-lg ${color}`}
      onClick={onClick}
    >
      {children}
      {title}
    </button>
  )
}
