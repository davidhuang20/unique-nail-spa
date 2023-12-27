import React from 'react'
import Image from 'next/image'
interface photoprop {
    pictures: string[];
}
const PhotoList = ({pictures}:photoprop) => {
  return (
    <div className='flex flex-wrap items-center justify-center'>
    {pictures.map((pic: string, index: number) => (
      <Image
        key={index} // Adding a unique key for each image
        width={300}
        height={300} // Adjust this value as needed
        src={pic}
        alt={`pedicure-${index}`} // Using index for alt text to make it unique
        className='w-1/2 h-52 object-cover md:w-1/3 lg:w-1/4 sm:h-auto flex flex-row'
      />
    ))}
  </div>
  )
}

export default PhotoList