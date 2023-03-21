/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { peopleHelper } from '../../utils/Network';
import axios from 'axios';
import TvCard from './ActorCard';
import Loader from '../shared/Loader';
import QuestionMark from '../shared/QuestionMark';

const Actors = () => {
  // Using useState hook to store component state
  const [actors, setActors] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [moreAvailable, setMoreAvailable] = useState(false);

  // This function retrieves actors from the API
  const getActors = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(peopleHelper.trendingPeopleUrl(page));
      const responsePage = response.data.page;

      // If the response page is 1, replace the items state with the new results. Otherwise, add the new results to the existing items state.
      setActors((prevItems) =>
        responsePage === 1
          ? response.data.results
          : [...prevItems, ...response.data.results]
      );
      console.log(response.data.total_pages);
      console.log(responsePage);
      setMoreAvailable(responsePage < response.data.total_pages ? true : false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  // This function is called when the user click on the get more button and there are more available.
  // Increment the page state.
  const addPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  // Checking for page changes
  useEffect(() => {
    getActors();
  }, [page]);

  return (
    <>
      {actors.length > 0 && (
        <>
          <h1 className='mt-12 mb-8 text-2xl text-center md:text-start'>
            Popular People
          </h1>
          <div className='flex flex-wrap gap-4 justify-center md:justify-start md:gap-6'>
            {actors.map((actor) => (
              <TvCard key={actor.id} actor={actor} />
            ))}
          </div>
          <div className='text-center mt-10 mb-10'>
            <button
              className={`${
                !moreAvailable || isLoading && 'hidden'
              } border border-gray-400 hover:bg-gray-400 hover:text-white duration-300 px-4 p-2 rounded-lg`}
              onClick={addPage}
            >
              Get more
            </button>
          </div>
        </>
      )}

      {isLoading && (
        <div className='flex justify-center items-center my-12'>
          <Loader />
        </div>
      )}
      {isError && (
        <div className='flex justify-center h-[80vh] items-center'>
          <QuestionMark />
        </div>
      )}
    </>
  );
};

export default Actors;
