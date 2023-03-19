/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { mediaHelper } from '../../utils/Network';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';

const GenresList = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const { search } = useLocation();
  const parsedQuery = queryString.parse(search);
  const navigate = useNavigate();

  // Gets all genres
  const getGenres = async () => {
    try {
      await axios
        .get(mediaHelper.genreUrl)
        .then((res) => setGenres(res.data.genres));
    } catch (error) {
      console.log(error);
    }
  };

  // Logic for handling the URL. If genre exists, use join method to get a comma separated string and assign it as value on the parsedQuery genre key.
  // We then use the stringify method on queryString in order to get a string and set it as search query.
  // If genre is unselected, remove genre from URL search query

  const setUrl = (genreIds) => {
    if (genreIds.length) {
      parsedQuery.genre = genreIds.join(',');
      navigate({ search: queryString.stringify(parsedQuery) });
    } else {
      delete parsedQuery.genre;
      navigate({ search: queryString.stringify(parsedQuery) });
    }
  };

  // Remove or add genre to selectedGenres
  // After determining the genres, we pass the array to setUrl as parameter

  const setGenre = (id) => {
    let genreIds = [];
    if (selectedGenres.includes(id)) {
      genreIds = selectedGenres.filter((genre) => genre !== id);
    } else {
      genreIds = [...selectedGenres, id];
    }
    setUrl(genreIds);
    setSelectedGenres(genreIds);
  };

  // Run on mount
  useEffect(() => {
    getGenres();
  }, []);

  // Run on mount and every time parsedQuery.genre is changed.
  // Parsing string to integer because we use it in GenreList component to see if a genre is selected or not

  useEffect(() => {
    if (parsedQuery.genre) {
      const genreArr = parsedQuery.genre
        .split(',')
        .map((genre) => parseInt(genre, 10));
      setSelectedGenres(genreArr);
    }
  }, [parsedQuery.genre]);

  return (
    <div className='flex flex-wrap gap-2 justify-center'>
      {genres?.map((genre) => (
        <button
          key={genre.id}
          onClick={() => setGenre(genre.id)}
          className={`${
            selectedGenres.includes(genre.id)
              ? 'bg-purple-500 border-purple-500 text-white'
              : 'bg-white dark:bg-black border-gray-400 text-gray-400'
          } text-sm md:text-base px-3 py-1 border md:hover:bg-purple-500 md:hover:text-white md:hover:border-purple-500 rounded-full`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenresList;
