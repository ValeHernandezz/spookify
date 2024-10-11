import Ghost from '@/components/icons/Ghost'
import FormImage from '@/components/dropzone/FormImage'
import ViewImage from '@/components/image/ViewImage'

export default function Home() {
  return (
    <>
      <header className='w-full p-10'>
        <h2 className='flex text-left items-center gap-x-2 text-2xl font-bold text-gradient'>
          <Ghost size='w-12' /> Spookify
        </h2>
      </header>
      <main className='flex flex-col lg:flex-row w-full items-center justify-center h-[40vh]'>
        <div className='pb-5 lg:p-0'>
          <h1 className='md:max-w-[400px] text-center lg:text-left text-white'>
            Un toque <span className='text-gradient'>sobrenatural</span> a tus
            recuerdos
          </h1>
        </div>
        <FormImage/>
      </main>
      <footer className='mx-auto w-[300px]'>
        <ViewImage/>
      </footer>
    </>
  )
}
