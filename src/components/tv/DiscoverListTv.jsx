import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TitleBorder from '../shared/TitleBorder';

// parsedQuery will be added as search query on Discover links to maintain chosen genres
// using queryString's stringify method to get a URL query string from the object

const DiscoverListTv = () => {
  const { search } = useLocation();
  const parsedQuery = queryString.parse(search);

  const linksArr = [
    { url: `/tv/popular`, title: 'Popular' },
    { url: `/tv/top-rated`, title: 'Top Rated' },
    { url: `/tv/on-the-air`, title: 'On TV' },
    { url: `/tv/airing-today`, title: 'Airing Today' },
  ];

  return (
    <div className='container mx-auto'>
      <ul className='flex flex-row flex-wrap justify-center items-center gap-3'>
        {linksArr.map((link) => (
          <li key={link.url}>
            <NavLink
              to={{
                pathname: link.url,
                search: queryString.stringify({ ...parsedQuery }),
              }}
              style={({ isActive }) => ({
                backgroundColor: isActive ? '#a855f7' : '',
                color: isActive ? '#fff' : '',
              })}
              className='block px-3 py-2 md:px-4 md:py-3 md:hover:bg-purple-500 text-sm md:text-base text-gray-400 hover:text-white rounded-full'
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscoverListTv;
