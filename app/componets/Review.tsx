import React from 'react';
import { Review } from '@/type';

interface reviews {
  review: Review;
}

const ReviewList = ({ review }: reviews) => {
  return (
    <div className='flex flex-col items-center min-h-80 pt-4 md:pt-12'>
      <h4 className='text-base text-center mb-2 sm:text-xl md:text-2xl lg:text-3xl'>{review.review}</h4>
      <p className='text-base text-gray-700 sm:text-base md:text-lg lg:text-xl'>{`-${review.name}`}</p>
    </div>
  );
};

export default ReviewList;