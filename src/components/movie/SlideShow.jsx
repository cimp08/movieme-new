/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BASE_BACKDROP_URL, MovieGenres } from '../../utils/Constans';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SlideShow = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [genreNames, setGenreNames] = useState([]);

  const handlePrevSlide = () => {
    const newIndex = currentIndex === 0 ? media?.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = currentIndex === media?.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Slide without user integration
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  // Will run whenever the component renders, or whenever
  // the genreIds and media array changes.
  useEffect(() => {
    const names = media[currentIndex]?.genre_ids.map((id) => {
      const genre = MovieGenres.find((genre) => genre.id === id);
      return genre ? genre.name : '';
    });
    setGenreNames(names);
  }, [currentIndex, media]);

  return (
    <div className='relative h-[40vh] md:h-[80vh] w-full overflow-hidden fade-in'>
      {media.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 ${
            index + 1 === currentIndex + 1
              ? 'opacity-100 transition-opacity duration-500'
              : 'opacity-0'
          }`}
        >
          <img
            src={BASE_BACKDROP_URL + slide?.backdrop_path}
            alt={slide?.title}
            className='absolute h-full w-full object-fill filter brightness-50'
          />
          <div className='absolute inset-0 z-0 bg-black opacity-30'></div>
        </div>
      ))}
      <Link
        to='/'
        className='absolute inset-0 z-10 text-white flex items-end justify-center mb-6 md:mb-12'
      >
        <div className='flex flex-col justify-center items-center text-center'>
          <h2 className='text-xl md:text-3xl font-normal mb-2 md:mb-4 cursor-pointer'>
            {media[currentIndex]?.title}
          </h2>

          <ul className='text-gray-300 flex flex-wrap gap-1 md:gap-2 mb-2'>
            {genreNames?.map((name, key) => (
              <li
                key={key}
                className='text-sm border border-gray-300 rounded-full px-2'
              >
                {name}
              </li>
            ))}
          </ul>
          <div className='flex justify-center items-center gap-2'>
            <AiFillStar className='text-yellow-300 text-xl' />
            <p className='text-sm md:text-lg text-center'>
              {media[currentIndex]?.vote_average}{' '}
              <span className='text-sm text-gray-300'> / 10</span>
            </p>
            <span className='bg-yellow-400 text-black text-xs rounded py-[2px] px-1 font-bold '>
              IMDb
            </span>
          </div>
        </div>
      </Link>
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

export default SlideShow;
