import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import SearchNav from './search/SearchNav';
import Switcher from './shared/Switcher';


const Navbar = () => {
  return (
    <nav className='relative h-[60px] bg-slate-100 dark:bg-gray-900 shadow flex-none flex justify-center'>
      <div className='flex justify-between md:justify-around items-center'>
        <div className='absolute left-3 md:left-10'>
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
        <div className='hidden lg:flex lg:absolute lg:right-10'>
          <SearchNav />
        </div>
        <div className='flex absolute right-3 lg:hidden'>
          <Link to='/search'>
            <FaSearch />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
