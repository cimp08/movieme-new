/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tvHelper } from '../../utils/Network';
import axios from 'axios';
import MediaCardList from '../shared/MediaCardList';

const TvShows = () => {
  // Using useState hook to store component state
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);
  const [moreAvailable, setMoreAvailable] = useState(false);

  // Using useParams hooks to access URL parameters
  const { section } = useParams();

  // Logic to determine if we should download new media and reset page or not
  // Checking for section changes and genre changes
  useEffect(() => {
    setIsDownloading(true);
    setPage(1);
    setItems([]);
    setMoreAvailable(false);
    getTvShows();
  }, [section]);



  // This function retrieves movies from the API using the URL returned by the getUrlToFetch function.
  const getTvShows = async () => {
    const response = await axios.get(tvHelper.sectionTvUrl(section, page));
    const responsePage = response.data.page;

    // If the response page is 1, replace the items state with the new results. Otherwise, add the new results to the existing items state.
    setItems((prevItems) =>
      responsePage === 1
        ? response.data.results
        : [...prevItems, ...response.data.results]
    );
    setMoreAvailable(responsePage < response.data.total_pages ? true : false);
    setIsDownloading(false);
  };

  // This function is called when the user reaches the end of the current list of movies and there are more available.
  // Increment the page state.
  // Call the getMovies function to retrieve the next page of movies from the API.
  const addPage = () => {
    setPage((prevPage) => prevPage + 1);
    getTvShows();
  };


  return (
    <div className='flex flex-col justify-center items-center'>
      <MediaCardList
        items={items}
        type='tv'
        addPage={addPage}
        moreAvailable={moreAvailable}
        isDownloading={isDownloading}
        setIsDownloading={setIsDownloading}
        className={
          'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 my-10'
        }
      />
    </div>
  );
};

export default TvShows;
