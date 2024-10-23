import { Alien, Arrow, Background,  Biohazard, Chucky, CloudinaryLogo, Clothe, CropZone, Devil, Expand, FreddyKrueger, Grave, JasonVoorhees, Joker, Leatherface, MichaelMyers, MushroomCloud, Overlay, Pennywise, Perplexity, Ruler, Skeleton, Wand, Zombie } from '@/icons/index'
import { Tool, ToolCategory, ToolCategoryEnum } from './types'

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
  Adjust: {
    label: 'Ajustar',
    icon: Ruler,
  },
}

export const tools: Tool[] = [
  {
    id: 1,
    title: 'Apocalíptico',
    icon: MushroomCloud,
    category: ToolCategoryEnum.Background,
    replaceBackground: 'Dark clouds over ruined city',
  },
  {
    id: 2,
    title: 'Cementerio',
    icon: Grave,
    category: ToolCategoryEnum.Background,
    replaceBackground: 'Foggy graveyard with spooky tombstones',
  },
  {
    id: 3,
    title: 'Invasión zombie',
    icon: Biohazard,
    category: ToolCategoryEnum.Background,
    replaceBackground: 'Horde of zombies attacking streets',
  },
  {
    id: 4,
    title: 'Expandir imagen',
    icon: Expand,
    category: ToolCategoryEnum.Adjust,
    transformations: {
      fillBackground: true,
      crop: 'pad',
    },
  },
  {
    id: 5,
    title: 'Área importante',
    icon: CropZone,
    category: ToolCategoryEnum.Adjust,
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
    id: 7,
    title: 'Máscara de Jason Voorhees',
    icon: JasonVoorhees,
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
    icon: MichaelMyers,
    category: ToolCategoryEnum.Overlay,
    replace: {
      from: 'face',
      to: 'michael_myers_mask',
      preserveGeometry: true,
    },
  },
  {
    id: 9,
    title: 'Máscara de Pennywise',
    icon: Pennywise,
    category: ToolCategoryEnum.Overlay,
    replace: {
      from: 'face',
      to: 'pennywise_from_it_movie',
      preserveGeometry: true,
    },
  },
  {
    id: 10,
    title: 'Máscara de Leatherface',
    icon: Leatherface,
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
      to: 'demon_red_from_hell',
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
    id: 6,
    title: 'Convertir en Joker',
    icon: Joker,
    category: ToolCategoryEnum.Transform,
    replace: {
      from: 'person',
      to: 'joker the villan to batman',
      preserveGeometry: true,
    },
  },
  {
    id: 15,
    title: 'Disfraz de Freddy Krueger',
    icon: FreddyKrueger,
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
    icon: JasonVoorhees,
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
    icon: MichaelMyers,
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
    icon: Chucky,
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
    image: '/examples/original.webp',
  },
  {
    id: 2,
    title: 'Conviértete en zombie',
    image: '/examples/transformada.webp',
  },
  {
    id: 3,
    title: 'Ambiente aterrador',
    image: '/examples/fondo-tenebroso.avif',
  },
  {
    id: 4,
    title: 'Desata el horror',
    image: '/examples/todo.webp',
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
]

export const toolsLinks = [
  {
    id: 1,
    title: 'Prueba las demos de Cloudinary aquí',
    href: 'https://cloudinary.com/demos',
    icon: Arrow,
  },
  {
    id: 2,
    title: 'Documentación API de Cloudinary',
    href: 'https://next.cloudinary.dev/cldimage/examples',
    icon: CloudinaryLogo,
  },
  {
    id: 3,
    title: 'Documentación API de Perplexity',
    href: 'https://docs.perplexity.ai/home',
    icon: Perplexity,
  },
]
