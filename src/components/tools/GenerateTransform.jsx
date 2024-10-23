'use client'
import React from 'react'
import { Sparkles } from '@/icons/index'


export default function GenerateTransform({
  handleTransformCustom,
  categoryLabel,
  loading,
}) {
  function getCustomTexts(categoryLabel) {
    switch (categoryLabel) {
      case 'Transformar':
        return {
          title: 'Personalizado',
          placeholder: 'Ej. Convertir en satanás...',
        }
      case 'Fondos':
        return {
          title: 'Personalizado',
          placeholder: 'Ej. Fondo de niebla...',
        }
      case 'Overlay':
        return {
          title: 'Personalizado',
          placeholder: 'Ej. Máscara de Jason...',
        }
      case 'Disfraces':
        return {
          title: 'Personalizado',
          placeholder: 'Ej. Disfraz de esqueleto...',
        }
      default:
        return {
          title: `${categoryLabel} Custom`,
          placeholder: `Escribe una transformación para ${categoryLabel}...`,
        }
    }
  }

  const { title, placeholder } = getCustomTexts(categoryLabel)

  return (
    <form
      className='pl-4 pt-2'
      onSubmit={(e) => handleTransformCustom(e, categoryLabel)}
    >
      <label className='text-sm font-semibold flex items-center gap-x-1 text-slate-200/90'>
        <Sparkles /> {title}
      </label>

      <div className='relative pt-2'>
        <input
          type='text'
          name='transform'
          placeholder={placeholder}
          className='w-full rounded-md text-slate-200/90 bg-slate-400/20 pl-2 border-gray-500 py-2 pe-10 shadow-sm text-sm '
        />

        <span className='absolute inset-y-0 end-0 grid w-10 pt-2 place-content-center'>
          {loading ? (
            <div className='loaderCircle mr-2'></div>
          ) : (
            <button type='submit' className='text-gray-600 hover:text-gray-700'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='size-5 text-primary'
              >
                <path d='M0 0h24v24H0z' stroke='none' />
                <path d='M4.698 4.034 21 12 4.698 19.966a.503.503 0 0 1-.546-.124.555.555 0 0 1-.12-.568L6.5 12 4.032 4.726a.555.555 0 0 1 .12-.568.503.503 0 0 1 .546-.124zM6.5 12H21' />
              </svg>
            </button>
          )}
        </span>
      </div>
    </form>
  )
}
