import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/shared/Loader';
import MediaHero from '../components/shared/MediaHero';
import QuestionMark from '../components/shared/QuestionMark';
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
  }, []);

  console.log(item);
  return (
    <>
      {isLoading && (
        <div className='h-[60vh] flex justify-center items-center'>
          <Loader />{' '}
        </div>
      )}
      {error && <QuestionMark />}
      {!isLoading && item.id && (
        <div>
          <MediaHero
            backdrop={item.backdrop_path}
            poster={item.poster_path}
            title={item.title}
            year={item.release_date}
            genres={item.genres}
            overview={item.overview}
            rating={item.vote_average}
            votes={item.vote_count}
          />
        </div>
      )}
    </>
  );
};

export default MoviePage;