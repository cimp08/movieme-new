/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/movies/MovieDetails';
import Cast from '../components/shared/Cast';
import FetchMoreMedia from '../components/shared/FetchMoreMedia';
import Loader from '../components/shared/Loader';
import MovieHero from '../components/movies/MovieHero';
import MediaRec from '../components/shared/MediaRec';
import QuestionMark from '../components/shared/QuestionMark';
import TitleBorder from '../components/shared/TitleBorder';
import Trailer from '../components/movies/Trailer';
import { mediaHelper } from '../utils/Network';

const MoviePage = ({ type }) => {
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const getItem = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(mediaHelper.mediaUrl(type, id))
        .then((res) => setItem(res.data));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getItem();
  }, [id]);

  return (
    <>
      {isLoading && (
        <div className='h-[60vh] flex justify-center items-center'>
          <Loader />{' '}
        </div>
      )}
      {error && (
        <div className='h-[60vh] flex justify-center items-center'>
          <QuestionMark />
        </div>
      )}
      {!isLoading && item.id && (
        <div className='fade-in'>
          <MovieHero
            backdrop={item.backdrop_path}
            poster={item.poster_path}
            title={item.title}
            year={item.release_date}
            genres={item.genres}
            overview={item.overview}
            rating={item.vote_average}
            votes={item.vote_count}
          />
          <div className='mx-4'>
            <div className='max-w-6xl mx-auto mb-6'>
              <Cast type={type} />
            </div>
            <MovieDetails item={item} />
            <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-2 md:gap-5 mb-6'>
              <div className='flex-1 lg:flex-grow'>
                <MediaRec type='movie' />
              </div>
              <div className='flex-1 lg:flex-none lg:w-[450px]'>
                <Trailer />
              </div>
            </div>
            <div className='max-w-6xl mx-auto'>
              <TitleBorder title='Similiar Movies' />

              <FetchMoreMedia
                type={type}
                fetchUrl={mediaHelper.mediaSimilarUrl(type, id)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MoviePage;
