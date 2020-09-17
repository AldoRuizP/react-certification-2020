import React from 'react';
import NavItem from '../NavItem';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';
import { Search } from '../../Icons/navigation';

import { Snake } from '../../Icons/avatars';

import './NavBar.styles.css';

const currentAvatar = <Snake />;

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-title">
        <h1>WizeTube</h1>
      </div>
      <ul className="navbar-nav">
        <NavItem icon={<Search />}>
          <SearchBar />
        </NavItem>
        <NavItem icon={currentAvatar}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
