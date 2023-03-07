import React from 'react';
import { BASE_CAST_URL } from '../../utils/Constans';

const CastCard = ({ cast }) => {
  console.log(cast);
  return (
    <div className='flex flex-col items-center'>
      <img
        src={BASE_CAST_URL + cast?.profile_path}
        alt={cast?.name}
        className='w-[100px] h-[100px] object-cover rounded-full'
      />
      <div className='text-center w-[100px] md:w-full'>
        <h3 className='mt-1 text-base font-bold text-gray-700'>{cast?.name}</h3>
        <h4 className='text-gray-500 text-base'>{cast?.character}</h4>
      </div>
    </div>
  );
};

export default CastCard;
