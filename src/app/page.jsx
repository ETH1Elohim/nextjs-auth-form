"use client"

import Image from 'next/image';
import CountrySelect from './components/country-dropdown/page';
import { useState } from 'react';
import formImage from '../../public/SimpFi-Splash-Page.png';
import { useFormik } from 'formik';

export default function Home() {
  
  const [country, setCountry] = useState("");

  const onCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: 'United States',
      terms: "",
    }
  })

  console.log(formik.values);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 m-auto">
      <form className='bg-white flex rounded-lg w-4/5 font-serif justify-center'>
        <div className='flex-1 text-gray-700 p-8 w-full'>
          <h1 className='flex items-center text-lg pb-2 font-semibold text-black'>Next.js <img src="/favicon.ico" className='w-4 h-4 mx-2' alt="Next.js" /> Auth Form</h1>
          <div className='mt-5'>

            {/* Name input field */}
            <div className='pb-4 flex flex-col'>
              <label htmlFor='name' className='px-1 font-semibold'>Name</label>
              <input 
              className='border-2 border-black rounded-md m-1 px-1 py-px w-1/2'
              type="text" 
              name='name' 
              value={formik.values.name}
              onChange={formik.handleChange}
              placeholder='Enter your name' 
               />
            </div>

            {/* Email input field */}
            <div className='pb-4 flex flex-col'>
              <label htmlFor='email' className='px-1 font-semibold'>Email</label>
              <input 
              type="email" 
              name='email' 
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email' className='border-2 border-black rounded-md m-1 px-1 py-px w-1/2' />
            </div>

            {/* Country input field */}
            <div className='pb-4 flex flex-col'>
              <label htmlFor='country' className='px-1 font-semibold'>Country</label>
              <CountrySelect onCountryChange={onCountryChange} />
            </div>

            {/* Terms of Service */}
            <div className='pb-4 flex flex-col'>
              <label htmlFor='terms' className='px-1 font-semibold'>Terms of service</label>
              <div className='flex items-center'>
                <input type="checkbox" name='terms' value='checked' className='h-5 w-5 rounded-md border-2 border-black m-1' /><p>I have read agree to the Terms of service.</p> 
              </div>
            </div>
            <button type='submit' className='bg-black text-white text-md py-3 mt-6 rounded-md w-full'>Get Early Access</button>
          </div>
        </div>

      </form>
    </main>
  )
}
