export interface CloudinaryUploadResponse {
  asset_id: string
  public_id: string
  version: number
  version_id: string
  signature: string
  width: number
  height: number
  format: string
  resource_type: string
  created_at: string
  tags: string[]
  bytes: number
  type: string
  etag: string
  placeholder: boolean
  url: string
  secure_url: string
  folder: string
  access_mode: string
  original_filename: string
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
  transformations: Record<string, any>
}

export enum ToolCategoryEnum {
  Background = 'Fondos',
  Crop = 'Cortar',
  Overlay = 'Overlay',
  Detection = 'Detectar',
}

export interface ToolCategory {
  label: string
  icon: () => JSX.Element
}
