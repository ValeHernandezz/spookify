import { Tool } from './types'

export const tools: Tool[] = [
  {
    id: 1,
    title: 'Remplazar background',
    transformations: {
      replaceBackground: 'Add scary ghosts to the background',
    },
  },
  {
    id: 2,
    title: 'Rellenar imagen',
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
    transformations: {
      removeBackground: true,
      underlay: 'c1v0fyzn8xphbkoqdbgb',
      sizes: '100vw',
    },
  },
]
