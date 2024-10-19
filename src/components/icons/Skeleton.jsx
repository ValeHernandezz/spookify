import React from 'react'

export default function Skeleton() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      className='size-5'
    >
      <g fill='none'>
        <g filter='url(#a)'>
          <path
            fill='url(#b)'
            d='M16 2C8.27 2 2 8.268 2 15.995c0 5.178 2.82 6.568 7 6.918V28c0 1.1.9 2 2 2s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-5.087c4.18-.36 7-1.74 7-6.918C30 8.268 23.73 2 16 2'
          />
        </g>
        <path
          fill='url(#c)'
          d='M16 2C8.27 2 2 8.268 2 15.995c0 5.178 2.82 6.568 7 6.918V28c0 1.1.9 2 2 2s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-2.508a.5.5 0 1 1 1 0V28c0 1.1.9 1.999 2 1.999s2-.9 2-2v-5.087c4.18-.36 7-1.74 7-6.918C30 8.268 23.73 2 16 2'
        />
        <path
          fill='url(#d)'
          d='M14 16.762C14 19.392 11.987 20 9.5 20S5 19.393 5 16.762 7.013 12 9.5 12s4.5 2.13 4.5 4.762'
        />
        <path
          fill='url(#e)'
          d='M27 16.762C27 19.392 24.987 20 22.5 20s-4.5-.607-4.5-3.238S20.013 12 22.5 12s4.5 2.13 4.5 4.762'
        />
        <path
          fill='url(#f)'
          d='M16.98 21.97h-1.97c-.5 0-.85-.49-.69-.96l.36-1.08c.19-.55.72-.93 1.31-.93s1.11.37 1.3.93l.37 1.08c.17.47-.18.96-.68.96'
        />
        <g filter='url(#g)' opacity='.32'>
          <rect width='1.5' height='4' x='11' y='25' fill='#fff' rx='.75' />
        </g>
        <g filter='url(#h)' opacity='.38'>
          <rect width='1.5' height='5' x='16' y='24' fill='#fff' rx='.75' />
        </g>
        <g filter='url(#i)' opacity='.8'>
          <path
            fill='#fff'
            d='M19.75 23h2.5v5.25a.75.75 0 0 1-1.5 0v-2.704c0-.682-.202-1.349-.58-1.916z'
          />
        </g>
        <path
          fill='url(#j)'
          fillRule='evenodd'
          d='M14.471 29.286c.324-.55.529-1.37.529-2.286 0-1.657-.672-3-1.5-3S12 25.343 12 27c0 .916.205 1.736.529 2.286.293-.348.471-.797.471-1.285v-2.51a.5.5 0 1 1 1 0v2.51c0 .488.178.937.471 1.285'
          clipRule='evenodd'
        />
        <path
          fill='url(#k)'
          fillRule='evenodd'
          d='M19.471 29.286c.324-.55.529-1.37.529-2.286 0-1.657-.672-3-1.5-3S17 25.343 17 27c0 .916.205 1.736.529 2.286.294-.348.471-.797.471-1.285v-2.51a.5.5 0 1 1 1 0v2.51c0 .488.177.937.471 1.285'
          clipRule='evenodd'
        />
        <defs>
          <radialGradient
            id='b'
            cx='0'
            cy='0'
            r='1'
            gradientTransform='matrix(-14.99988 20.99262 -20.99506 -15.00163 20.5 8.498)'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.213' stopColor='#F2F0F4' />
            <stop offset='.743' stopColor='#D1BBE0' />
          </radialGradient>
          <radialGradient
            id='d'
            cx='0'
            cy='0'
            r='1'
            gradientTransform='rotate(-49.968 22.303 -.227) scale(6.26052 7.3918)'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.445' stopColor='#3D2C36' />
            <stop offset='1' stopColor='#1A1016' />
          </radialGradient>
          <radialGradient
            id='e'
            cx='0'
            cy='0'
            r='1'
            gradientTransform='matrix(4.02685 -4.7936 5.6598 4.7545 21.13 16.996)'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.445' stopColor='#3D2C36' />
            <stop offset='1' stopColor='#1A1016' />
          </radialGradient>
          <radialGradient
            id='f'
            cx='0'
            cy='0'
            r='1'
            gradientTransform='matrix(1.53137 -1.77962 2.10935 1.8151 15.472 20.855)'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='.445' stopColor='#3D2C36' />
            <stop offset='1' stopColor='#1A1016' />
          </radialGradient>
          <radialGradient
            id='j'
            cx='0'
            cy='0'
            r='1'
            gradientTransform='matrix(0 2.5 -1.12061 0 13.5 26.5)'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7A6E85' />
            <stop offset='1' stopColor='#B29EC2' stopOpacity='0' />
          </radialGradient>
          <radialGradient
            id='k'
            cx='0'
            cy='0'
            r='1'
            gradientTransform='matrix(0 2.5 -1.12061 0 18.5 26.5)'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#7A6E85' />
            <stop offset='1' stopColor='#B29EC2' stopOpacity='0' />
          </radialGradient>
          <filter
            id='a'
            width='29'
            height='29'
            x='2'
            y='1'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feColorMatrix
              in='SourceAlpha'
              result='hardAlpha'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            />
            <feOffset dx='1' dy='-1' />
            <feGaussianBlur stdDeviation='1.5' />
            <feComposite in2='hardAlpha' k2='-1' k3='1' operator='arithmetic' />
            <feColorMatrix values='0 0 0 0 0.801456 0 0 0 0 0.658291 0 0 0 0 0.911898 0 0 0 1 0' />
            <feBlend in2='shape' result='effect1_innerShadow_31_1452' />
          </filter>
          <filter
            id='g'
            width='3.5'
            height='6'
            x='10'
            y='24'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              result='effect1_foregroundBlur_31_1452'
              stdDeviation='.5'
            />
          </filter>
          <filter
            id='h'
            width='3.5'
            height='7'
            x='15'
            y='23'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              result='effect1_foregroundBlur_31_1452'
              stdDeviation='.5'
            />
          </filter>
          <filter
            id='i'
            width='6.5'
            height='10'
            x='17.75'
            y='21'
            colorInterpolationFilters='sRGB'
            filterUnits='userSpaceOnUse'
          >
            <feFlood floodOpacity='0' result='BackgroundImageFix' />
            <feBlend
              in='SourceGraphic'
              in2='BackgroundImageFix'
              result='shape'
            />
            <feGaussianBlur
              result='effect1_foregroundBlur_31_1452'
              stdDeviation='1'
            />
          </filter>
          <linearGradient
            id='c'
            x1='8.5'
            x2='-1'
            y1='15'
            y2='10'
            gradientUnits='userSpaceOnUse'
          >
            <stop stopColor='#E5C9C5' stopOpacity='0' />
            <stop offset='1' stopColor='#FFD099' />
          </linearGradient>
        </defs>
      </g>
    </svg>
  )
}
