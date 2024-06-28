'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {galleryPic} from"@/constant/constant"
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
    <>
    <div className='w-full'>
      <div className='w-full text-center'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl py-12'>
            Welcome to Unique Nail Spa
          </h1>
          <h3 className='text-3xl'>
            SEE ALL WE HAVE TO OFFER
          </h3>
        </div>
      <section className='py-24 px-3 sm:px-24'>
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
    </>
  )
}

export default Page