import Slider from '../components/movie/Slider';
import DiscoverList from '../components/movie/DiscoverList';
import GenresList from '../components/movie/GenresList';
import Movies from '../components/movie/Movies';

const MoviesPage = () => {
  return (
    <>
      <Slider />
      <div className='flex flex-col md:flex-row gap-6 container mx-auto mt-10'>
        <div className='md:flex-initial md:w-[400px]'>
          <DiscoverList />
        </div>
        <div className='flex-auto'>
          <GenresList />
          <Movies  />
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
