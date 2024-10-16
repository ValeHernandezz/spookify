import { Tool, ToolCategory, ToolCategoryEnum } from './types'
import Background from '@/components/icons/Background'
import Cut from '@/components/icons/Cut'
import Overlay from '@/components/icons/Overlay'
import Sparkles from '@/components/icons/Sparkles'
import PhotoSpark from '@/components/icons/PhotoSpark'
import CropZone from '@/components/icons/CropZone'
import InputSpark from '@/components/icons/InputSpark'
import Wand from '@/components/icons/Wand'
import Zombie from '@/components/icons/Zombie'
import Ghost2 from '@/components/icons/Ghost2'
import Devil from '@/components/icons/Devil'
import Skeleton from '@/components/icons/Skeleton'

export function applyGenerativeReplace(
  publicId: any,
  fromObject: any,
  toObject: any
) {
  const baseUrl = 'https://res.cloudinary.com/djslvlh8h/image/upload/'
  const transformation = `e_gen_replace:from_${fromObject};to_${toObject};preserve-geometry_true`
  const basePath = 'v1/'

  return `${baseUrl}${transformation}/${basePath}${publicId}`
}

export const toolCategories: Record<string, ToolCategory> = {
  Transform: {
    label: 'Transformar',
    icon: Wand,
  },
  Background: {
    label: 'Fondos',
    icon: Background,
  },
  Overlay: {
    label: 'Overlay',
    icon: Overlay,
  },
  Crop: {
    label: 'Cortar',
    icon: Cut,
  },
}

export const tools: Tool[] = [
  {
    id: 1,
    title: 'Generar fondo con IA',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    options: [
      {
        id: 1,
        title: 'Apocalipsis',
        transformations: {
          replaceBackground: 'Dark clouds over ruined city',
        },
      },
      {
        id: 2,
        title: 'Cementerio',
        transformations: {
          replaceBackground: 'Foggy graveyard with spooky tombstones',
        },
      },
      {
        id: 3,
        title: 'Invasión zombie',
        transformations: {
          replaceBackground: 'Horde of zombies attacking streets',
        },
      },
    ],
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
    title: 'Convertir en zombi',
    icon: Zombie,
    category: ToolCategoryEnum.Transform,
    transformations: {
      fromObject: 'person',
      toObject: 'zombie_devil',
    },
  },
  {
    id: 7,
    title: 'Convertir en fantasma',
    icon: Ghost2,
    category: ToolCategoryEnum.Transform,
    transformations: {
      fromObject: 'person',
      toObject: 'ghostly_devil',
    },
  },
  {
    id: 8,
    title: 'Convertir en demonio',
    icon: Devil,
    category: ToolCategoryEnum.Transform,
    transformations: {
      fromObject: 'person',
      toObject: 'demonic_devil',
    },
  },
  {
    id: 9,
    title: 'Convertir en esqueleto',
    icon: Skeleton,
    category: ToolCategoryEnum.Transform,
    transformations: {
      fromObject: 'person',
      toObject: 'skeletal_devil',
    },
  },
]
