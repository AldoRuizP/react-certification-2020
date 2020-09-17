import React from 'react';

import './SearchBar.styles.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input
        className="search-bar-input"
        type="text"
        id="searchItem"
        placeholder="Search for a video..."
        autoComplete="off"
      />
    </div>
  );
}

export default SearchBar;
