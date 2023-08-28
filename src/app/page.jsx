import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 m-auto">
      <form className='bg-white flex rounded-lg w-4/5 font-serif justify-center'>
        <div className='flex-1 text-gray-700 p-8 w-full'>
          <h1 className='flex items-center text-lg pb-2 font-semibold text-black'>Next.js <img src="/favicon.ico" className='w-4 h-4 mx-2' alt="Next.js" /> Auth Form</h1>
          <div className='mt-5'>
            {/* Name input field */}
            <div className='pb-4 flex flex-col'>
              <label htmlFor='name' className='px-1'>Name</label>
              <input 
              type="text" 
              name='name' 
              placeholder='Enter your name' className='border-2 border-black rounded-md m-1 px-1 py-px w-1/2' />
            </div>
            {/* Email input field */}
            <div className='pb-4 flex flex-col'>
              <label htmlFor='email' className='px-1'>Email</label>
              <input 
              type="email" 
              name='email' 
              placeholder='Enter your email' className='border-2 border-black rounded-md m-1 px-1 py-px w-1/2' />
            </div>
          </div>


        </div>
      </form>
    </main>
  )
}
