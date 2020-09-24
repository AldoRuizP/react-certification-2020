import React from 'react';
import styled from 'styled-components';
import getSocialConfig from './constants';

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

const Link = styled.a`
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem;
  color: white;
  cursor: pointer;

  &:hover {
    background: var(--bg-accent);
    ${Icon} {
      background-color: white;
    }

    & svg {
      fill: ${(props) => props.color};
    }
  }
`;

function SocialItem(props) {
  const { name, color, link, icon } = getSocialConfig(props.social);

  function handleClick(event) {
    event.preventDefault();
    window.open(link, '_blank');
  }

  return (
    <Link role="button" color={color} href={link} onClick={handleClick}>
      <Icon>{icon}</Icon>
      {name}
    </Link>
  );
}

export default SocialItem;
