import React from 'react'
import { manicureService, pedicureService, mostPopular, combination } from '../../constant/constant'
import Image from 'next/image'
import { ServiceCard, SmallServiceScreen } from '../componets/index'

const service = () => {
  return (
    <div className='py-12'>
      <div className='block xl:hidden px-12'>
        <section className='header pb-8'>
          <div className="relative">
            <Image
              width={2500}
              height={1000} // Adjust this value as needed
              src="/servicePic.jpeg"
              alt="service section pic"
              className='object-cover object-center h-120'
            />
            <div className='absolute inset-0 flex items-center justify-center text-center outline-8 text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl break-words p-6 sm:p-60'>
             Bringing fashion to your fingertips.
            </div>
          </div>
        </section>
        <SmallServiceScreen />
      </div>

      <div className='hidden xl:flex flex-col justify-center px-60'>
        <section className='header pb-8'>
          <div className="relative">
          <Image
              width={2500}
              height={1000} // Adjust this value as needed
              src="/servicePic.jpeg"
              alt="service section pic"
              className='object-cover object-center h-120'

            />
            <div className='absolute inset-0 flex items-center justify-center text-center outline-4 text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl break-words p-6 sm:p-60'>
            Bringing fashion to your fingertips.
            </div>
          </div>
        </section>
        <section className='flex flex-col popular-option items-center w-full'>
          <div className='w-full text-center'>
            <h1 className='text-5xl'>Popular Option</h1>
            <hr className="border-t border-black my-4" />
          </div>

          <div className='flex flex-row text-center pt-6 w-full'>
            <div className='w-1/2'>
              <h1 className='text-3xl'>Most Requested</h1>
              <ServiceCard serviceList={mostPopular} />
            </div>
            <div className='w-1/2'>
              <h1 className='text-3xl' >Popular Combination</h1>
              <ServiceCard serviceList={combination} />
            </div>
          </div>

        </section>

        <section className='manicure py-6'>
          <div className='w-full text-center'>
            <h1 className='text-5xl'>Manicure</h1>
            <hr className="border-t border-black my-4" />
          </div>
          <div className='flex flex-row items-center'>
            <Image
              width={800}
              height={500} // Adjust this value as needed
              src="/pedicure.jpeg"
              alt="pedicure"
              className='w-1/2'
            />
            <div className='w-1/2 flex justify-center'>
              <ServiceCard serviceList={manicureService} />
            </div>
          </div>
        </section>
        <section className='pedicure py-6'>
          <div className='w-full text-center'>
            <h1 className='text-5xl'>Pedicure</h1>
            <hr className="border-t border-black my-4" />
          </div>
          <div className='flex flex-row items-center'>
            <div className='w-1/2 flex justify-center'>
              <ServiceCard serviceList={pedicureService} />
            </div>
            <Image
              width={800}
              height={500} // Adjust this value as needed
              src="/pedicure.jpeg"
              alt="pedicure"
              className='w-1/2'
            />
          </div>
        </section>
      </div>
    </div>
  )
}

export default service