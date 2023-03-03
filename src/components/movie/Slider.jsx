import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { sliderHelper } from '../../utils/Network';
import SlideShow from './SlideShow';

const Slider = () => {
  const [media, setMedia] = useState([])

  // Fetch data 
  const getMedia = async () => {
    try {
      await axios
        .get(sliderHelper.sliderMovieUrl)
        .then((res) => setMedia(res.data.results));
    } catch (error) {
      console.log(error)
    }
  }

  // Runs getMedia function on mount
  useEffect(() => {
    getMedia()
  },[])


  return (
    <SlideShow media={media} />
  );
};

export default Slider;
