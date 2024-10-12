'use client'
import React from 'react'
import useEditor from '@/store/Providers'
import CtlImage from './CtlImage'

export default function ViewImage() {
  const { image } = useEditor()

  if (!image.public_id) return <p className='text-white pt-10'>No hay una imagen</p>

  return <CtlImage publicId={image.public_id} />
}