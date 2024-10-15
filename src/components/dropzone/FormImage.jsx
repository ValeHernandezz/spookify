'use client'
import useEditor from '@/store/Providers'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'

import Paperclip from '@/components/icons/PaperClip'

export default function FormImage() {
  const { changeImage, loading, changeLoading } = useEditor()
  const router = useRouter()

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
    changeLoading(true)
    const formData = new FormData()

    acceptedFiles.forEach((file) => {
      formData.append('file', file)
    })

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    const { data } = await response.json()

    changeImage(data)
    changeLoading(false)
    router.push('/editar')
  }

  return (
    <section {...getRootProps({ className: 'dropzone' })} className='card'>
      <div className='text'>
        <span className='mb-5'>¡Sube una imagen!</span>
        <p className='subtitle'>O arrástrala</p>
      </div>
      <div className='icons'>
        <input {...getInputProps()} />
        <button
          className='btn stroke-primary hover:stroke-tertiary transition hover:text-white'
          onClick={open}
          disabled={loading}
        >
          {loading ? (
            <>
              <div class='loaderCircle mr-2'></div> Subiendo
            </>
          ) : (
            <>
              <Paperclip size='size-6 mr-2' /> Subir imagen
            </>
          )}
        </button>
      </div>
    </section>
  )
}
