import React from 'react'
import Image from 'next/image'
import { interior, journyPic } from '../../constant/constant'
import { PhotoList } from '../componets'

const about = () => {
  return (
    <div className='px-4 sm:px-24'>
      <section className='md:h-1/8 py-6 md:py-16 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-12 flex items-center justify-center'>
        <h1 className='text-5xl'>About us </h1>
      </section>
      <section className=' flex flex-col md:flex-row items-center align-middle'>
        <div className='md:w-1/2'>
          <Image
            width={800}
            height={500} // Adjust this value as 
            src="/about1.jpeg"
            alt="manicure"
            className='object-cover object-center h-72 sm:h-96'
          />
        </div>
        <div className='md:w-1/2 '>
          <p className='py-6 px-6 md:px-24 text-lg text-center'>
            At Unique Nail Spa, we believe our dedication to craftsmanship, time, and the latest trends sets us apart. Our team of experienced nail technicians are true artists, meticulously shaping and embellishing nails to perfection. We don't rush through the process; instead, we savor every step, ensuring each nail receives the attention it deserves.
          </p>
        </div>
      </section>
      <section className='Interior'>
        <h1 className='text-center md:py-24 text-4xl py-6'>Step into Our Oasis</h1>
        <div className='flex flex-col md:flex-row justify-around'>
          {
            interior.map((pic, index: number) => (
              <Image
                key={index} // Adding a unique key for each image
                width={300}
                height={300} // Adjust this value as needed
                src={pic}
                alt={`pedicure-${index}`} // Using index for alt text to make it unique
                className='w-full md:w-1/3 py-2'
              />
            ))}
        </div>
      </section>
      <section className='nail-fashion'>
        <h1 className='text-center py-6 md:py-24 text-4xl'>Our Latest Work</h1>
        <PhotoList pictures={journyPic}/>
      </section>
    </div>
  )
}

export default about