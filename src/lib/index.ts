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
import Alien from '@/components/icons/Alien'
import Devil from '@/components/icons/Devil'
import Skeleton from '@/components/icons/Skeleton'
import Clothe from '@/components/icons/Clothe'
import Arrow from '@/components/icons/tools/Arrow'
import Cloudinary from '@/components/icons/tools/Cloudinary'
import Perplexity from '@/components/icons/tools/Perplexity'

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
  Costumes: {
    label: 'Disfraces',
    icon: Clothe,
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
    replaceBackground: 'Dark clouds over ruined city',
  },
  {
    id: 2,
    title: 'Cementerio',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    replaceBackground: 'Foggy graveyard with spooky tombstones',
  },
  {
    id: 3,
    title: 'Invasión zombie',
    icon: Sparkles,
    category: ToolCategoryEnum.Background,
    replaceBackground: 'Horde of zombies attacking streets',
  },
  {
    id: 4,
    title: 'Rellenar imagen',
    icon: InputSpark,
    category: ToolCategoryEnum.Crop,
    transformations: {
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
      from: 'appearance',
      to: 'zombie_devil',
      preserveGeometry: true,
    },
  },
  {
    id: 12,
    title: 'Convertir en alien',
    icon: Alien,
    category: ToolCategoryEnum.Transform,
    replace: {
      from: 'appearance',
      to: 'gray_alien',
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
      to: 'demon_from_hell',
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
  {
    id: 15,
    title: 'Disfraz de Freddy Krueger',
    icon: Skeleton,
    category: ToolCategoryEnum.Costumes,
    replace: {
      from: 'clothes_overalls_shoes',
      to: 'Transforms the clothes into Freddy Krueger is iconic striped sweater and hat',
      preserveGeometry: true,
    },
  },
  {
    id: 16,
    title: 'Disfraz de Jason Voorhees',
    icon: Skeleton,
    category: ToolCategoryEnum.Costumes,
    replace: {
      from: 'clothes_overalls_shoes',
      to: 'Transforms the clothes into Jason Voorhees outfit with his iconic hockey mask.',
      preserveGeometry: true,
    },
  },
  {
    id: 17,
    title: 'Disfraz de Michael Myers',
    icon: Skeleton,
    category: ToolCategoryEnum.Costumes,
    replace: {
      from: 'clothes_overalls_shoes',
      to: "Transforms the clothes into Michael Myers' dark blue jumpsuit and his eerie white mask.",
      preserveGeometry: true,
    },
  },
  {
    id: 18,
    title: 'Disfraz de Chucky',
    icon: Skeleton,
    category: ToolCategoryEnum.Costumes,
    replace: {
      from: 'clothes_overalls_shoes',
      to: "Transforms the clothes into Chucky's overalls with his striped shirt and menacing doll-like appearance.",
      preserveGeometry: true,
    },
  },
]

export const images = [
  {
    id: 1,
    title: 'Antes del susto',
    image: '/gallery/original.webp',
  },
  {
    id: 2,
    title: 'Conviértete en zombie',
    image: '/gallery/transformada.webp',
  },
  {
    id: 3,
    title: 'Ambiente aterrador',
    image: '/gallery/fondo-tenebroso.avif',
  },
  {
    id: 4,
    title: 'Desata el horror',
    image: '/gallery/todo.webp',
  },
]

export const sections = [
  {
    id: 1,
    name: 'Ejemplos',
    url: '/#examples',
  },
  {
    id: 2,
    name: 'Herramientas',
    url: '/#tools',
  },
  {
    id: 3,
    name: 'Galería',
    url: '/galeria',
  },
]

export const toolsLinks = [
  {
    id: 1,
    title: 'Prueba las demos de Cloudinary aquí',
    href: 'https://cloudinary.com/demos',
    icon: Arrow
  },
  {
    id: 2,
    title: 'Documentación API de Cloudinary',
    href: 'https://next.cloudinary.dev/cldimage/examples',
    icon: Cloudinary
  },
  {
    id: 3,
    title: 'Documentación API de Perplexity',
    href: 'https://docs.perplexity.ai/home',
    icon: Perplexity
  }
]