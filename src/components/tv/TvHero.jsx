import { AiFillStar } from 'react-icons/ai';
import { BASE_BACKDROP_URL, DEFAULT_POSTER } from '../../utils/Constans';

const TvHero = ({ item }) => {

  return (
    <div
      className='bg-cover bg-center flex'
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${
          BASE_BACKDROP_URL + item?.backdrop_path
        })`,
      }}
    >
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-2 my-10'>
        <div className='flex-none mx-4'>
          <img
            src={
              item?.poster_path
                ? BASE_BACKDROP_URL + item?.poster_path
                : DEFAULT_POSTER
            }
            alt={item?.name}
            className='w-full md:w-[360px] rounded'
          />
        </div>

        <div className='text-white flex flex-col justify-center grow mx-4'>
          <h2 className='text-2xl md:text-4xl'>
            {item?.name}{' '}
            <span className='text-base md:text-lg text-gray-400'>
              ({item?.first_air_date.slice(0, 4)})
            </span>
          </h2>
          <div className='text-sm md:text-base flex gap-2 text-gray-400 mb-2'>
            {item?.genres.map((genre) => (
              <span key={genre.id} className=''>
                {genre.name}
              </span>
            ))}
          </div>
          {item?.vote_average > 0 ? (
            <div className='flex items-center gap-1 mb-6'>
              <AiFillStar className='text-yellow-300 text-lg' />
              <p className=''>
                {item?.vote_average.toString().slice(0, 3)}
                <span className='text-sm text-gray-400'> /10 </span>
              </p>
              <span className='bg-yellow-400 text-black text-xs rounded py-[2px] px-1 font-bold '>
                IMDb
              </span>
              <p className='ml-1 text-base'>by {item?.vote_count} voters</p>
            </div>
          ) : (
            <div className='flex items-center gap-1 mb-6'>
              <AiFillStar className='text-yellow-400 text-lg' />
              <p className='text-base'>No Rating</p>
            </div>
          )}

          <h3 className='text-lg md:text-xl mb-2'>Overview</h3>
          <p className='text-base md:text-lg'>{item?.overview}</p>

          <div className='flex justify-around mt-12'>
            <div>
              <h4 className='text-xl mb-3'>Seasons</h4>
              <div className='w-[80px] h-[80px] border rounded-full flex justify-center items-center'>
                <span className='text-4xl'>{item?.number_of_seasons}</span>
              </div>
            </div>
            <div>
              <h4 className='text-xl mb-3'>Episodes</h4>
              <div className='w-[80px] h-[80px] border rounded-full flex justify-center items-center'>
                <span className='text-4xl'>{item?.number_of_episodes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TvHero;
