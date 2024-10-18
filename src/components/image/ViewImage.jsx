'use client'
import React from 'react'
import useEditor from '@/store/Providers'
import CtlImage from './CtlImage'
import CtlImageCompare from './CtlImageCompare'
import CtlImageEdit from './CtlImageEdit'
import Loader from '@/components/utils/Loader'
import { ViewImageStateEnum } from '@/lib/types'

export default function ViewImage() {
  const { image, viewImage } = useEditor()

  if (!image.public_id) return <Loader />

  if (viewImage === ViewImageStateEnum.ORIGINAL) return <CtlImage />

  if (viewImage === ViewImageStateEnum.EDIT) return <CtlImageEdit />

  if (viewImage === ViewImageStateEnum.COMPARE) return <CtlImageCompare />
}

/* 'use client'
import React from 'react'
import ImageContainer from './ImageContainer'
import Image from 'next/image'

export default function ViewImage() {
  return (
    <ImageContainer>
      <Image
        className='w-full object-cover'
        src='./background.webp'
        width={1000}
        height={700}
        priority={true}
        alt={`Imagen`}
      />
    </ImageContainer>
  )
} */
