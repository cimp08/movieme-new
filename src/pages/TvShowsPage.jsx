import React from 'react';
import Slider from '../components/shared/Slider';
import DiscoverListTv from '../components/tv/DiscoverListTv';
import TvShows from '../components/tv/tvShows';

const TvShowsPage = () => {
  return (
    <>
      <Slider type='tv' />
      <div className='container mx-auto mt-10'>
          <DiscoverListTv />
        <div className='flex-auto mx-4'>
          <TvShows />
        </div>
      </div>
    </>
  );
};

export default TvShowsPage;
