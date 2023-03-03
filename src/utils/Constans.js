import moment from 'moment';

// Constants for the base URLs to access the movie posters and backdrops from
export const BASE_BACKDROP_URL = 'https://image.tmdb.org/t/p/original';
export const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';

// Constants to represent the current date, the date for the next month, and the date for the previous month in "YYYY-MM-DD" format
export const TODAY = moment().format('YYYY-MM-DD');
export const NEXTMONTH = moment().add(1, 'M').format('YYYY-MM-DD');
export const PREVMONTH = moment().subtract(1, 'M').format('YYYY-MM-DD');

// An array of objects representing the movie genres supported by "themoviedb.org" API
export const MovieGenres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
];
