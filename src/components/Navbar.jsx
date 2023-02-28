import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-slate-100 shadow'>
      <div className='max-w-4xl mx-auto py-5'>
        <ul className='flex justify-between font-medium md:text-lg mx-6'>
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
    </nav>
  );
}

export default Navbar