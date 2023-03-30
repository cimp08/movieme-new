import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_BACKDROP_URL } from '../../utils/Constans';
import TitleBorder from '../shared/TitleBorder';

const TvFacts = ({ tvShow, keywords }) => {

  return (
    <div>
      <TitleBorder title='Facts' />
      <div className='flex flex-col gap-5'>
        <div className='flex flex-grow lg:hidden'>
          <img
            src={BASE_BACKDROP_URL + tvShow.backdrop_path}
            alt={tvShow.name}
            className='w-full rounded'
          />
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-1 gap-y-4 gap-x-5 w-full flex-none lg:mx-0'>
          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Status
            </h4>
            <p className='text-sm mb-3'>{tvShow.status}</p>
          </div>
          {tvShow.next_episode_to_air && (
            <div>
              <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
                Next Episode Date
              </h4>
              <p className='text-sm mb-3'>
                {tvShow.next_episode_to_air.air_date}
              </p>
            </div>
          )}
          {tvShow.last_episode_to_air && (
            <div>
              <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
                Last Episode Date
              </h4>
              <p className='text-sm mb-3'>
                {tvShow.last_episode_to_air.air_date}
              </p>
            </div>
          )}
          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Type
            </h4>
            <p className='text-sm mb-3'>{tvShow.type}</p>
          </div>
          {tvShow.episode_run_time.length > 0 && (
            <div>
              <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
                Runtime
              </h4>
              <p className='text-sm mb-3'>{`${tvShow.episode_run_time[0]} min`}</p>
            </div>
          )}
          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Total Seasons
            </h4>
            <p className='text-sm mb-3'>{tvShow.number_of_seasons}</p>
          </div>
          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Total Episodes
            </h4>
            <p className='text-sm mb-3'>{tvShow.number_of_episodes}</p>
          </div>
          {tvShow.networks.length > 0 && (
            <div className=''>
              <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-2'>
                Network
              </h4>

              <img
                src={`https://image.tmdb.org/t/p/h60${tvShow.networks[0].logo_path}`}
                alt={tvShow.networks[0].name}
                width={60}
                className='mb-4 bg-white dark:py-2 dark:px-2'
              />
            </div>
          )}
          {keywords.length > 0 && (
            <div className='col-span-2 lg:col-span-1 flex flex-col'>
              <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-2'>
                Keywords
              </h4>
              <div className='flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 mr-4'>
                {keywords
                  .sort((a, b) => b.name.length - a.name.length)
                  .map((word) => (
                    <div key={word.id}>
                      <button className='bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs'>
                        {word.name}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TvFacts;
