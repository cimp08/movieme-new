import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { peopleHelper } from '../../utils/Network';
import MediaCard from '../shared/MediaCard';
import MyToggle from '../shared/MyToggle';
import TitleBorder from '../shared/TitleBorder';

const PeopleKnownFor = () => {
  const [movies, setMovies] = useState([]); // State to store movie data
  const [tvShows, setTvShows] = useState([]); // State to store TV show data
  const [searchParams] = useSearchParams(); // Hook to get the search params from the URL
  const from = searchParams.get('from'); // Get the 'from' param from the URL
  const [enabled, setEnabled] = useState(from === 'tv'); // State to toggle between movies and TV shows based on the 'from' param in the URL

  const { id } = useParams(); // Hook to get the ID parameter from the URL

  // Function to remove duplicates from an array of objects based on the 'id' property
  const removeDuplicates = (array) => {
    const filteredArray = [];

    for (let item of array) {
      if (!filteredArray.find((other) => other.id === item.id)) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  };

  // Function to get the movie and TV show data for the person
  const getMedia = async (mediaType) => {
    try {
      const { data } = await axios.get(
        mediaType === 'movie'
          ? peopleHelper.personMovieCredits(id)
          : peopleHelper.personTvCredits(id)
      );

      // Combine the person's cast and crew credits
      const topCredits = [...data.cast, ...data.crew];

      // Sort the credits based on vote count in descending order
      topCredits.sort((a, b) => b.vote_count - a.vote_count);

      // Remove duplicates based on 'id' property
      const filteredArr = removeDuplicates(topCredits);

      // Keep only the top 12 credits
      filteredArr.splice(12);

      // Set the state based on the media type
      if (mediaType === 'movie') {
        setMovies(filteredArr);
      } else {
        setTvShows(filteredArr);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Call the getMedia function for both movie and TV show data on component mount
  useEffect(() => {
    getMedia('movie');
    getMedia('tv');
  }, []);

  // Get the media list based on the enabled state (movies or TV shows)
  const mediaList = enabled ? tvShows : movies;

  return (
    <div>
      <TitleBorder title='Known For' />
      <div className='flex justify-end items-center gap-2 mb-6'>
        <MyToggle enabled={enabled} setEnabled={setEnabled} />
        <span className='text-sm text-gray-500'>Tv-Shows</span>
      </div>
      {mediaList.length > 0 && (
        <div
          className={`grid grid-cols-2 md:grid-cols-4 justify-items-center w-full ${
            mediaList?.length === 12 && 'h-[1059px]'
          }`}
        >
          {mediaList?.map((item) => (
            <MediaCard
              key={item.id}
              media={item}
              type={enabled ? 'tv' : 'movie'}
              className={
                'w-[130px] h-[195px] md:w-[150px] md:h-[225px] lg:w-[184px] lg:h-[275px]'
              }
              classNameText={'w-[130px] md:w-[150px] lg:w-[184px]'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default PeopleKnownFor;
