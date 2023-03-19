/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCardList from './MediaCardList';

const FetchMoreMedia = ({ type, fetchUrl }) => {
  // Using useState hook to store component state
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);
  const [moreAvailable, setMoreAvailable] = useState(false);

  // Logic to determine if we should download new media and reset page or not
  // Checking for section changes and genre changes
  useEffect(() => {
    setIsDownloading(true);
    setPage(1);
    setItems([]);
    setMoreAvailable(false);
    getMedia(fetchUrl);
  }, []);

  // This function retrieves movies from the API using the URL returned by the getUrlToFetch function.
  const getMedia = async () => {
    const updatedFetchUrl = `${fetchUrl}&page=${page}`;
    const response = await axios.get(updatedFetchUrl);
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
    getMedia();
  };

  return (
    <div className=''>
      <MediaCardList
        items={items}
        type={type}
        addPage={addPage}
        moreAvailable={moreAvailable}
        isDownloading={isDownloading}
        setIsDownloading={setIsDownloading}
        className={`${
          type === 'movie'
            ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center w-full gap-8 my-10'
            : 'grid grid-cols-2 md:grid-cols-3 justify-items-center w-full gap-8 my-10'
        }`}
      />
    </div>
  );
};

export default FetchMoreMedia;
