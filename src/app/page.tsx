import FormImage from '@/components/dropzone/FormImage'

export default function Home() {
  return (
    <>
      <main className='flex flex-col lg:flex-row w-full items-center justify-center gap-x-16 h-[40vh]'>
        <div className='pb-5 lg:p-0'>
          <h1 className='md:max-w-[400px] text-center lg:text-left text-white'>
            Dale un toque <span className='text-gradient'>sobrenatural</span> a tus
            recuerdos
          </h1>
        </div>
        <FormImage/>
      </main>
    </>
  )
}
