/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { movieHelper } from '../../utils/Network';
import axios from 'axios';
import queryString from 'query-string';
import MovieCardList from './MovieCardList';

const Movies = () => {
  // Using useState hook to store component state
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isDownloading, setIsDownloading] = useState(false);
  const [moreAvailable, setMoreAvailable] = useState(false);

  // Using useLocation and useParams hooks to access URL parameters
  const location = useLocation();
  const { section } = useParams();

  // Logic to determine if we should download new media and reset page or not
  // Checking for section changes and genre changes
  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    setIsDownloading(true);
    setPage(1);
    setItems([]);
    setMoreAvailable(false);
    getMovies(movieHelper.popularUrl(parsedQuery.genre));

  }, [location, section]);

  
  // Determine appropriate API URL to use based on current URL and page in state
  const getUrlToFetch = () => {
    const parsedQuery = queryString.parse(location.search);
    let url;
    switch (section) {
      case 'new-releases':
        url = movieHelper.newReleasesUrl(page, parsedQuery.genre);
        break;
      case 'swedish':
        url = movieHelper.swedishUrl(page, parsedQuery.genre);
        break;
      case 'coming-soon':
        url = movieHelper.comingSoonUrl(page, parsedQuery.genre);
        break;
      case 'popular':
        url = movieHelper.popularUrl(page, parsedQuery.genre);
        break;
      case 'top-rated':
        url = movieHelper.topRatedUrl(page, parsedQuery.genre);
        break;
      case 'old-movies':
        url = movieHelper.oldiesUrl(page, parsedQuery.genre);
        break;
      default:
        url = movieHelper.popularUrl(parsedQuery.genre);
    }
    return url;
  };
  
  // This function retrieves movies from the API using the URL returned by the getUrlToFetch function.
  const getMovies = async () => {
    const url = getUrlToFetch();
    const response = await axios.get(url);
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
    getMovies();
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <MovieCardList
        items={items}
        addPage={addPage}
        moreAvailable={moreAvailable}
        isDownloading={isDownloading}
        setIsDownloading={setIsDownloading}
      />
    </div>
  );
};

export default Movies;
