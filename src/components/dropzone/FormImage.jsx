'use client'
import useEditor from '@/store/Providers'
import { useDropzone } from 'react-dropzone'

export default function FormImage() {
  const { changeImage } = useEditor()
  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles)
    },
  })

  const handleDrop = async (acceptedFiles) => {
    const formData = new FormData()

    acceptedFiles.forEach((file) => {
      formData.append('file', file)
    })

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const {data} = await response.json()

    console.log(data)
    changeImage(data)
  }

  return (
    <section
      {...getRootProps({ className: 'dropzone' })}
      className='card flex flex-col p-10'
    >
      <div>
        <h2
          className='text-center px-2 text-xl lg:text-2xl font-black text-white uppercase pb-5 sombra'
          style={{ lineHeight: '1.2', wordWrap: 'break-word' }}
        >
{/*    <span className='block px-4'>
            <>
              <span className='block'>
                ¡Sube una
                <span className='bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text'>
                  imagen
                </span>
              </span>
              y comienza a
              <span className='bg-gradient-to-r text-transparent from-blue-500 to-violet-600 bg-clip-text'>
                personalizarla
              </span>
              !
            </>
          </span> */}
        </h2>
      </div>

      <div>
        <input {...getInputProps()} />
        <div className='flex flex-col gap-4'>
          <button
            type='button'
            onClick={open}
            className='hover:cursor-pointer hover:underline text-white rounded-full bg-gradient-to-r from-blue-500 to-violet-600 text-bold px-6 py-4'
          >
            Subir imagen
          </button>
          <strong> O arrastra una imagen.</strong>
        </div>
      </div>
    </section>
  )
}
