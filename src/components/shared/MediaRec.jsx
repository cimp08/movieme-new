import MediaSlider from './MediaSlider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import TitleBorder from './TitleBorder';
import { mediaHelper } from '../../utils/Network';
import { useParams } from 'react-router-dom';
import QuestionMark from './QuestionMark';
import Loader from './Loader';

const MediaRec = ({ type }) => {
  // Using useState hook to store component state
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const params = useParams();

  useEffect(() => {
    getRecommendedMedia();
  }, []);

  const getRecommendedMedia = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(mediaHelper.mediaRecommendationsUrl(type, params.id))
        .then((res) => setItems([...res.data.results]));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setIsLoading(false);
    }
  };

  return (
    <div>
      <TitleBorder title='Recommended Movies' />
      {isLoading && !items && (
        <div className='flex flex-col items-center mt-20'>
          <Loader />
        </div>
      )}
      {!isLoading && error && (
        <div className='flex flex-col items-center mt-20'>
          <QuestionMark />
        </div>
      )}
      {items.length > 0 && !error && !isLoading ? (
        <>
          <MediaSlider
            items={items}
          />
        </>
      ) : (
        <div className='flex flex-col items-center my-20'>
          <h3 className='text-sm md:text-base'>
            No recommendations available ...
          </h3>
        </div>
      )}
    </div>
  );
};

export default MediaRec;
