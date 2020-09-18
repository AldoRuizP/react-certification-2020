import React, { useState } from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

const Wrapper = styled.li`
  width: calc(var(--nav-size) * 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.div`
  --button-size: calc(var(--nav-size) * 0.5);
  fill: white;
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
  & svg {
    fill: var(--text-color);
    width: 20px;
    height: 20px;
    transition: width 150ms;
  }
  &:hover {
    background-color: #6c6e72;
    cursor: pointer;
    & svg {
      width: 25px;
      height: 25px;
    }
  }
`;

function NavItem(props) {
  const [open, setOpen] = useState(false);

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <OutsideClickHandler display="contents" onOutsideClick={() => setOpen(false)}>
      <Wrapper>
        <Icon
          role="button"
          tabIndex="0"
          href="#"
          className="nav-icon clickable-item"
          onClick={toggleOpen}
          onKeyDown={toggleOpen}
        >
          {props.icon}
        </Icon>
        {open && props.children}
      </Wrapper>
    </OutsideClickHandler>
  );
}

export default NavItem;
