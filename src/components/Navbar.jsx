import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-100 shadow'>
      <div className='max-w-4xl mx-auto py-5'>
        <ul className='flex justify-between font-medium md:text-lg mx-6'>
          <li>Movies</li>
          <li>TV-Shows</li>
          <li>Actors</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar