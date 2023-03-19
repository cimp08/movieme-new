import { Link } from 'react-router-dom';
import { BASE_BACKDROP_URL, MovieGenres, TvGenres } from '../../utils/Constans';
import { AiFillStar } from 'react-icons/ai';

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles and css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SlideShow = ({ media, type }) => {


  const getGenreNames = (item) => {
    let names;
    if(type === "movie") {
      names = item?.genre_ids.map((id) => {
        const genre = MovieGenres.find((genre) => genre.id === id);
        return genre ? genre.name : '';
      });
    }

    if (type === 'tv') {
      names = item?.genre_ids.map((id) => {
        const genre = TvGenres.find((genre) => genre.id === id);
        return genre ? genre.name : '';
      });
    }
    return names
  };


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Autoplay, A11y]}
      slidesPerView={1}
      navigation
      autoplay={{ delay: 5000, disableOnInteraction: true }}
    >
      {media.map((slide) => {
        const genreNames = getGenreNames(slide);

        return (
          <SwiperSlide key={slide?.id}>
            <div
              className='fade-in text-white flex flex-col justify-end items-center h-[35vh] md:h-[70vh] w-full bg-cover bg-top bg-no-repeat'
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8)), url(${
                  BASE_BACKDROP_URL + slide?.backdrop_path
                })`,
              }}
            >
              <Link to={`/${type === "movie" ? "movies" : "tv"}/details/${slide?.id}`}>
                <h2 className='text-center text-xl md:text-3xl font-normal mb-2 md:mb-4'>
                  {type === "movie" ? slide?.title : slide?.name}
                </h2>
              </Link>
              <ul className='text-gray-300 flex flex-wrap gap-1 md:gap-2 mb-2'>
                <ul className='text-gray-300 flex flex-wrap gap-1 md:gap-2 mb-2'>
                  {genreNames?.map((name, key) => (
                    <li
                      key={key}
                      className='text-sm border border-gray-300 rounded-full px-2'
                    >
                      {name}
                    </li>
                  ))}
                </ul>
              </ul>
              <div className='flex justify-center items-center gap-2 mb-6 md:mb-12'>
                <AiFillStar className='text-yellow-300 text-xl' />
                <p className='text-sm md:text-lg text-center'>
                  {slide?.vote_average}
                  <span className='text-sm text-gray-300'> / 10</span>
                </p>
                <span className='bg-yellow-400 text-black text-xs rounded py-[2px] px-1 font-bold '>
                  IMDb
                </span>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SlideShow;
