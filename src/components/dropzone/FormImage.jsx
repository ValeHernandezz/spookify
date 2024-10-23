'use client'
import useEditor from '@/store/Providers'
import { useDropzone } from 'react-dropzone'
import { useRouter } from 'next/navigation'

import Paperclip from '@/components/icons/PaperClip'
import { ViewImageStateEnum } from '@/lib/types'
import Swal from 'sweetalert2'

export default function FormImage() {
  const { changeImage, loading, changeLoading, changeViewImage } = useEditor()
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

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const { data } = await response.json()
      changeViewImage(ViewImageStateEnum.ORIGINAL)
      changeImage(data)
      router.push('/editar')
      changeLoading(false)
    } catch {
      changeLoading(false)
      Swal.fire({
        position: 'center',
        icon: 'error',
        titleText: 'Error!',
        text: 'No se pudo subir la imagen, vuelve a intentarlo',
        showConfirmButton: false,
        timer: 1500,
      })
    }
  }

  return (
    <section {...getRootProps({ className: 'dropzone' })} className='card'>
      <div className='text'>
        <span className='mb-5'>¡Sube una imagen!</span>
        <p className='subtitle'>O arrástrala aquí</p>
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
              <div className='loaderCircle mr-2'></div> Subiendo
            </>
          ) : (
            <>
              <Paperclip size='size-6 mr-2' /> Seleccionar imagen
            </>
          )}
        </button>
      </div>
    </section>
  )
}
