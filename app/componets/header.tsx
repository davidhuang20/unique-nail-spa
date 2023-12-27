"use client";
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Nav } from '.';


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen)
  };

  const link = [{ href: "/services", name: "SERVICE" }, { href: "/gallery", name: "GALLERY" }, { href: "/about", name: "ABOUT" }, { href: "/contact", name: "CONTACT" }]
  return (
    <header className="w-full border-b py-6 px-6 md:px-24 flex h-30">
      <div className='w-3/5 md:w-1/3 align-middle'>
        <Link href="/">
          <div className='flex flex-col'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl' >Unique Nail Spa</h1>
          </div>
        </Link>
      </div>
      <div className='flex flex-col lg:hidden w-2/5 md:w-2/3 items-end justify-center'>
        <Button isOpen={isOpen} handleClick={handleClick}/>
        <Nav isOpen={isOpen} handleClick={handleClick} />
      </div>
      <div className='hidden lg:flex justify-center items-center w-2/3'>
        <ul className='flex justify-center items-center text-2xl overflow-hidden'>
          {
            link.map((linkItem, index) => (
              <li key={index} className='w-full md:w-48 text-center mb-2 md:mb-0'>
                {/* Adjusted the width of list items */}
                <Link href={linkItem.href}>{linkItem.name}</Link>
              </li>
            ))
          }
          <li className='flex justify-center items-center w-full md:w-24'>
            <Link href="https://www.instagram.com/uniquenail_brightwater/" target='_blank'>
              <Image
                src="/instagram.png"
                width={50}
                height={50}
                alt="instagram logo"
              />
            </Link>
          </li>
          <li className='flex justify-center items-center w-full md:w-24'>
            <Link href="https://www.facebook.com/unique.nail.spa.7n/" target='_blank'>
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
    </header>
  )
}

export default Header