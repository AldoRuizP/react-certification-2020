import React from 'react';

import './DropdownItem.styles.css';

function DropdownItem(props) {
  return (
    <div href="#" className="menu-item clickable-item">
      <span className="dropdown-icon left-icon-button">{props.leftIcon}</span>
      {props.children}
    </div>
  );
}

export default DropdownItem;
