'use client'
import { getCldImageUrl } from 'next-cloudinary'
import useEditor from '@/store/Providers'
import { pollForProcessingImage } from '@cloudinary-util/util'
import { ViewImageStateEnum } from '@/lib/types'

type TransformOptions = {
  publicId: string
  transformations: object[]
}

export default function useTransform() {
  const { changeLoading, changeViewImage } = useEditor()

  const combineTransformations = (transformations: object[]) => {
    return transformations.reduce((acc, transformation) => {
      return { ...acc, ...transformation }
    }, {})
  }

  const transformImage = async ({
    publicId,
    transformations,
  }: TransformOptions) => {
    try {
      changeLoading(true)
      changeViewImage(ViewImageStateEnum.EDIT)
      const combinedTransformations = combineTransformations(transformations)

      const url = getCldImageUrl({
        src: publicId,
        ...combinedTransformations,
      })

      if (url) {
        await pollForProcessingImage({ src: url })
        changeLoading(false)
        return url
      } else {
        throw new Error('Transformación fallida')
      }
    } catch (error) {
      console.error('Error en la transformación:', error)
      changeLoading(false)
      return null
    }
  }

  return { transformImage }
}
