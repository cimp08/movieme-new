/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../components/shared/Loader';
import TvHero from '../components/tv/TvHero';
import QuestionMark from '../components/shared/QuestionMark';
import { mediaHelper } from '../utils/Network';
import Cast from '../components/shared/Cast';
import SeasonDetails from '../components/tv/SeasonDetails';
import MediaRec from '../components/shared/MediaRec';
import TitleBorder from '../components/shared/TitleBorder';
import FetchMoreMedia from '../components/shared/FetchMoreMedia';
import TvFacts from '../components/tv/TvFacts';

const TvShowPage = ({ type }) => {
  const [item, setItem] = useState({});
  const [keywords, setKeywords] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams();

  const getTvShows = async () => {
    setIsLoading(true);
    try {
      await axios
        .get(mediaHelper.mediaUrl(type, id))
        .then((res) => setItem(res.data));
      
      await axios
      .get((mediaHelper.keywordsUrl(type, id)))
      .then((res) => setKeywords(res.data.results))

    } catch (error) {
      setError(true);
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getTvShows();
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
        <>
          <TvHero item={item} />
          <div className='max-w-6xl mx-auto flex flex-col lg:flex-row gap-10'>
            <div className='flex-grow'>
              <Cast type='tv' />
              <SeasonDetails item={item} />
              <MediaRec type='tv' />
              <TitleBorder title='Similiar TV-Shows' />
              <FetchMoreMedia
                type={type}
                fetchUrl={mediaHelper.mediaSimilarUrl(type, id)}
              />
            </div>
            <div className='w-full lg:w-[230px] order-first lg:order-last'>
              <TvFacts tvShow={item} keywords={keywords} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TvShowPage;
