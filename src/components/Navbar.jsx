import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from './shared/Switcher';
import {FaSearch} from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='bg-slate-100 dark:bg-gray-900 shadow flex-none'>
      <div className='flex justify-between md:justify-around items-center py-5'>
        <div className='ml-2 pb-[2px]'>
          <Switcher />
        </div>
        <div>
          <ul className='flex gap-12 md:gap-40 font-medium md:text-lg mx-6'>
            <li>
              <NavLink
                to='/movies'
                style={({ isActive }) => ({
                  color: isActive ? '#a855f7' : '',
                })}
              >
                Movies
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/tv'
                style={({ isActive }) => ({
                  color: isActive ? '#a855f7' : '',
                })}
              >
                Tv-Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/actors'
                style={({ isActive }) => ({
                  color: isActive ? '#a855f7' : '',
                })}
              >
                Actors
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='mr-2 pb-[2px]'>
          <FaSearch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
