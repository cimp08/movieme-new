import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL, DEFAULT_POSTER } from '../../utils/Constans';

const MediaCard = ({ media, className }) => {
  return (
    <Link to={`/movies/details/${media?.id}`} className='group'>
      <img
        src={
          media?.poster_path
            ? BASE_POSTER_URL + media?.poster_path
            : DEFAULT_POSTER
        }
        alt={media?.title}
        className={`${className} group-hover:brightness-200 duration-200 rounded-lg`}
      />
      <div className='h-[70px]'>
        <h4 className='text-sm mt-2'>{media?.title.slice(0, 30)}</h4>
        <p className='text-gray-400 text-sm'>
          {media?.release_date.slice(0, 4)}
        </p>
      </div>
    </Link>
  );
};

export default MediaCard;
