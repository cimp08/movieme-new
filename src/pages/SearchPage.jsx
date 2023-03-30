/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Radios from '../components/search/Radios';
import SearchCard from '../components/search/SearchCard';
import { searchHelper } from '../utils/Network';

const plans = [
  {
    name: 'All',
    filter: 'all'
  },
  {
    name: 'Movies',
    filter: 'movie'
  },
  {
    name: 'Tv-Shows',
    filter: 'tv'
  },
  {
    name: 'People',
    filter: 'person'
  },
];

const SearchPage = () => {
  const [media, setMedia] = useState([]);
  const [searchParams] = useSearchParams();
  const [inputText, setInputText] = useState(searchParams.get('query') ? searchParams.get('query') : '');
  const [selected, setSelected] = useState(plans[0]);
  const navigate = useNavigate();

  const getFilteredMedia = (data, mediaType) => {
    return data.filter((item) => item.media_type.toLowerCase() === mediaType);
  };

   const getMedia = async () => {
     const query = searchParams.get('query');
     if(query) {
try {
  const response = await axios
    .get(searchHelper.searchUrl(query))
    .then((res) => res.data.results);
  if (response) {
    let filteredMedia = response;
    if (selected.name !== 'All') {
      filteredMedia = getFilteredMedia(
        filteredMedia,
        selected.filter.toLowerCase()
      );
    }
    setMedia(filteredMedia);
  }
} catch (error) {
  console.log(error);
}
     }
     
   };

  useEffect(() => {
    getMedia();
  }, [searchParams.get('query'), selected]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length > 2) {
      navigate(`/search?query=${inputText}`);
    }
  };

  return (
    <div className='mx-4'>
      <form onSubmit={handleSubmit} className='mt-20 max-w-xl mx-auto'>
        <label className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>
          Search
        </label>
        <div className='relative'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            id='search'
            className='block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-slate-100 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500'
            placeholder='Search'
            required
          />
          <button
            type='submit'
            className='text-white absolute right-2.5 bottom-2.5 bg-purple-500 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-500 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
          >
            Search
          </button>
        </div>
      </form>
      <div className='mt-6'>
        <Radios selected={selected} setSelected={setSelected} plans={plans} />
      </div>
      <div className='max-w-[1040px] mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-6 my-10'>
        {media.length > 0 &&
          media.map((item) => <SearchCard key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default SearchPage;
