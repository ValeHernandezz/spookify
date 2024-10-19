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
    title: 'Apocalíptico',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    transformations: {
      replaceBackground: 'Dark clouds over ruined city',
    },
  },
  {
    id: 2,
    title: 'Cementerio',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    transformations: {
      replaceBackground: 'Foggy graveyard with spooky tombstones',
    },
  },
  {
    id: 3,
    title: 'Invasión zombie',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    transformations: {
      replaceBackground: 'Horde of zombies attacking streets',
    },
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    title: 'Mascara de Jason',
    category: ToolCategoryEnum.Overlay,
    replace: {
      from: 'face',
      to: 'jason_mask',
      preserveGeometry: true,
    },
  },
  {
    id: 8,
    title: 'Máscara de Michael Myers',
    category: ToolCategoryEnum.Overlay,
    replace: {
      from: 'face',
      to: 'michael_myers_mask',
      preserveGeometry: true,
    },
  },
  {
    id: 9,
    title: 'Máscara de Ghostface',
    category: ToolCategoryEnum.Overlay,
    replace: {
      from: 'face',
      to: 'ghostface_mask',
      preserveGeometry: true,
    },
  },
  {
    id: 10,
    title: 'Máscara de Leatherface',
    category: ToolCategoryEnum.Overlay,
    replace: {
      from: 'face',
      to: 'leatherface_mask',
      preserveGeometry: true,
    },
  },
  {
    id: 11,
    title: 'Convertir en zombi',
    icon: Zombie,
    category: ToolCategoryEnum.Transform,
    replace: {
      from: 'person',
      to: 'zombie_devil',
      preserveGeometry: true,
    },
  },
  {
    id: 12,
    title: 'Convertir en fantasma',
    icon: Ghost2,
    category: ToolCategoryEnum.Transform,
    replace: {
      from: 'person',
      to: 'ghostly_devil',
      preserveGeometry: true,
    },
  },
  {
    id: 13,
    title: 'Convertir en demonio',
    icon: Devil,
    category: ToolCategoryEnum.Transform,
    replace: {
      from: 'person',
      to: 'demonic_devil',
      preserveGeometry: true,
    },
  },
  {
    id: 14,
    title: 'Convertir en esqueleto',
    icon: Skeleton,
    category: ToolCategoryEnum.Transform,
    replace: {
      from: 'person',
      to: 'skeletal_devil',
      preserveGeometry: true,
    },
  },
]

export const images = [
  {
    id: 1,
    title: 'Original',
    image: '/gallery/original.jpg',
  },
  {
    id: 2,
    title: 'Transformada',
    image: '/gallery/transformada.jpeg',
  },
  {
    id: 3,
    title: 'Fondo tenebroso',
    image: '/gallery/fondo-tenebroso.avif',
  },
  {
    id: 4,
    title: 'Sin límites',
    image: '/gallery/todo.png',
  },
]

export const sections = [
  {
    id: 1,
    name: 'Ejemplos',
    url: '/#examples'
  },
  {
    id: 2,
    name: 'Herramientas',
    url: '/#tools'
  },
  {
    id: 3,
    name: 'Galería',
    url: '/galeria'
  }
]
