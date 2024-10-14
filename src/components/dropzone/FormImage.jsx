'use client'
import useEditor from '@/store/Providers'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'

import Paperclip from '@/components/icons/PaperClip'

export default function FormImage() {
  const { changeImage } = useEditor()
  const router = useRouter()

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      handleDrop(acceptedFiles)
    }
  })

  const handleDrop = async (acceptedFiles) => {
    const formData = new FormData()

    acceptedFiles.forEach((file) => {
      formData.append('file', file)
    })

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    })

    const { data } = await response.json()

    changeImage(data)
    router.push('/editar')
  }

  return (
    <section {...getRootProps({ className: 'dropzone' })} className="card">
      <div className="text">
        <span className="mb-5">¡Sube una imagen!</span>
        <p className="subtitle">O arrástrala</p>
      </div>
      <div className="icons">
        <input {...getInputProps()} />
        <button
          className="btn stroke-primary hover:stroke-tertiary transition"
          onClick={open}
        >
          <Paperclip size="size-6" />
        </button>
      </div>
    </section>
  )
}
