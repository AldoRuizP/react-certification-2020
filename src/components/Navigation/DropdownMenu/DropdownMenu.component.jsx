import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import SocialItem from '../SocialItem/index';

import DropdownItem from '../DropdownItem';

import * as NavigationIcons from '../../Icons/navigation';

import './DropdownMenu.styles.css';

function DropdownMenu(props) {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height)
  }

  function DropdownNavigationItem(props) {
    return (
      <div className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className={`dropdown-icon left-icon-button ${props.classNames}`} >{props.leftIcon}</span>
        {props.children}
        {props.rightIcon && <span className="chevron-icon"><NavigationIcons.Chevron /></span>}
      </div>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} >

      <CSSTransition in={activeMenu === 'main'} classNames="menu-primary" unmountOnExit timeout={500} onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>My Favorites</DropdownItem>
          <DropdownNavigationItem leftIcon={<NavigationIcons.Share />} rightIcon={<NavigationIcons.Chevron />} goToMenu="socials" >Socials</DropdownNavigationItem>
          <DropdownNavigationItem leftIcon={<NavigationIcons.Settings />} rightIcon={<NavigationIcons.Chevron />} goToMenu="settings" >Settings</DropdownNavigationItem>
          <DropdownItem leftIcon={<NavigationIcons.Logout />}>Logout</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} classNames="menu-secondary" unmountOnExit timeout={500} onEnter={calcHeight}>
        <div className="menu">
          <DropdownNavigationItem leftIcon={<NavigationIcons.Chevron />} goToMenu="main" classNames='mirror-svg' ></DropdownNavigationItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
          <DropdownItem leftIcon={<NavigationIcons.Favorite />}>Get a prize</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'socials'} classNames="menu-secondary" unmountOnExit timeout={500} onEnter={calcHeight}>
        <div className="menu">
          <DropdownNavigationItem leftIcon={<NavigationIcons.Chevron />} goToMenu="main" classNames='mirror-svg' ></DropdownNavigationItem>
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