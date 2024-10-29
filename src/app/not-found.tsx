import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='h-[90vh]'>
      <div className='flex flex-col w-full items-center justify-center gap-x-16 h-[70vh]'>
        <div className='pb-5'>
          <h1 className='text-4xl sm:text-5xl xl:text-[3.2rem] xs:w-[15ch] text-center text-white'>
            Página no <span className='text-gradient'>encontrada</span>
          </h1>
        </div>
        <Link
          className='bg-primary text-slate-100 flex items-center gap-x-2 text-base py-2 px-4 font-bold rounded-lg hover:opacity-85 transition duration-300 '
          href='/'
        >
          {' '}
          Volver al inicio
        </Link>
      </div>
    </section>
  )
}
