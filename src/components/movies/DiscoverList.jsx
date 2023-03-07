import React from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import TitleBorder from '../shared/TitleBorder';

// parsedQuery will be added as search query on Discover links to maintain chosen genres
// using queryString's stringify method to get a URL query string from the object

const DiscoverList = () => {
  const { search } = useLocation();
  const parsedQuery = queryString.parse(search);

  const linksArr = [
    { url: `/movies/popular`, title: 'Most Popular' },
    { url: `/movies/new-releases`, title: 'New Releases' },
    { url: `/movies/swedish`, title: 'Swedish' },
    { url: `/movies/coming-soon`, title: 'Coming Soon' },
    { url: `/movies/top-rated`, title: 'Highest Rated' },
    { url: `/movies/old-movies`, title: 'Oldies' },
  ];

  return (
    <div className='container mx-auto'>
      <TitleBorder title="Discover" />
      <ul className='flex flex-row md:flex-col flex-wrap justify-center items-center gap-3'>
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
              className='block px-4 py-3 bg-white hover:bg-purple-500 text-gray-400 hover:text-white rounded-full'
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DiscoverList;
