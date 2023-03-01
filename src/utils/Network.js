export const API = process.env.REACT_APP_TMDB_API_KEY;
export const baseUrl = 'https://api.themoviedb.org/3';

export const mediaHelper = {
  genreUrl: `${baseUrl}/genre/movie/list?api_key=${API}&language=en-US`,
};