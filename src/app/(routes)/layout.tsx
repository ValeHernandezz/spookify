'use client'
import { Providers } from '@/store/Providers'
import React from 'react'

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
