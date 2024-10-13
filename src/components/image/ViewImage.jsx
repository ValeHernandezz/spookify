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

  if (viewImage === ViewImageStateEnum.ORIGINAL)
    return <CtlImage publicId={image.public_id} />

  if (viewImage === ViewImageStateEnum.EDIT)
    return <CtlImageEdit publicId={image.public_id} />

  if (viewImage === ViewImageStateEnum.COMPARE)
    return <CtlImageCompare publicId={image.public_id} />
}
