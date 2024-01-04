'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Form from '../componets/Form'

const contact = () => {
  return (

    <div className='flex flex-col w-auto sm:w-full md:flex-row h-full px-8 sm:px-24 py-0 sm:py-24'>
      <div className=' flex flex-col justify-start sm:justify-center description py-6 md:py-0'>
        <h1 className='text-5xl md:text-5xl lg:text-6xl xl:text-7xl md:pt-16 md:p-0'>Contact Us.</h1>
        <div className='text-lg md:text-lg lg:text-2xl xl:text-3xl py-2 md:py-4'>
          <h1 className='py-2'>uniquenailspabw@gmail.com</h1>
          <a className='underline text-blue-400' href="tel:+16319681888">(631) 968-1888</a>
        </div>
        <div className='py-2'>
          <h1 className='text-lg md:text-lg lg:text-2xl xl:text-3xl'>Hours</h1>
          <p className='text-lg md:text-lg lg:text-2xl xl:text-2xl'>Monday - Saturday 9:30 am - 7 pm</p>
          <p className='text-lg md:text-lg lg:text-2xl xl:text-2xl'> Sunday 9 am - 6 pm</p>
        </div>
        <div className='text-lg md:text-lg lg:text-2xl xl:text-3xl py-4 '>
          <a className='underline' href="https://www.google.com/maps?client=firefox-b-1-d&sca_esv=593352092&output=search&q=unique+nail+spa+brightwater&source=lnms&entry=mc" target="_blank">7 N Windsor Ave, Brightwaters, NY 11718</a>
          <h1 className='py-4 hidden sm:flex'>
            Please feel free to message us on social media for any questions about nail art or services.
          </h1>
          <h1 className='py-4 flex sm:hidden'>
            Please feel free to message us on social <br />
            media for any questions about nail art or services.
          </h1>
        </div>
        <div>
          <ul className='flex flex-wrap text-2xl'>

            <li className='flex justify-start md:justify-center md:w-24'>
              <Link href="https://www.instagram.com/uniquenail_brightwater/" target='_blank'>
                <Image
                  src="/instagram.png"
                  width={50}
                  height={50}
                  alt="instagram logo"
                />
              </Link>
            </li>
            <li className='flex justify-start md:justify-center md:w-24'>
              <Link href="https://www.facebook.com/UniqueNail7N/" target='_blank'>
                <Image
                  src="/facebook.png"
                  width={50}
                  height={50}
                  alt="facebook logo"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='h-80 md:h-auto w-1/2 md:w-1/2 flex'>
        <iframe className='h-auto' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.902026290301!2d-73.26948302334205!3d40.72017323711425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8329ad265ee79%3A0x1d6554c343da5c87!2sUnique%20Nail%20%26%20Spa!5e0!3m2!1sen!2sus!4v1703387944479!5m2!1sen!2sus" width="600" height="450"></iframe>
      </div>
    </div>
  )
}

export default contact