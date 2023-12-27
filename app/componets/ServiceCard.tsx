import React from 'react'
import { Service } from '@/type'
interface ServiceProps {
    serviceList : Service[]
}

const ServiceCard = ( {serviceList} : ServiceProps ) => {
  return (
    <ul className=' text-lg sm:text-lg md:text-xl lg;text-2xl '>
    {
      serviceList.map((manicure, index) => (
        <li className='py-2 md:py-3 lg:py-4' key={index}>
          {manicure.service} | {manicure.price}
        </li>
      ))
    }
  </ul>
  )
}

export default ServiceCard