/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mediaHelper } from '../../utils/Network';
import CastCard from './CastCard';
import TitleBorder from './TitleBorder';
import Loader from './Loader';
import QuestionMark from './QuestionMark';

const Cast = ({ type }) => {
  const [casts, setCasts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { id } = useParams();

  const getCasts = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(mediaHelper.mediaCastsUrl(type, id))
        .then((res) => setCasts(res.data.cast.splice(0, 6)));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCasts();
  }, []);

  return (
    <>
      {isLoading && (
        <div className='flex justify-center'>
          <Loader />
        </div>
      )}
      {error && <QuestionMark />}

      {!isLoading && casts.length > 0 && (
        <div className='fade-in'>
          <TitleBorder title='Top Cast' />
          <div className='grid grid-cols-3 md:grid-cols-6 lg:grid-cols-6 gap-y-3 justify-items-center'>
            {casts?.map((cast) => (
              <CastCard key={cast.id} cast={cast} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Cast;
