'use client'
import { getCldImageUrl } from 'next-cloudinary'
import useEditor from '@/store/Providers'

type TransformOptions = {
  publicId: string
  transformations: object
}

export default function useTransform() {
  const { changeLoading } = useEditor()

  const transformImage = async ({
    publicId,
    transformations,
  }: TransformOptions) => {
    try {
      changeLoading(true)

      const url = await Promise.resolve(
        getCldImageUrl({
          src: publicId,
          ...transformations,
        })
      )

      if (url) {
        changeLoading(false)

        return url
      } else {
        throw new Error('Transformación fallida')
      }
    } catch (error) {
      console.log(error)
      changeLoading(false)
      return null
    }
  }

  return { transformImage }
}
