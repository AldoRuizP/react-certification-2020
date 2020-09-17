import React from 'react';
import NavItem from '../NavItem';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';
import { Search } from '../../Icons/navigation';
import { ReactComponent as CurrentAvatar } from '../../../assets/icons/avatars/snake.svg';

import './NavBar.styles.css';

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<Search />}>
          <SearchBar />
        </NavItem>
        <NavItem icon={<CurrentAvatar />}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
