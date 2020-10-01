import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  color: white;
  font-size: 15px;
  letter-spacing: 2px;
  @media (max-width: 750px) {
    width: 30%;
  }
  @media (max-width: 490px) {
    width: 97%;
    top: 65px;
    right: 5px;
    left: 5px;
    border-radius: 0;
    transform-origin: center;
  }
`;

function SearchBar() {
  const history = useHistory();
  const [value, setValue] = useState('');

  function handleChange(event) {
    event.preventDefault();
    setValue(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      history.push(`/?q=${value}`);
      history.go(0);
    }
  }

  return (
    <Input
      type="text"
      id="searchItem"
      placeholder="Search for a video..."
      autoComplete="off"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={value}
    />
  );
}

export default SearchBar;
