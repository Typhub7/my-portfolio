import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="flex items-center bg-gray-200 rounded-full px-3 py-2">
      <input
        type="text"
        className="bg-gray-200 outline-none w-full px-2"
        placeholder="Rechercher..."
        value={query}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSearch}
        className="text-gray-600 hover:text-gray-800"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchInput;