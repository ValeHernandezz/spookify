'use client'
import React from 'react'
import { Providers } from '@/store/Providers'

export default function EditorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      {children}
    </Providers>
  )
}
