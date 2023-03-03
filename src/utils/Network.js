import { TODAY, NEXTMONTH, PREVMONTH } from './Constans';
export const API = process.env.REACT_APP_TMDB_API_KEY;
export const baseUrl = 'https://api.themoviedb.org/3';
export const baseDiscoverMovieUrl = `${baseUrl}/discover/movie?api_key=${API}&language=en-US&region=US&sort_by=`;

export const sliderHelper = {
  sliderMovieUrl: `${baseUrl}/movie/popular?api_key=${API}&language=en-US`,
};

// fetching a list of movie genres.
export const mediaHelper = {
  genreUrl: `${baseUrl}/genre/movie/list?api_key=${API}&language=en-US`,
};

// The popularUrl function returns a URL string for popular movies.
// The swedishUrl function returns a URL string for Swedish movies released after January 1, 2000.
// The oldiesUrl function returns a URL string for movies released before 1950.
// The comingSoonUrl function returns a URL string for movies coming out within the next month.
// The newReleasesUrl function returns a URL string for movies released within the past month.
// The topRatedUrl function returns a URL string for highly rated movies with at least 5000 votes.

// All functions take two arguments, page and genres. The page argument specifies which page of results to return, while the genres argument is an optional comma-separated list of genre IDs to filter the results by

export const movieHelper = {
  popularUrl: (page, genres = '') => {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genres}`;
  },
  swedishUrl: function (page, genres = '') {
    return `${baseUrl}/discover/movie?api_key=${API}&language=sv-SE&region=US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=2000-01-01&with_original_language=sv&with_genres=${genres}`;
  },
  oldiesUrl: function (page, genres = '') {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.lte=1950&with_genres=${genres}`;
  },
  comingSoonUrl: function (page, genres = '') {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${TODAY}&primary_release_date.lte=${NEXTMONTH}&with_genres=${genres}`;
  },
  newReleasesUrl: function (page, genres = '') {
    return `${baseDiscoverMovieUrl}popularity.desc&include_adult=false&include_video=false&page=${page}&primary_release_date.gte=${PREVMONTH}&primary_release_date.lte=${TODAY}&with_genres=${genres}`;
  },
  topRatedUrl: function (page, genres = '') {
    return `${baseDiscoverMovieUrl}vote_average.desc&include_adult=false&include_video=false&page=${page}&vote_count.gte=5000&with_genres=${genres}`;
  },
};
