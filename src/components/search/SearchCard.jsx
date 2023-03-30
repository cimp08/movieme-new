import React from 'react';
import { Link } from 'react-router-dom';
import { BASE_POSTER_URL, DEFAULT_POSTER, DEFAULT_PROFILE, getGender, getKnownFor } from '../../utils/Constans';

const SearchCard = ({ item }) => {
  const MediaType = (media) => {
    let retVal = '';

    // eslint-disable-next-line default-case
    switch (media) {
      case 'movie':
        retVal = 'movies';
        break;
      case 'tv':
        retVal = 'tv';
        break;
      case 'person':
        retVal = 'people';
        break;
    }
    return retVal;
  };

  console.log(item)
  return (
    <>
      <div className='relative w-[330px] h-[500px] md:h-auto md:w-[500px] flex flex-col md:flex-row rounded-md bg-gray-200 dark:bg-gray-800 shadow-lg'>
        <div className='flex-none flex justify-center md:block mt-5 md:mt-0'>
          {item?.media_type === 'movie' || item?.media_type === 'tv' ? (
            <img
              src={
                item?.poster_path
                  ? BASE_POSTER_URL + item?.poster_path
                  : DEFAULT_POSTER
              }
              alt='pic'
              className='w-[140px] h-[200px] md:w-[160px] md:h-[240px] md:rounded-tl-md md:rounded-bl-md'
            />
          ) : (
            <img
              src={
                item?.profile_path
                  ? BASE_POSTER_URL + item?.profile_path
                  : DEFAULT_PROFILE
              }
              alt='pic'
              className='w-[140px] h-[200px] md:w-[160px] md:h-[240px] md:rounded-tl-md md:rounded-bl-md'
            />
          )}
        </div>
        <div className='flex-1'>
          <div className='text-gray-600 dark:text-white'>
            <p className='pt-4 px-2 text-sm md:text-base font-bold text-center'>
              {item?.title
                ? item?.title?.slice(0, 44)
                : item?.name?.slice(0, 60)}
            </p>
            <hr className='hr-text' />
            {item?.media_type === 'movie' && (
              <div className='text-md px-4 md:my-2'>
                <p className='text-[12.8px] text-gray-500 mb-3'>
                  {item?.release_date && ` Release date: ${item?.release_date}`}
                  {item?.first_air_date &&
                    ` (${item?.first_air_date.slice(0, 4)})`}
                </p>

                <h5 className='text-sm font-bold mb-1'>Overview</h5>
                <p className='text-sm'>
                  {item?.overview
                    ? `${item?.overview.slice(0, 150)}...`
                    : 'No overview for this movie'}
                </p>
                <div>
                  <Link
                    to={`/movies/details/${item?.id}`}
                    className='absolute right-0 bottom-0'
                  >
                    <button className='bg-purple-500 hover:bg-purple-800 text-white font-medium rounded-br-lg rounded-tl-lg text-sm px-2 py-1 md:px-4 md:py-2'>
                      More info
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {item?.media_type === 'tv' && (
              <div className='text-md px-4 my-2'>
                <p className='text-[12.8px] text-gray-500 mb-3'>
                  {item?.release_date && `Release date: ${item?.release_date}`}
                  {item?.first_air_date &&
                    `First air date: ${item?.first_air_date}`}
                </p>
                <h5 className='text-sm font-bold mb-1'>Overview</h5>
                <p className='text-sm'>
                  {item?.overview
                    ? `${item?.overview.slice(0, 160)}...`
                    : 'No overview for this tv show'}
                </p>
                <div>
                  <Link
                    to={`/tv/details/${item?.id}`}
                    className='absolute right-0 bottom-0'
                  >
                    <button className='bg-purple-500 hover:bg-purple-800 text-white font-medium rounded-br-lg rounded-tl-lg text-sm px-4 py-2'>
                      More info
                    </button>
                  </Link>
                </div>
              </div>
            )}
            {item?.media_type === 'person' && (
              <div className='text-sm md:text-md px-4 my-2'>
                <div className='flex justify-between'>
                  <h4 className='font-bold'>{getGender(item?.gender)}</h4>
                  <h4 className='font-bold'>
                    {getKnownFor(item?.known_for_department)}
                  </h4>
                </div>
                {item?.known_for?.length > 0 ? (
                  <>
                    <h5 className='text-sm font-bold mt-4 mb-1'>Known for:</h5>
                    <ul>
                      {item?.known_for.map((media, index) => (
                        <li key={media.id} className='text-sm'>
                          <Link
                            to={`/${MediaType(media?.media_type)}/details/${
                              media?.id
                            }`}
                            className='text-purple-900 dark:text-purple-400'
                          >
                            {media?.title ? media?.title : media?.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <h5 className='text-sm text-gray-500 mt-4 mb-1'>
                    No information
                  </h5>
                )}

                <div>
                  <Link
                    to={`/people/${item?.id}`}
                    className='absolute right-0 bottom-0'
                  >
                    <button className='bg-purple-500 hover:bg-purple-800 text-white font-medium rounded-br-lg rounded-tl-lg text-sm px-4 py-2'>
                      More info
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
