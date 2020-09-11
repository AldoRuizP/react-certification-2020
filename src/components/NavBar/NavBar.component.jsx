import React from 'react';

import './NavBar.styles.css';

function NavBar() {
  function searchItem(event) {
    event.preventDefault();
    // const { searchInput } = event.target.elements;
  }

  return (
    <section className="navbar">
      <h1>Welcome back!</h1>
      <form onSubmit={searchItem} className="search-form">
        <input name="searchInput" type="text" placeholder="Search for anything..." />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

export default NavBar;
