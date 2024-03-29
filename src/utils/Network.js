import { TODAY, NEXTMONTH, PREVMONTH } from './Constans';
export const API = process.env.REACT_APP_TMDB_API_KEY;
export const baseUrl = 'https://api.themoviedb.org/3';
export const baseDiscoverMovieUrl = `${baseUrl}/discover/movie?api_key=${API}&language=en-US&region=US&sort_by=`;

export const sliderHelper = {
  sliderUrl: (type) => {
    return `${baseUrl}/discover/${type}?api_key=${API}&language=en-US&sort_by=popularity.desc&include_video=false&&primary_release_date.gte=${PREVMONTH}&primary_release_date.lte=${TODAY}&with_original_language=en`;
  },
};

// fetching a list of movie genres.
// fetching a movie or tv based on type details
// fetching casts from movie or tv based on type and id
export const mediaHelper = {
  genreUrl: `${baseUrl}/genre/movie/list?api_key=${API}&language=en-US`,
  mediaUrl: (type, id) => {
    return `${baseUrl}/${type}/${id}?api_key=${API}&language=en-US`;
  },
  mediaCastsUrl: (type, id) => {
    return `${baseUrl}/${type}/${id}/credits?api_key=${API}`;
  },
  mediaRecommendationsUrl: function (type, id) {
    return `${baseUrl}/${type}/${id}/recommendations?api_key=${API}&language=en-US`;
  },
  trailerUrl: function (id) {
    return `${baseUrl}/movie/${id}/videos?api_key=${API}&language=en-US`;
  },
  mediaSimilarUrl: function (type, id, page) {
    return `${baseUrl}/${type}/${id}/similar?api_key=${API}&language=en-US&page=${page}`;
  },
  keywordsUrl: function (type, id) {
    return `${baseUrl}/${type}/${id}/keywords?api_key=${API}&language=en-US`;
  },
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

export const tvHelper = {
  sectionTvUrl: function (section, page ) {
    const updatedSection = section.replace(/-/g, '_');
    return `${baseUrl}/tv/${updatedSection}?api_key=${API}&language=en-US&page=${page}&with_original_language=en`;
  },
};

export const peopleHelper = {
  trendingPeopleUrl: function (page) {
    return `https://api.themoviedb.org/3/trending/person/week?api_key=${API}&language=en-US&page=${page}`;
  },
  peopleUrl: function (id) {
    return `https://api.themoviedb.org/3/person/${id}?api_key=${API}&language=en-US`;
  },
  personMovieCredits: function(id) {
    return `${baseUrl}/person/${id}/movie_credits?api_key=${API}&language=en-US`;
  },
  personTvCredits: function(id) {
    return `${baseUrl}/person/${id}/tv_credits?api_key=${API}&language=en-US`;
  }
};

export const searchHelper = {
  searchUrl: function (query) {
    return `${baseUrl}/search/multi?api_key=${API}&language=en-US&query=${query}&page=1&include_adult=false`;
  },
};