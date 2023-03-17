import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import MediaListSliderItem from './MediaListSliderItem';

const MediaSlider = ({ items }) => {
  const [startPosition, setStartPosition] = useState(0);
  const [endPosition, setEndPosition] = useState(3);

  return (
    <>
      <div className='flex text-center'>
        <MediaListSliderItem
          mediaArr={items}
          startPosition={startPosition}
          endPosition={endPosition}
        />
      </div>
      <div className='flex justify-end mt-2'>
        {startPosition >= 3 && (
          <button
            className=' bg-gray-300 dark:bg-gray-700 font-bold rounded mr-auto'
            onClick={() => {
              setStartPosition(startPosition - 4);
              setEndPosition(endPosition - 4);
            }}
          >
            <MdKeyboardArrowLeft className='text-2xl font-bold' />
          </button>
        )}
        {endPosition < items.length - 1 && (
          <button
            className='bg-gray-300 dark:bg-gray-700 font-bold rounded'
            onClick={() => {
              setEndPosition(endPosition + 4);
              setStartPosition(startPosition + 4);
            }}
          >
            <MdKeyboardArrowRight className='text-2xl font-bold' />
          </button>
        )}
      </div>
    </>
  );
};

export default MediaSlider;
