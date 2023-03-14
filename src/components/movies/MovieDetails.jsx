import React from 'react';
import { BASE_BACKDROP_URL } from '../../utils/Constans';
import TitleBorder from '../shared/TitleBorder';

const MovieDetails = ({ item }) => {
  return (
    <div className='max-w-6xl mx-auto mb-6 fade-in'>
      <TitleBorder title='Movie Details' />
      <div className='flex flex-col lg:flex-row gap-5 mx-4'>
        <div className='flex-grow'>
          <img
            src={BASE_BACKDROP_URL + item.backdrop_path}
            alt={item.title}
            className='w-full rounded'
          />
        </div>
        <div className='flex-none lg:w-[450px]'>
          <h3 className='text-xl lg:text-2xl'>
            {item.title}{' '}
            <span className='text-base text-gray-500'>
              ({item.release_date.slice(0, 4)})
            </span>
          </h3>
          <div className='flex justify-between mt-4'>
            <div className='min-w-[100px]'>
              <button className='bg-yellow-600 rounded-full px-2 py-1 text-xs text-white'>
                Rating: {item.vote_average.toString().slice(0, 3)}
              </button>
            </div>
            <div className='flex flex-wrap gap-2 justify-center'>
              {item.genres.map((genre) => (
                <button
                  key={genre.id}
                  className='bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs'
                >
                  {genre.name}
                </button>
              ))}
            </div>
          </div>
          <h4 className='font-semibold mt-6 mb-4'>Overview</h4>
          <p className='text-sm lg:text-base leading-relaxed text-gray-500'>
            {item.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
