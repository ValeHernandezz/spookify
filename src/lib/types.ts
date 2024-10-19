export interface CloudinaryUploadResponse {
  public_id: string
  width: number
  height: number
  created_at: string
  url: string
  original_filename: string
  transformations?: string
  transformedUrl?: string
}

export enum ViewImageStateEnum {
  ORIGINAL = 'original',
  EDIT = 'edit',
  COMPARE = 'compare',
}

export type ViewImageState = {
  state: ViewImageStateEnum
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
}

export interface ToolCategory {
  label: string
  icon: () => JSX.Element
}
