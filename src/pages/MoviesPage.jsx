import Slider from '../components/shared/Slider';
import DiscoverListMovie from '../components/movies/DiscoverListMovie';
import GenresList from '../components/movies/GenresList';
import Movies from '../components/movies/Movies';


const MoviesPage = () => {
  return (
    <>
      <Slider type='movie' />
      <div className='flex flex-col md:flex-row gap-6 container mx-auto mt-10'>
        <div className='md:flex-initial md:w-[400px] mx-4'>
          <DiscoverListMovie />
        </div>
        <div className='flex-auto mx-4'>
          <GenresList />
          <Movies />
        </div>
      </div>
    </>
  );
};

export default MoviesPage;
