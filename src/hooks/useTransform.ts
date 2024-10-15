'use client'
import { getCldImageUrl } from 'next-cloudinary'
import useEditor from '@/store/Providers'
import { pollForProcessingImage } from '@cloudinary-util/util'

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

      // Genera la URL de la imagen con las transformaciones
      const url = getCldImageUrl({
        src: publicId,
        ...transformations,
      })

      // Si la URL es válida, inicia el sondeo para verificar el procesamiento
      if (url) {
        await pollForProcessingImage({ src: url }) // Espera a que el procesamiento se complete
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
