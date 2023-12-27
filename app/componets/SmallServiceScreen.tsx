import React from 'react'
import { manicureService, pedicureService, mostPopular, combination } from '../../constant/constant'
import Image from 'next/image'
import { Service } from "@/type"
import { ServiceCard } from '.'

const SmallServiceScreen = () => {
    return (
        <div>
          <section className='flex flex-col popular-option items-center w-full'>
            <div className='w-full text-center'>
              <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Popular Options</h1>
              <hr className="border-t border-black my-4 px-10" />
            </div>

            <div className='flex flex-col md:flex-row text-center pt-6 w-full'>
              <div className='w-full pb-6 md:p-0'>
                <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Most Requested</h1>
                <ServiceCard serviceList={mostPopular} />
              </div>
              <div className='w-full'>
                <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl' >Popular Combination</h1>
                <ServiceCard serviceList={combination} />
              </div>
            </div>

          </section>

          <section className='flex flex-col md:flex-row justify-center py-6'>
            <div className='md:w-1/2 px-8 flex flex-col justify-center  items-center'>
            <Image
              width={800}
              height={500} // Adjust this value as needed
              src="/pedicure.jpeg"
              alt="pedicure"
              className='py-8'
              />
              <div className='w-full text-center'>
                <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Manicure</h1>
                <hr className="border-t border-black my-4 px-10" />
              </div>
              <div className='flex flex-row justify-center'>
                <div className='flex justify-center'>
                  <ServiceCard serviceList={manicureService} />
                </div>
              </div>
            </div>
            <div className='md:w-1/2 px-8 flex flex-col justify-center  items-center'>
              <Image
                width={800}
                height={500} // Adjust this value as needed
                src="/pedicure.jpeg"
                alt="pedicure"
                className='py-8'
              />
              <div className='w-full text-center'>
                <h1 className='text-3xl md:text-3xl lg:text-4xl xl:text-5xl'>Pedicure</h1>
                <hr className="border-t border-black my-4 w-auto px-10" />
              </div>
              <div className='flex flex-row justify-center  items-center'>
                <div className='flex justify-center'>
                  <ServiceCard serviceList={pedicureService} />
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}

export default SmallServiceScreen;