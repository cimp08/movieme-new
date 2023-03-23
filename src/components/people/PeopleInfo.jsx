import React from 'react';
import { BASE_BACKDROP_URL } from '../../utils/Constans';
import TitleBorder from '../shared/TitleBorder';

const PeopleInfo = ({ person }) => {
  return (
    <div>
      <TitleBorder title='Personal Info' />
      <div className='flex flex-row justify-center lg:justify-start gap-8 items-center  lg:items-start lg:flex-col lg:gap-5'>
        <div className='flex lg:hidden'>
          <img
            src={BASE_BACKDROP_URL + person.profile_path}
            alt={person.name}
            className='w-[200px] rounded'
          />
        </div>
        <div className='flex flex-col gap-2 lg:gap-3 flex-none lg:mx-0'>
          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Known for
            </h4>
            <p className='text-sm'>{person.known_for_department}</p>
          </div>
          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Gender
            </h4>
            <p className='text-sm'>
              {person.gender === 2 && 'Male'}
              {person.gender === 1 && 'Female'}
              {person.gender === 0 || (person.gender === 3 && 'Unknown')}
            </p>
          </div>

          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Birthday
            </h4>
            <p className='text-sm'>{person.birthday}</p>
          </div>

          <div>
            <h4 className='text-sm lg:text-base text-black dark:text-white font-bold mb-1'>
              Place Of Birth
            </h4>
            <p className='text-sm'>{person.place_of_birth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleInfo;