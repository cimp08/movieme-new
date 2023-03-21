import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL, DEFAULT_POSTER } from '../../utils/Constans';

const ActorCard = ({ actor}) => {
  return (
    <Link to={`/actor/${actor?.id}`} className='flex flex-col items-center group fade-in'>
      <img
        src={
          actor?.profile_path
            ? BASE_POSTER_URL + actor?.profile_path
            : DEFAULT_POSTER
        }
        alt={actor?.name}
        className={`w-[150px] h-[225px] group-hover:brightness-200 duration-200 rounded-lg`}
      />
        <h4 className='text-sm mt-2'>{actor?.name}</h4>
    </Link>
  );
};

export default ActorCard;
