import { useEffect } from 'react';
import Loader from './Loader';
import QuestionMark from './QuestionMark';
import MediaCardRating from './MediaCardRating';

const MediaCardList = ({
  items,
  type,
  addPage,
  moreAvailable,
  isDownloading,
  setIsDownloading,
  className,
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
        <div className={className}>
          {items.map((item, index) => (
            <MediaCardRating
              key={index}
              item={item}
              type={type}
              className={
                'w-[170px] h-[260px] md:w-[225px] md:h-[320px] fade-in'
              }
            />
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

export default MediaCardList;
