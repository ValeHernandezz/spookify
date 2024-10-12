'use client'
import React from 'react'
import useEditor from '@/store/Providers'

export default function Cut() {
  const { image, changeImage } = useEditor()
  console.log(image)

  const { url } = image

  function addCloudinaryTransformation(url) {
    const uploadKeyword = '/upload/'
    const transformation = 'c_crop,g_north_east,h_250,w_200/'
    // Verificar si el URL es válido y contiene "upload"
    if (!url || !url.includes(uploadKeyword)) {
      console.warn("La URL no contiene 'upload' o es inválida.")
      return
    }

    if (url.includes(uploadKeyword)) {
      image.url = url.replace(
        uploadKeyword,
        `${uploadKeyword}${transformation}`
      )
      changeImage(image)
    } else {
      console.warn("No se encontró 'upload' en la URL proporcionada.")
      return url
    }
  }

  return (
    <button onClick={addCloudinaryTransformation(url)}>
      Recorta la imagen
    </button>
  )
}
