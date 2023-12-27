import React, { useState } from 'react'
import Image from 'next/image'
import { clientReviews, journyPic } from '../constant/constant'
import ReviewList from './componets/Review'
import { Review } from '@/type'
import { PhotoList } from './componets'

const Page = () => {
  return (
    <main className='flex flex-col'>
      <section className='pt-12 pb-24 px-6 sm:px-24 flex-grow'>
        <div className="relative">
          <Image
            width={2500}
            height={1000} // Adjust this value as needed
            src="/main-section-img.jpeg"
            alt="main section pic"
            className='object-cover object-center h-128'

          />
          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <div className=' text-center text-black text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl break-words p-6 sm:p-60'>
              Not Your Average Nail Salon.
            </div>
            <button className="mt-8 hover:text-white hover:bg-black border-black border-2 px-4 sm:px-12 py-6">
              <a className="text-base md:text-2xl lg:text-3xl" target="_blank" href="https://booking.setmore.com/scheduleappointment/b3d6e120-dcfe-4a09-b20e-21dbcdf88d22">
                BOOK AN APPOINTMENT
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className='flex flex-col md:flex-row justify-between pb-24 px-6 sm:px-24'>
        <div className='md:w-1/2'>
          <Image
            width={800}
            height={500} // Adjust this value as needed
            src="/manicure2.png"
            alt="manicure"
          />
        </div>
        <div className='flex flex-col justify-center items-center text-center md:w-1/2 py-8 pt-24 md:px-4'>
          <h3 className='text-xl md:text-xl lg:text-lg xl:text-2xl'>
            ULTIMATE RELAXATION
          </h3>
          <h1 className='text-4xl md:text-4xl lg:text-4xl xl:text-6xl py-4 '>
            Manicure Treatment
          </h1>
          <div className='text-xl lg:text-xl xl:text-2xl w-full lg:w-1/2 text-center'>
            Classic Manicure | Gel Manicure | Nourishing Treatments | French Manicure | Nail Art & More!
          </div>
        </div>
      </section>

      <section className='flex flex-col md:flex-row  justify-between pb-24 px-6 sm:px-24'>
        <div className='md:hidden md:w-1/2'>
          <Image
            width={800}
            height={500} // Adjust this value as needed
            src="/pedicure.jpeg"
            alt="pedicure"
          />
        </div>
        <div className='flex flex-col justify-center items-center text-center md:w-1/2 py-8 pt-24 md:px-4'>
          <h3 className='text-xl md:text-xl lg:text-lg xl:text-2xl'>
            Explore the Possibility
          </h3>
          <h1 className='text-3xl lg:text-4xl xl:text-6xl py-4 '>
            Pedicure Treatment
          </h1>
          <div className='text-lg lg:text-lg xl:text-2xl w-full lg:w-1/2 text-center'>
            Classic Pedicure | Gel Manicure | French Manicure | Nail Art & More!
          </div>
        </div>
        <div className='hidden md:block md:w-1/2'>
          <Image
            width={800}
            height={500} // Adjust this value as needed
            src="/pedicure.jpeg"
            alt="pedicure"
          />
        </div>
      </section>
      <section className='flex flex-col items-center justify-center bg-zinc-800 text-white h-96'>
        <h1 className='text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-7xl'>
          Treat yourself, today. <br />
          Call us for your next appointment
        </h1>
        <button className="mt-8 hover:text-black hover:bg-white border-white border-2 px-12 py-6">
          <a className="text-xl md:text-3xl lg:text-4xl" target="_blank" href="https://booking.setmore.com/scheduleappointment/b3d6e120-dcfe-4a09-b20e-21dbcdf88d22">
            BOOK NOW
          </a>
        </button>
      </section>
      <section className='py-24 px-3 sm:px-24'>
        <div className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center pb-12'>
          Join this journey with us
        </div>
        <PhotoList pictures={journyPic} />
      </section>
      <section className='clinet-review bg-gray-400 pb-16'>
        <h1 className="text-4xl text-center pt-12">Our Testimony</h1>
        <div className='px-12'>
          <ul className='flex flex-wrap -mx-4'>
            {clientReviews.map((review: Review, index: number) => (
              <li key={index} className='w-full md:w-1/2 px-4'>
                <ReviewList review={review} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}

export default Page