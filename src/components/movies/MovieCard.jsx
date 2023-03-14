import { useState, useEffect } from 'react';
import {
  BASE_POSTER_URL,
  DEFAULT_POSTER,
  MovieGenres,
} from '../../utils/Constans';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie, className}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [genreNames, setGenreNames] = useState([]);

  // Will run whenever the component renders, or whenever
  // the genreIds and media array changes.
  useEffect(() => {
    const names = movie?.genre_ids.map((id) => {
      const genre = MovieGenres.find((genre) => genre.id === id);
      return genre ? genre.name : '';
    });
    setGenreNames(names);
  }, [movie]);

  return (
    <Link
      to={`/movies/details/${movie?.id}`}
    >
      <div
        className={`relative z-[1] ${className} cursor-pointer rounded-lg overflow-hidden before:content-none before:absolute before:z-[-1] before:top-0 before:bottom-0 before:left-0 before:right-0 bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(${
            movie?.poster_path
              ? BASE_POSTER_URL + movie?.poster_path
              : DEFAULT_POSTER
          })`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`transition-all ${
            isHovered ? 'pt-[100px] md:pt-[20px]' : 'pt-[100px] md:pt-[140px]'
          }`}
        />
        <div
          className='card-content pt-[85px] md:pt-[105px] px-[4px] md:px-[12px] text-white text-center'
        >
          <h2 className={`text-sm truncate font-medium`}>
            {movie?.title.slice(0, 51)}
          </h2>
          <p className='text-gray-300 text-sm'>
            {movie?.release_date.slice(0, 4)}
          </p>
          {movie?.vote_average > 0 ? (
            <div className='flex justify-center items-center gap-1 mt-1'>
              <AiFillStar className='text-yellow-300 text-lg' />
              <p className=''>
                {movie?.vote_average}
                <span className='text-sm text-gray-300'> /10</span>
              </p>
              <span className='bg-yellow-400 text-black text-xs rounded py-[2px] px-1 font-bold '>
                IMDb
              </span>
            </div>
          ) : (
            <div className='flex justify-center items-center gap-1 mt-1'>
              <AiFillStar className='text-yellow-300 text-lg' />
              <p className='text-sm'>No Rating</p>
            </div>
          )}

          <ul className='hidden md:flex text-gray-300 flex-wrap justify-center gap-2 mt-3'>
            {genreNames?.map((name, key) => (
              <li
                key={key}
                className='text-xs border border-gray-300 rounded-full px-2'
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
