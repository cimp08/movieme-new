import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { peopleHelper } from '../../utils/Network';
import MediaCard from '../shared/MediaCard';
import MyToggle from '../shared/MyToggle';
import TitleBorder from '../shared/TitleBorder';


const PeopleKnownFor = () => {
  
  const [media, setMedia] = useState([]);
  const [searchParams] = useSearchParams();
  const from = searchParams.get('from');
  const [enabled, setEnabled] = useState(from === "tv" ? true : false);

  const { id } = useParams();

  const removeDuplicates = (array) => {
    const filteredArray = [];

    for (let item of array) {
      if (!filteredArray.find((other) => other.id === item.id)) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  };

  const getMedia = async () => {
    setMedia([]);
    try {
      const url = enabled
        ? peopleHelper.personTvCredits(id)
        : peopleHelper.personMovieCredits(id);

      const { data } = await axios.get(url);

      const topCredits = [...data.cast, ...data.crew];
      topCredits.sort((a, b) => b.vote_count - a.vote_count);

      const filteredArr = removeDuplicates(topCredits);

      filteredArr.splice(12);

      setMedia(filteredArr);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMedia();
  }, [enabled]);

  return (
    <div>
      <TitleBorder title='Known For' />
      <div className='flex justify-end items-center gap-2 mb-6'>
        <MyToggle enabled={enabled} setEnabled={setEnabled} />
        <span className='text-sm text-gray-500'>Tv-Shows</span>
      </div>
      {media.length > 0 && (
        <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center w-full'>
          {media?.map((item) => (
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
