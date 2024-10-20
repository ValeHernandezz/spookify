'use client'
import { useState, useEffect, createContext, useContext } from 'react'
import {
  CloudinaryUploadResponse,
  EditorContextType,
  ViewImageStateEnum,
} from '@/lib/types'

const EditorContext = createContext<EditorContextType | undefined>(undefined)

interface Props {
  children: React.ReactNode
}

export const Providers = ({ children }: Props) => {
  const [image, setImage] = useState<CloudinaryUploadResponse>({
    public_id: '',
    width: 0,
    height: 0,
    created_at: '',
    url: '',
    original_filename: '',
    appliedTransformations: [],
    transformedUrl: '',
  })
  const [viewImage, setViewImage] = useState<ViewImageStateEnum>(
    ViewImageStateEnum.ORIGINAL
  )
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingPrompt, setLoadingPrompt] = useState<boolean>(false)

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

  function changeViewImage(newState: ViewImageStateEnum) {
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
  const context = useContext(EditorContext)
  if (!context) {
    throw new Error('useEditor must be used within an EditorProvider')
  }
  return context
}

export default useEditor
