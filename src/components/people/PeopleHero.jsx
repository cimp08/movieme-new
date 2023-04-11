import { BASE_BACKDROP_URL, DEFAULT_PROFILE } from '../../utils/Constans';
import ModalButton from './ModalButton';

const PeopleHero = ({ person }) => {
  return (
    <>
      <div
        className='bg-cover bg-center flex'
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9) ), url('/assets/images/people-hero-bg.webp')`,
        }}
      >
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-2 my-10'>
          <div className='flex-none mx-4'>
            <img
              src={
                person?.profile_path
                  ? BASE_BACKDROP_URL + person?.profile_path
                  : DEFAULT_PROFILE
              }
              alt={person?.name}
              className='w-full md:w-[360px] rounded'
            />
          </div>

          <div className='text-white flex flex-col justify-center grow mx-4'>
            <h2 className='text-xl md:text-4xl mb-6'>{person?.name}</h2>
            <h3 className='text-lg md:text-lg mb-2'>Biography</h3>
            <p className='text-base text-gray-300'>
              {person?.biography
                ? person?.biography.slice(0, 500)
                : `We don´t have a biography for ${person?.name} `}
              ...
            </p>
            <div className='mt-10 text-center'>
              {person?.biography && (
                <ModalButton
                  title='Biography'
                  name={person?.name}
                  biography={person?.biography}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleHero;
