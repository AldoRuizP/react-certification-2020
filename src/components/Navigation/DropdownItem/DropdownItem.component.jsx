import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: white;
  &:hover {
    background: var(--bg-accent);
  }
`;

const Icon = styled.span`
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
  }
`;

function DropdownItem(props) {
  return (
    <Wrapper>
      <Icon>{props.leftIcon}</Icon>
      {props.tag}
    </Wrapper>
  );
}

export default DropdownItem;
