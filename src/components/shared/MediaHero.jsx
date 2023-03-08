import { AiFillStar } from 'react-icons/ai';
import { BASE_BACKDROP_URL, DEFAULT_POSTER } from '../../utils/Constans';

const MediaHero = ({
  backdrop,
  poster,
  title,
  year,
  genres,
  overview,
  rating,
  votes,
}) => {
  return (
    <div
      className='bg-cover bg-center fade-in flex'
      style={{
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${
          BASE_BACKDROP_URL + backdrop
        })`,
      }}
    >
      <div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 my-10'>
        <div className='mx-4'>
          <img
            src={poster ? BASE_BACKDROP_URL + poster : DEFAULT_POSTER }
            alt={title}
            className='w-full md:w-[370px]'
          />
        </div>

        <div className='text-white mx-4 md:mx-0 flex flex-col justify-center'>
          <h2 className='text-2xl md:text-4xl'>
            {title}{' '}
            <span className='text-base md:text-lg text-gray-400'>
              ({year.slice(0, 4)})
            </span>
          </h2>
          <div className='text-sm md:text-base flex gap-2 text-gray-400 mb-2'>
            {genres.map((genre) => (
              <span key={genre.id} className=''>
                {genre.name}
              </span>
            ))}
          </div>
          {rating > 0 ? (
            <div className='flex items-center gap-1 mb-6'>
              <AiFillStar className='text-yellow-300 text-lg' />
              <p className=''>
                {rating}
                <span className='text-sm text-gray-400'> /10 </span>
              </p>
              <span className='bg-yellow-400 text-black text-xs rounded py-[2px] px-1 font-bold '>
                IMDb
              </span>
              <p className='ml-1 text-base'>by {votes} voters</p>
            </div>
          ) : (
            <div className='flex items-center gap-1 mb-6'>
              <AiFillStar className='text-yellow-400 text-lg' />
              <p className='text-base'>No Rating</p>
            </div>
          )}

          <h3 className='text-lg md:text-xl mb-2'>Overview</h3>
          <p className='text-base md:text-lg'>{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MediaHero;
