import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavItem from '../NavItem';
import DropdownMenu from '../DropdownMenu';
import SearchBar from '../SearchBar';
import { useAuth } from '../../../providers/Auth';

import { Search, WizelineLogo, WizelineHeaderLight } from '../../Icons/navigation';
import { getAvatarByName } from '../../Icons/avatars';

const Nav = styled.nav`
  height: var(--nav-size);
  background-color: var(--bg);
  border-bottom: var(--border);
  padding: 0 1rem;
  display: flex;
`;
const Title = styled.div`
  padding: 0;
  margin: 0;
  width: 20rem;
  height: inherit;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  position: relative;
  display: inline-flex;
  @media (max-width: 435px) {
    width: 210px;
  }
`;
const Logo = styled.span`
  & svg {
    height: 45px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    fill: white;
    margin-right: 10px;
    @media (max-width: 435px) {
      width: 25px;
      height: 25px;
    }
  }
`;
const Header = styled.span`
  & svg {
    height: 45px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 3;
    @media (max-width: 435px) {
      width: 100px;
    }
  }
`;
const Menu = styled.menu`
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 0;
  width: -webkit-fill-available;
  padding: 0;
`;

function NavBar() {
  const { profilePicture, authenticated } = useAuth();
  const avatarIcon = authenticated
    ? getAvatarByName(profilePicture).svg
    : getAvatarByName(null).svg;

  return (
    <Nav id="main-navbar">
      <Link to="/">
        <Title>
          <Logo>
            <WizelineLogo />
          </Logo>
          <Header>
            <WizelineHeaderLight />
          </Header>
        </Title>
      </Link>
      <Menu>
        <NavItem icon={<Search />}>
          <SearchBar />
        </NavItem>
        <NavItem icon={avatarIcon}>
          <DropdownMenu />
        </NavItem>
      </Menu>
    </Nav>
  );
}

export default NavBar;
