import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './NavItem.styles.css';

function NavItem(props) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <OutsideClickHandler display="contents" onOutsideClick={() => setOpen(false)}>
      <li className="nav-item">
        <div
          role="button"
          tabIndex="0"
          href="#"
          className="nav-icon clickable-item"
          onClick={toggleOpen}
          onKeyDown={toggleOpen}
        >
          {props.icon}
        </div>
        {open && props.children}
      </li>
    </OutsideClickHandler>
  );
}

export default NavItem;
