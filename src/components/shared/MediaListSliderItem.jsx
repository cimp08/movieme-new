import MediaCard from './MediaCard';

const MediaListSliderItem = ({
  mediaArr,
  startPosition,
  endPosition,
}) => {


  return (
    <div className='grid grid-cols-2 md:grid-cols-4 justify-items-center w-full mx-4 md:mx-0'>
      {mediaArr
        .filter((item, index) => index >= startPosition && index <= endPosition)
        .map((item) => (
          <div
            key={item.id}
            className='w-[130px] md:w-[150px] lg:w-[130px] fade-in'
          >
            <MediaCard
              media={item}
              className={'w-[130px] h-[195px] md:w-[150px] md:h-[225px] lg:w-[130px] lg:h-[195px]'}
              hidden={true}
            />
          </div>
        ))}
    </div>
  );
};

export default MediaListSliderItem;
