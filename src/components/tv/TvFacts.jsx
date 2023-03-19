import React from 'react'
import { Link } from 'react-router-dom';
import TitleBorder from '../shared/TitleBorder'

const TvFacts = ({ tvShow, keywords }) => {
  console.log(tvShow);
  return (
    <div>
      <TitleBorder title='Facts' />
      <h4 className='text-black dark:text-white font-bold mb-1'>Status</h4>
      <p className='text-sm mb-3'>{tvShow.status}</p>
      {tvShow.next_episode_to_air && (
        <>
          <h4 className='text-black dark:text-white font-bold mb-1'>
            Next Episode Date
          </h4>
          <p className='text-sm mb-3'>{tvShow.next_episode_to_air.air_date}</p>
        </>
      )}
      {tvShow.last_episode_to_air && (
        <>
          <h4 className='text-black dark:text-white font-bold mb-1'>
            Last Episode Date
          </h4>
          <p className='text-sm mb-3'>{tvShow.last_episode_to_air.air_date}</p>
        </>
      )}
      <h4 className='text-black dark:text-white font-bold mb-1'>Type</h4>
      <p className='text-sm mb-3'>{tvShow.type}</p>
      {tvShow.episode_run_time.length > 0 && (
        <>
          <h4 className='text-black dark:text-white font-bold mb-1'>Runtime</h4>
          <p className='text-sm mb-3'>{`${tvShow.episode_run_time[0]} min`}</p>
        </>
      )}
      <h4 className='text-black dark:text-white font-bold mb-1'>
        Total Seasons
      </h4>
      <p className='text-sm mb-3'>{tvShow.number_of_seasons}</p>
      <h4 className='text-black dark:text-white font-bold mb-1'>
        Total Episodes
      </h4>
      <p className='text-sm mb-3'>{tvShow.number_of_episodes}</p>
      {tvShow.networks.length > 0 && (
        <div className=''>
          <h4 className='text-black dark:text-white font-bold mb-2'>Network</h4>
        
            <img
              src={`https://image.tmdb.org/t/p/h60${tvShow.networks[0].logo_path}`}
              alt={tvShow.networks[0].name}
              width={60}
              className='mb-4 bg-white dark:py-2 dark:px-2'
            />
         
        </div>
      )}
      {keywords.length > 0 && (
        <div style={{ width: '180px' }}>
          <h4 className='text-black dark:text-white font-bold mb-2'>
            Keywords
          </h4>
          {keywords.map((word) => (
            <Link
              to={{ pathname: `/keyword/${word.id}`, search: '?type=tv' }}
              key={word.id}
              className='flex flex-wrap'
            >
              <button className='bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs mb-2'>
                {word.name}
              </button>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TvFacts