import React from 'react';
import { BASE_POSTER_URL, DEFAULT_POSTER } from '../../utils/Constans';
import TitleBorder from '../shared/TitleBorder';

const SeasonDetails = ({ item }) => {

  return (
    <div>
      <TitleBorder title='Season Overview' />
      <div className='flex gap-6 items-center'>
        <img
          src={
            item?.seasons[item?.seasons.length - 1]?.poster_path
              ? BASE_POSTER_URL +
                item?.seasons[item?.seasons.length - 1]?.poster_path
              : DEFAULT_POSTER
          }
          alt={item?.name}
          className='w-[200px]'
        />
        <div>
          <h3 className='text-xl mb-1'>Current Season</h3>
          <h4>{item?.seasons[item?.seasons.length - 1]?.name}</h4>
          <span className='text-sm text-gray-400'>
            {item?.seasons[item?.seasons.length - 1]?.air_date.slice(0, 4)} |{' '}
            {item?.seasons[item?.seasons.length - 1]?.episode_count} Episodes
          </span>
          <p className='mt-5'>
            {item?.seasons[item?.seasons.length - 1]?.overview
              ? item?.seasons[item?.seasons.length - 1]?.overview
              : `${item?.seasons[item?.seasons.length - 1]?.name} of the ${
                  item?.name
                } premired on ${item?.seasons[item?.seasons.length - 1]?.air_date}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeasonDetails;
