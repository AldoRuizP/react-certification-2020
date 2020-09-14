import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

import './NavItem.styles.css';

function NavItem(props) {

  const [open, setOpen] = useState(false);

  return (
    <OutsideClickHandler display="contents"onOutsideClick={() => setOpen(false)} >
      <li className="nav-item">
        <div href="#" className="nav-icon" onClick={() => setOpen(!open)}>
          {props.icon}
        </div>
        {open && props.children}
      </li>
    </OutsideClickHandler>
  );

}

export default NavItem;