import { useEffect } from 'react';
import Loader from '../shared/Loader';
import QuestionMark from '../shared/QuestionMark';
import MovieCard from './MovieCard';

const MovieCardList = ({
  items,
  addPage,
  moreAvailable,
  isDownloading,
  setIsDownloading,
}) => {
 

  useEffect(() => {
    // Add a scroll event listener to the window
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const buffer = 200;

      // Check if the user has scrolled to the bottom of the page
      if (
        scrollTop + windowHeight >= fullHeight - buffer &&
        !isDownloading && // Avoid multiple fetch calls
        moreAvailable // Check if more data is available to fetch
      ) {
        console.log('bottom of the page');
        setIsDownloading(true); // Set loading state to true
        addPage(); // Fetch new data
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [addPage, isDownloading, moreAvailable, setIsDownloading]);

  return (
    <>
      {items.length > 0 && (
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 my-10 fade-in'>
          {items?.map((item) => (
            <MovieCard key={item.id} movie={item} />
          ))}
        </div>
      )}

      {isDownloading && (
        <div className='flex justify-center items-center my-12'>
          <Loader />
        </div>
      )}

      {!isDownloading && items.length === 0 && (
        <div className='flex justify-center mt-20'>
          <QuestionMark />
        </div>
      )}
    </>
  );
};

export default MovieCardList;
