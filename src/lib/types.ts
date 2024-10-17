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
  category: ToolCategoryEnum
  transformations?: object
  icon?: () => JSX.Element
  options?: object
  replace?: { from: string; to: string; preserveGeometry: true }
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
