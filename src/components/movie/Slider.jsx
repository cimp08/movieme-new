import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://picsum.photos/id/237/600/400',
      title: 'First Slide',
      description: 'This is the first slide description.',
    },
    {
      id: 2,
      image: 'https://picsum.photos/id/238/600/400',
      title: 'Second Slide',
      description: 'This is the second slide description.',
    },
    {
      id: 3,
      image: 'https://picsum.photos/id/239/600/400',
      title: 'Third Slide',
      description: 'This is the third slide description.',
    },
  ];

  const handlePrevSlide = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Slide without user integration
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='relative h-[60vh] w-full overflow-hidden'>
      {slides.map((slide) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 ${
            slide.id === currentIndex + 1
              ? 'opacity-100 transition-opacity duration-1000'
              : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className='absolute h-full w-full object-cover filter brightness-50'
          />
          <div className='absolute inset-0 z-0 bg-black opacity-50'></div>
        </div>
      ))}
      <div className='absolute inset-0 z-10 text-white flex items-end justify-center'>
        <div className=''>
          <h2 className='text-3xl font-bold mb-4 text-center'>
            {slides[currentIndex].title}
          </h2>
          <p className='text-lg mb-8 text-center'>
            {slides[currentIndex].description}
          </p>
        </div>
      </div>
      <div className='absolute inset-0 z-10 text-white flex items-center justify-center'>
        <div className='absolute left-10'>
          <button className='inline-block' onClick={handlePrevSlide}>
            <IoIosArrowBack className='text-4xl' />
          </button>
        </div>
        <div className='absolute right-10'>
          <button className='inline-block' onClick={handleNextSlide}>
            <IoIosArrowForward className='text-4xl' />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
