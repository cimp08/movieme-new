import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';

const SearchInputField = ({ inputText, setInputText, setShowSearchInput }) => {
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Handler function that runs when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.length > 2) {
      navigate(`/search?query=${inputText}`); // Navigate to search results page with search query
    }
    setShowSearchInput(false); // Hide the search input field
    setInputText(''); // Reset the input text
  };

  // The form component that contains the search input field
  return (
    <motion.form
      key='SearchInputField'
      initial={{ y: -50, opacity: 0 }} // Animation initial state
      animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }} // Animation when the component is mounted or updated
      exit={{ y: -50, opacity: 0, transition: { duration: 0.25 } }} // Animation when the component is unmounted
      onSubmit={handleSubmit} // Submit event handler
    >
      <div>
        <label
          for='search'
          class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
        >
          Search
        </label>
        <div class='relative'>
          <div class='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <FaSearch />
          </div>
          <input
            ref={inputRef}
            type='search'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            id='search'
            class='search-bar block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500'
            placeholder='Search...'
            required
          />
        </div>
      </div>
    </motion.form>
  );
};

const Shade = ({ handleClick }) => {
  return (
    <motion.div
      key='Shade'
      style={{ color: '#7c7c7d', cursor: 'pointer' }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { delay: 0.1 } }}
      exit={{ y: -50, opacity: 0, transition: { duration: 0.25 } }}
      onClick={handleClick}
      className='search-bar'
    >
      <FaSearch />
    </motion.div>
  );
};

const SearchNav = () => {
  const [inputText, setInputText] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchRef = useRef(null);

  const handleClick = () => {
    setShowSearchInput(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.className.includes('search-bar')) {
        setShowSearchInput(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showSearchInput]);

  return (
    <div ref={searchRef}>
      <AnimatePresence onRest={() => searchRef.current.focus()}>
        {showSearchInput ? (
          <SearchInputField
            inputText={inputText}
            setInputText={setInputText}
            setShowSearchInput={setShowSearchInput}
          />
        ) : (
          <Shade handleClick={handleClick} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SearchNav;
