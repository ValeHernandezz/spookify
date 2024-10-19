'use client'
import { useState, useEffect, createContext, useContext } from 'react'
import {
  CloudinaryUploadResponse,
  ViewImageState,
  ViewImageStateEnum,
} from '@/lib/types'

const EditorContext = createContext({})

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  const [image, setImage] = useState({})
  const [viewImage, setViewImage] = useState<{ state: ViewImageStateEnum }>({
    state: ViewImageStateEnum.ORIGINAL,
  })
  const [loading, setLoading] = useState(false)
  const [loadingPrompt, setLoadingPrompt] = useState(false)

  useEffect(() => {
    const imageOld = JSON.parse(localStorage.getItem('image') ?? '{}')

    setImage(imageOld)

    const viewImageOld = JSON.parse(
      localStorage.getItem('view') ?? '{"state": "original"}'
    )

    setViewImage(viewImageOld)
  }, [])

  function changeImage(newImage: CloudinaryUploadResponse) {
    localStorage.setItem('image', JSON.stringify(newImage))
    setImage(newImage)
  }

  function changeViewImage(newState: ViewImageState) {
    localStorage.setItem('view', JSON.stringify(newState))
    setViewImage(newState)
  }

  function changeLoading(newState: boolean) {
    setLoading(newState)
  }

  function changeLoadingPrompt(newState: boolean) {
    setLoadingPrompt(newState)
  }
  return (
    <EditorContext.Provider
      value={{
        image,
        changeImage,
        viewImage,
        changeViewImage,
        loading,
        changeLoading,
        loadingPrompt,
        changeLoadingPrompt,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}

const useEditor = () => {
  return useContext(EditorContext)
}

export default useEditor
