import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 m-auto">
      <form className='bg-white flex rounded-lg w-4/5 font-serif justify-center'>
        <div className='flex-1 text-gray-700 p-8 w-full'>
          <h1 className='flex items-center'>Next.js <img src="/favicon.ico" className='w-4 h-4 mx-2' alt="Next.js" /> Auth Form</h1>
        </div>
      </form>
    </main>
  )
}
