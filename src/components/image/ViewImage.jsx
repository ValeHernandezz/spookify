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

  if (!image.public_id)
    return (
      <div className="h-[400px] flex items-center justify-center">
        <Loader />
      </div>
    )

  if (viewImage === ViewImageStateEnum.ORIGINAL) return <CtlImage />

  if (viewImage === ViewImageStateEnum.EDIT) return <CtlImageEdit />

  if (viewImage === ViewImageStateEnum.COMPARE) return <CtlImageCompare />
}
