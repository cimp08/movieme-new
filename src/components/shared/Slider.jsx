import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { sliderHelper } from '../../utils/Network';
import Loader from './Loader';
import QuestionMark from './QuestionMark';
import SlideShow from './SlideShow';

const Slider = ({ type }) => {
  const [media, setMedia] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  // Fetch data
  const getMedia = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(sliderHelper.sliderUrl(type))
        .then((res) => setMedia(res.data.results));
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setIsLoading(false);
  };

  // Runs getMedia function on mount
  useEffect(() => {
    getMedia();
  }, []);

  return (
    <>
      {isLoading && (
        <div className='flex justify-center items-center h-[35vh] md:h-[70vh] w-full'>
          <Loader />
        </div>
      )}
      {!isLoading && error && (
        <div className='flex flex-col items-center mt-20'>
          <QuestionMark />
        </div>
      )}
      {media?.length > 0 && !error && !isLoading && (
        <>
          <SlideShow media={media} type={type} />
        </>
      )}
    </>
  );
};

export default Slider;
