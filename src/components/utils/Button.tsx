import React from 'react'

interface ButtonProps {
  color: string
  title: string
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

export default function Button({
  color,
  title,
  onClick,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button
      className={`flex items-center gap-x-2 text-sm lg:text-base py-1.5 px-3 font-medium rounded-lg hover:opacity-85 transition duration-300 ${color} ${
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:opacity-85'
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {title}
    </button>
  )
}
