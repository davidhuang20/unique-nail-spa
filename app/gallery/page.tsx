import { journyPic } from '@/constant/constant'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PhotoList } from '../componets'
import {galleryPic} from"@/constant/constant"
const gallery = () => {
  return (
    <main>
      <section className='header text-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-12'>
          Welcome to Unique Nail Spa
        </h1>
        <h3 className='text-3xl'>
          SEE ALL WE HAVE TO OFFER
        </h3>
      </section>
      <section className='py-24 px-3 sm:px-24'>
        <div className='flex flex-wrap items-center justify-center'>
          <PhotoList pictures={galleryPic}/>
        </div>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center pt-12'>
          Join this journey with us on Instagram <Link href="https://www.instagram.com/uniquenail_brightwater/" target='_blank'> <a className='underline'>@uniquenail_brightwater</a></Link>
        </div>
      </section>
    </main>
  )
}

export default gallery