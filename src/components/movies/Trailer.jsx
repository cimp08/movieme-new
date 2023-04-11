import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { mediaHelper } from '../../utils/Network';
import TitleBorder from '../shared/TitleBorder';
import Loader from '../shared/Loader';
import QuestionMark from '../shared/QuestionMark';

const Trailer = () => {
  const [trailer, setTrailer] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const getTrailer = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(mediaHelper.trailerUrl(id))
        .then((res) => setTrailer(res.data.results[0]));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTrailer();
  }, []);


  return (
    <div>
      <TitleBorder title='Trailer' />
      {isLoading && !trailer && (
        <div className='flex flex-col items-center mt-20'>
          <Loader />
        </div>
      )}
      {!isLoading && error && (
        <div className='flex flex-col items-center mt-20'>
          <QuestionMark />
        </div>
      )}
      {trailer && !error && !isLoading ? (
        <div className='flex flex-col'>
          <div className='aspect-w-16 aspect-h-9 lg:mx-0'>
            <iframe
              title={trailer.key}
              className='embed-responsive-item rounded-lg'
              allowFullScreen='allowfullscreen'
              src={`https://www.youtube.com/embed/${trailer.key}`}
            />
          </div>
          <div className='flex justify-between mt-3 lg:mx-0'>
            <div className='flex gap-2'>
              <span className='bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs'>
                {trailer.size > 720 ? 'Full HD' : 'HD'}
              </span>
              <span className='bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-xs'>
                {trailer.iso_3166_1}
              </span>
            </div>
            <div>
              <span className='bg-red-600 text-white rounded-full px-2 py-1 text-xs'>
                {trailer.site}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col items-center my-20'>
          <h3 className='text-sm md:text-base'>No trailer available ...</h3>
        </div>
      )}
    </div>
  );
};

export default Trailer;
