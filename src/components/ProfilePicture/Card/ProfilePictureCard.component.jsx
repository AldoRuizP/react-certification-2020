import React, { useCallback } from 'react';
import styled, { keyframes } from 'styled-components';
import { useAuth } from '../../../providers/Auth';

const shake = keyframes`
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
`;

const PictureName = styled.p`
  padding: 5px;
  margin: 0;
`;

const ProfileImageContainer = styled.div`
  width: 150px;
  height: 135px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 10px;
  text-align: center;

  & svg {
    max-height: 100px;
  }

  &:hover {
    border: 1px solid gold;
    box-shadow: 0px 0px 4px gold;

    & svg {
      animation: ${shake} 0.5s;
      animation-iteration-count: infinite;
    }

    & ${PictureName} {
      font-weight: bolder;
    }
  }

  &:focus,
  &:active {
    outline: none;
    border: 1px solid green;
    box-shadow: 0px 0px 4px green;
    & svg {
      animation: none;
    }
  }
`;

function ProfilePicture(props) {
  const { profilePicture, setProfilePicture } = useAuth();
  const autoFocus = useCallback(
    (el) => (props.id === profilePicture && el ? el.focus() : null),
    [props.id, profilePicture]
  );

  function setPicture(event) {
    event.preventDefault();
    setProfilePicture(props.id);
  }

  return (
    <ProfileImageContainer
      role="button"
      onClick={setPicture}
      onKeyDown
      tabIndex={props.index}
      ref={autoFocus}
    >
      <PictureName>{props.image.name}</PictureName>
      {props.image.svg}
    </ProfileImageContainer>
  );
}

export default ProfilePicture;
