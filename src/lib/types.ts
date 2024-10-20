export interface CloudinaryUploadResponse {
  public_id: string
  width: number
  height: number
  created_at: string
  url: string
  original_filename: string
  appliedTransformations?: []
  transformedUrl?: string
}

export enum ViewImageStateEnum {
  ORIGINAL = 'original',
  EDIT = 'edit',
  COMPARE = 'compare',
}

export interface Tool {
  id: number
  title: string
  icon?: () => JSX.Element
  category: ToolCategoryEnum
  transformations?: object
  replace?: { from: string; to: string; preserveGeometry: true }
  replaceBackground?: string
}

export enum ToolCategoryEnum {
  Background = 'Fondos',
  Crop = 'Cortar',
  Overlay = 'Overlay',
  Transform = 'Transformar',
  Costumes = 'Disfraces',
}

export interface ToolCategory {
  label: string
  icon: () => JSX.Element
}

export interface EditorContextType {
  image: CloudinaryUploadResponse
  changeImage: (newImage: CloudinaryUploadResponse) => void
  viewImage: ViewImageStateEnum
  changeViewImage: (newState: ViewImageStateEnum) => void
  loading: boolean
  changeLoading: (newState: boolean) => void
  loadingPrompt: boolean
  changeLoadingPrompt: (newState: boolean) => void
}
