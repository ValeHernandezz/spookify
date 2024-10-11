'use client'
import { useState, useEffect, createContext, useContext } from 'react'
import { CloudinaryUploadResponse } from '@/lib/types'

const EditorContext = createContext({})

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  const [image, setImage] = useState({})
  const [listEffect, setEffect] = useState([])

  useEffect(() => {
    const imageOld = JSON.parse(localStorage.getItem('image') ?? '{}')

    setImage(imageOld)
  }, [])

  function changeImage(newImage: CloudinaryUploadResponse) {
    localStorage.setItem('image', JSON.stringify(newImage))
    setImage(newImage)
    console.log(newImage)
  }

  return (
    <EditorContext.Provider value={{ image, changeImage, listEffect }}>
      {children}
    </EditorContext.Provider>
  )
}

const useEditor = () => {
  return useContext(EditorContext)
}

export default useEditor
