import React from 'react'
import { manicureService, pedicureService1,pedicureService2, mostPopular, combination, nails, waxing1, waxing2 } from '../../constant/constant'
import Image from 'next/image'
import { ServiceCard, SmallServiceScreen } from '../componets/index'
import Link from 'next/link'

const Page = () => {
  return (
    <div className='py-12'>
      <div className='block md:hidden px-12'>
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

      <div className='hidden md:flex flex-col justify-center  md:px-20 lg:px-50'>
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
          <div  className='underline py-4 text-center text-xl sm:text-xl md:text-2xl lg;text-3xl '>
            <Link href={'/gallery'}>              
              Check out out latest work
            </Link>
            </div>
        </section>
        <section className='flex flex-col popular-option items-center w-full'>
          <div className='w-full text-center'>
            <h1 className='text-5xl'>Popular Options</h1>
            <hr className="border-t border-black my-4" />
          </div>

          <div className='flex flex-row text-center pt-6 w-full'>
            <div className='w-full'>
              <h1 className='text-3xl'>Most Requested</h1>
              <ServiceCard serviceList={mostPopular} />
            </div>
            {/* <div className='w-1/2'>
              <h1 className='text-3xl' >Popular Combination</h1>
              <ServiceCard serviceList={combination} />
            </div> */}
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
              src="/manicure.jpeg"
              alt="pedicure"
              className='w-1/2'
            />
            <div className='w-1/2 flex justify-center'>
              <div>
                <h1 className='text-3xl'>Service</h1>
                <ServiceCard serviceList={manicureService} />
              </div>
              <div>
                <h1 className='text-3xl' >Add On</h1>
                <ServiceCard serviceList={nails} />
              </div>
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
              <div className='px-2'>
                <ServiceCard serviceList={pedicureService1} />
              </div>
              <div className='px-2'>
                <ServiceCard serviceList={pedicureService2} />
              </div>
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
        <section className='manicure py-6'>
          <div className='w-full text-center'>
            <h1 className='text-5xl'>Waxing</h1>
            <hr className="border-t border-black my-4" />
          </div>
          <div className='flex flex-row items-center'>
            <Image
              width={800}
              height={500} // Adjust this value as needed
              src="/waxing.jpeg"
              alt="waxing"
              className='w-1/2'
            />
            <div className='w-1/2 flex justify-center'>
              <div className='px-6'>
                <ServiceCard serviceList={waxing1} />
              </div>
              <div className='px-6'>
                <ServiceCard serviceList={waxing2} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page