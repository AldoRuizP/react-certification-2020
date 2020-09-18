import React from 'react';
import styled, { keyframes } from 'styled-components';

const extend = keyframes`
  from {
    transform: scale(0, 1);
  }

  to {
    transform: scale(1, 1);
  } 
`;

const Input = styled.input`
  border-radius: inherit;
  height: 40px;
  width: 25rem;
  outline: none;
  border: none;
  position: absolute;
  right: 4.2rem;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 1px white inset;
  text-indent: 10px;
  background-color: var(--bg-accent);
  transform-origin: 100% 50%;
  animation: ${extend} 500ms ease;
`;

function SearchBar() {
  return (
    <Input
      type="text"
      id="searchItem"
      placeholder="Search for a video..."
      autoComplete="off"
    />
  );
}

export default SearchBar;
