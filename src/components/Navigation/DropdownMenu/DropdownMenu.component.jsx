import React, { useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import SocialItem from '../SocialItem/index';
import { useAuth } from '../../../providers/Auth';
import DropdownItem from '../DropdownItem';

import * as NavigationIcons from '../../Icons/navigation';

import './DropdownMenu.styles.css';

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
      <div
        className="menu-item clickable-item"
        role="button"
        tabIndex="0"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        onKeyDown={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className={`dropdown-icon left-icon-button ${props.classNames}`}>
          {props.leftIcon}
        </span>
        {props.children}
        {props.rightIcon && (
          <span className="chevron-icon">
            <NavigationIcons.Chevron />
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        classNames="menu-primary"
        unmountOnExit
        timeout={500}
        onEnter={calcHeight}
      >
        <div className="menu">
          {authenticated ? (
            <Link to="favorites">
              <DropdownItem leftIcon={<NavigationIcons.Favorite />}>
                My Favorites
              </DropdownItem>
            </Link>
          ) : (
            <></>
          )}
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>
            My Favorites
          </DropdownItem>
          <DropdownNavigationItem
            leftIcon={<NavigationIcons.Share />}
            rightIcon={<NavigationIcons.Chevron />}
            goToMenu="socials"
          >
            Socials
          </DropdownNavigationItem>
          <DropdownNavigationItem
            leftIcon={<NavigationIcons.Settings />}
            rightIcon={<NavigationIcons.Chevron />}
            goToMenu="settings"
          >
            Settings
          </DropdownNavigationItem>

          {authenticated ? (
            <Link to="/" onClick={deAuthenticate}>
              <DropdownItem leftIcon={<NavigationIcons.Logout />}>Logout</DropdownItem>
            </Link>
          ) : (
            <Link to="/login" ref={sectionRef}>
              <DropdownItem leftIcon={<NavigationIcons.Logout />}>Login</DropdownItem>
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
            classNames="mirror-svg"
          />
          {authenticated && (
            <Link to="/profile-picture">
              <DropdownItem leftIcon={<NavigationIcons.Image />}>
                Change Profile Picture
              </DropdownItem>
            </Link>
          )}
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
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
            classNames="mirror-svg"
          />
          <SocialItem social="facebook" />
          <SocialItem social="linkedin" />
          <SocialItem social="twitter" />
          <SocialItem social="youtube" />
          <SocialItem social="website" />
          <SocialItem social="email" />
        </div>
      </CSSTransition>
    </div>
  );
}

export default DropdownMenu;
