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
  id: number;
  title: string;
  category: ToolCategory;
  transformations: Record<string, any>;
}

export enum ToolCategory {
  Background = 'Background',
  Crop = 'Crop',
  Overlay = 'Overlay',
  Detection = 'Detection',
}
