import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-slate-100 shadow'>
      <div className='max-w-4xl mx-auto py-5'>
        <ul className='flex justify-between font-medium md:text-lg mx-6'>
          <li>
            <Link to='/movies'>Movies</Link>
          </li>
          <li>
            <Link to='/tv'>Tv-Shows</Link>
          </li>
          <li>
            <Link to='/actors'>Actors</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar