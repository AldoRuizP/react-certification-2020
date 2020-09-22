import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import SocialItem from '../SocialItem/index';
import { useAuth } from '../../../providers/Auth';
import DropdownItem from '../DropdownItem';

import * as NavigationIcons from '../../Icons/navigation';

import './DropdownMenu.styles.css';

const NavigationItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: white;

  &:hover {
    background: var(--bg-accent);
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1px #fff inset;
  }
`;

const LeftIcon = styled.span`
  --button-size: calc(var(--nav-size) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-accent);
  transition: filter 300ms;
  margin-right: 15px;

  & svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
    transition: width 150ms;
    transform: ${(props) => (props.mirror ? `rotate(-180deg)` : '')};
  }
`;

const ChevronIcon = styled.span`
  margin-left: auto;
  background-color: inherit;

  & svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translateX(-45%);
  background-color: var(--bg);
  border: var(--border);
  border-radius: var(--border-radius);
  padding: 1rem;
  overflow: hidden;
  transition: height var(--speed) ease;
  z-index: 100;
`;

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const history = useHistory();
  const { authenticated, logout } = useAuth();
  const sectionRef = useRef(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function deAuthenticate(event) {
    event.preventDefault();
    logout();
    history.push('/');
  }

  function DropdownNavigationItem(props) {
    return (
      <NavigationItem
        role="button"
        tabIndex="0"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        onKeyDown={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <LeftIcon mirror={props.mirror}>{props.leftIcon}</LeftIcon>
        {props.tag}
        {props.rightIcon && (
          <ChevronIcon>
            <NavigationIcons.Chevron />
          </ChevronIcon>
        )}
      </NavigationItem>
    );
  }

  return (
    <Dropdown style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        classNames="menu-primary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          {authenticated && (
            <Link to="favorites">
              <DropdownItem tag="My Favorites" leftIcon={<NavigationIcons.Favorite />} />
            </Link>
          )}
          <DropdownNavigationItem
            leftIcon={<NavigationIcons.Share />}
            rightIcon={<NavigationIcons.Chevron />}
            goToMenu="socials"
            tag="Socials"
          />
          <DropdownNavigationItem
            leftIcon={<NavigationIcons.Settings />}
            rightIcon={<NavigationIcons.Chevron />}
            goToMenu="settings"
            tag="Settings"
          />
          {authenticated ? (
            <Link to="/" onClick={deAuthenticate}>
              <DropdownItem tag="Logout" leftIcon={<NavigationIcons.Logout />} />
            </Link>
          ) : (
            <Link to="/login" ref={sectionRef}>
              <DropdownItem tag="Login" leftIcon={<NavigationIcons.Logout />} />
            </Link>
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        classNames="menu-secondary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownNavigationItem
            leftIcon={<NavigationIcons.Chevron />}
            goToMenu="main"
            mirror
          />
          {authenticated && (
            <Link to="/profile-picture">
              <DropdownItem
                tag="Change Profile Picture"
                leftIcon={<NavigationIcons.Image />}
              />
            </Link>
          )}
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'socials'}
        classNames="menu-secondary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownNavigationItem
            leftIcon={<NavigationIcons.Chevron />}
            goToMenu="main"
            mirror
          />
          <SocialItem social="facebook" />
          <SocialItem social="linkedin" />
          <SocialItem social="twitter" />
          <SocialItem social="youtube" />
          <SocialItem social="website" />
          <SocialItem social="email" />
        </div>
      </CSSTransition>
    </Dropdown>
  );
}

export default DropdownMenu;
