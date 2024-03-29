import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BASE_CAST_URL,
  DEFAULT_USER_FEMALE,
  DEFAULT_USER_MALE,
  DEFAULT_USER_NO_GENDER,
} from '../../utils/Constans';

const CastCard = ({ cast, type }) => {
  const [gender, setGender] = useState(null);

  useEffect(() => {
    switch (cast?.gender) {
      case 0:
        setGender(DEFAULT_USER_NO_GENDER);
        break;
      case 1:
        setGender(DEFAULT_USER_FEMALE);
        break;
      case 2:
        setGender(DEFAULT_USER_MALE);
        break;
      default:
        setGender(DEFAULT_USER_NO_GENDER);
        break;
    }
  }, [cast?.gender]);

  const getType = (type) => {
    switch (type) {
      case 'movie':
        return '?from=movie';
      case 'tv':
        return '?from=tv';

      default:
        return '';
    }
  };

  return (
    <Link
      to={`/people/${cast?.id}${getType(type)}`}
      className='group flex flex-col items-center cursor-pointer'
    >
      <img
        src={cast?.profile_path ? BASE_CAST_URL + cast?.profile_path : gender}
        alt={cast?.name}
        className='group-hover:brightness-200 duration-300 bg-gray-200 w-[100px] h-[100px] object-cover rounded-full'
      />
      <div className='text-center w-[100px] md:w-full'>
        <h3 className='mt-1 text-sm md:text-base font-bold text-gray-700 dark:text-white'>
          {cast?.name}
        </h3>
        <h4 className='text-gray-500 text-sm md:text-base'>
          {cast?.character.slice(0, 50)}
        </h4>
      </div>
    </Link>
  );
};

export default CastCard;
