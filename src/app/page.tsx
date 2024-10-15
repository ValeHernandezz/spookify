import FormImage from '@/components/dropzone/FormImage'

export default function Home() {
  return (
    <main>
      <section className='h-[90vh]'>
        <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-x-16 h-[50vh]'>
          <div className='pb-5 lg:p-0'>
            <h1 className='md:max-w-[400px] text-center lg:text-left text-white'>
              Dale un toque <span className='text-gradient'>sobrenatural</span>{' '}
              a tus recuerdos
            </h1>
          </div>
          <FormImage />
        </div>
      </section>
      <section className='h-[800px] pt-10'>
        <h2 className='text-3xl font-bold text-center text-white'>
          Titulo de otra seccion
        </h2>
      </section>
    </main>
  )
}
