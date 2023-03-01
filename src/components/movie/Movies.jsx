import Slider from './Slider';
import DiscoverList from './DiscoverList';
import GenresList from './GenresList';

const Movies = () => {
  return (
    <>
      <Slider />
      <div className='flex flex-col md:flex-row gap-6 container mx-auto mt-10'>
        <div className='md:flex-initial md:w-[400px]'>
          <DiscoverList />
        </div>
        <div className='flex-auto'>
          <GenresList />
        </div>
      </div>
    </>
  );
};

export default Movies;
