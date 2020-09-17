import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';

import { Search, WizelineLogo, WizelineHeaderLight } from '../../Icons/navigation';
import { Snake } from '../../Icons/avatars';

import './NavBar.styles.css';

const currentAvatar = <Snake />;

function NavBar() {
  return (
    <Link to="/">
      <nav className="navbar">
        <div className="navbar-title">
          <WizelineLogo className="wizeline-logo" />
          <WizelineHeaderLight className="wizeline-header-light" />
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
    </Link>
  );
}

export default NavBar;
