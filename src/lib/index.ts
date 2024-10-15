import { Tool, ToolCategory, ToolCategoryEnum } from './types'
import Background from '@/components/icons/Background'
import Cut from '@/components/icons/Cut'
import Overlay from '@/components/icons/Overlay'
import Sparkles from '@/components/icons/Sparkles'
import PhotoSpark from '@/components/icons/PhotoSpark'
import CropZone from '@/components/icons/CropZone'
import InputSpark from '@/components/icons/InputSpark'
import Detect from '@/components/icons/Detect'

export const toolCategories: Record<string, ToolCategory> = {
  Background: {
    label: 'Fondos',
    icon: Background,
  },
  Crop: {
    label: 'Cortar',
    icon: Cut,
  },
  Overlay: {
    label: 'Overlay',
    icon: Overlay,
  },
  Detection: {
    label: 'Detectar',
    icon: Detect,
  },
}

export const tools: Tool[] = [
  {
    id: 1,
    title: 'Generar fondo con IA',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    transformations: {
      replaceBackground: 'Add scary ghosts to the background',
    },
  },
  {
    id: 2,
    title: 'Rellenar imagen',
    icon: InputSpark,
    category: ToolCategoryEnum.Crop,
    transformations: {
      width: 960,
      height: 600,
      fillBackground: true,
      crop: 'pad',
    },
  },
  {
    id: 3,
    title: 'Parte importante',
    icon: CropZone,
    category: ToolCategoryEnum.Crop,
    transformations: {
      width: 300,
      height: 300,
      crop: {
        type: 'thumb',
        width: 600,
        height: 600,
        source: true,
      },
      sizes: '100vw',
    },
  },
  {
    id: 4,
    title: 'Remplazar fondo',
    icon: PhotoSpark,
    category: ToolCategoryEnum.Background,
    transformations: {
      removeBackground: true,
      underlay: 'c1v0fyzn8xphbkoqdbgb',
      sizes: '100vw',
    },
  },
  {
    id: 5,
    title: 'Añadir mascara',
    category: ToolCategoryEnum.Overlay,
    transformations: {
      removeBackground: true,
      underlay: 'c1v0fyzn8xphbkoqdbgb',
      sizes: '100vw',
    },
  },
  {
    id: 6,
    title: 'Remplazar objeto',
    category: ToolCategoryEnum.Detection,
    transformations: {
      removeBackground: true,
      underlay: 'c1v0fyzn8xphbkoqdbgb',
      sizes: '100vw',
    },
  },
]
