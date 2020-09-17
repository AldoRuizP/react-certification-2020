import React from 'react';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';
import { useAuth } from '../../../providers/Auth';

import { Search, WizelineLogo, WizelineHeaderLight } from '../../Icons/navigation';
import { getAvatarByName } from '../../Icons/avatars';

import './NavBar.styles.css';

function NavBar() {
  const { getProfilePicture } = useAuth();
  const currentAvatar = getProfilePicture();
  const avatarIcon = getAvatarByName(currentAvatar).svg;

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-title">
        <WizelineLogo className="wizeline-logo" />
        <WizelineHeaderLight className="wizeline-header-light" />
      </Link>
      <ul className="navbar-nav">
        <NavItem icon={<Search />}>
          <SearchBar />
        </NavItem>
        <NavItem icon={avatarIcon}>
          <DropdownMenu />
        </NavItem>
      </ul>
    </nav>
  );
}

export default NavBar;
