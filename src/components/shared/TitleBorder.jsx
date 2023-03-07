const TitleBorder = ({title}) => {
  return (
    <span className='block mb-10'>
      <h4 className='relative text-lg text-center border-b'>
        <span className='bg-white text-purple-500 relative top-[13px] px-[10px]'>
          {title}
        </span>
      </h4>
    </span>
  );
}

export default TitleBorder