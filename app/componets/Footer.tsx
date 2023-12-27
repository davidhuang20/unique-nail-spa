import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100 px-4 sm:px-24'>
    <div className='flex max-md:flex-col px-6 py-10 justify-between gap-5 sm:pe-16'>
        <div className='flex flex-col justify-start items-start gap-6 py-4'>
          <h1 className=' text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
            STAY IN TOUCH
          </h1>
          <p className='text-base text-gray-700'>
            Unique Nail Spa<br />
            All righr reserved &copy;
          </p>
        </div>
        <div className='flex flex-col justify-between py-4'>
          <div className='text-l sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            QUESTIONS?
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl underline text-gray-400">
            <Link href="/contact">
              Contact Us
            </Link>
          </div>
          <div className='flex flex-row py-4'>
            <Link className='pe-3' href="https://www.instagram.com/uniquenail_brightwater/"  target='_blank'>
              <Image
                src="/instagram.png"
                width={40}
                height={40}
                alt="instagram logo"
              />
            </Link>

            <Link href="https://www.facebook.com/unique.nail.spa.7n/"  target='_blank'>
              <Image
                src="/facebook.png"
                width={40}
                height={40}
                alt="facebook logo"
              />
            </Link>
          </div>

        </div>

        <div className='flex flex-col justify-between py-4'>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            <Link href="/about">
              ABOUT
            </Link>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl underline text-gray-400">
            <Link href="/about">
              SERVICES
            </Link>
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl ">
            TEAM
          </div>
        </div>

        <div className='flex flex-col justify-between py-4'>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            OUR APPROACH
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl underline text-gray-400">
            BOOK NOW
          </div>
          <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            GET STARTED
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer