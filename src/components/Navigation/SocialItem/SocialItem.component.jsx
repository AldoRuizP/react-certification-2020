import React from 'react';

import SOCIAL_CONFIG from './constants';
import './SocialItem.styles.css';

function SocialItem(props) {
  const { name, link, icon } = SOCIAL_CONFIG[props.social];

  function handleClick(event) {
    event.preventDefault();
    window.open(link, '_blank');
  }

  return (
    <a href={link} className="menu-item" onClick={handleClick}>
      <span className={`dropdown-icon left-icon-button social ${props.social}`}>
        {icon}
      </span>
      {name}
    </a>
  );
}

export default SocialItem;
