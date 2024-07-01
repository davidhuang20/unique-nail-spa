'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { galleryPic, interior, journyPic } from '../../constant/constant'
import { PhotoList } from '../componets'
import Link from 'next/link'
import '../style/gallery.css';

const Page = () => {

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => { // Specify the type for the image parameter
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
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
                alt={`store-${index}`} // Using index for alt text to make it unique
                className='w-full md:w-1/3 py-2'
              />
            ))}
        </div>
      </section>
      <section className='py-24 px-3 sm:px-24'>
        <h1 className='text-center md:py-24 text-4xl py-6'>Our Latest Work</h1>

        <div className="main">
        {galleryPic.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image)}>
            <Image
              src={image}
              alt="Image"
              width={400}
              height={300}
              className="hover:scale-110 transition ease-in-out delay-150"
            />
          </div>
        ))}

        {selectedImage && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <Image
                src={selectedImage}
                alt="Selected Image"
                className="modal-image"
                width={400}
                height={300}
              />
              <div className="flex justify-end">
                <button
                  className="px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black hover:border hover:border-black md:text-sm text-base"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center pt-12'>
            Join this journey with us on Instagram <Link href="https://www.instagram.com/uniquenail_brightwater/" target='_blank'> <a className='underline'>@uniquenail_brightwater</a></Link>
        </div>
      </section>
    </div>
  )
}

export default Page