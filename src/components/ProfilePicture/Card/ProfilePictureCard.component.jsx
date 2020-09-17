import React, { useCallback } from 'react';
import { useAuth } from '../../../providers/Auth';
import './ProfilePictureCard.styles.css';

function ProfilePicture(props) {
  const { profilePicture, setProfilePicture } = useAuth();
  const autoFocus = useCallback(
    (el) => (props.id === profilePicture && el ? el.focus() : null),
    [props.id, profilePicture]
  );

  console.log(`${props.id} - ${profilePicture}`);

  function setPicture(event) {
    event.preventDefault();
    setProfilePicture(props.id);
  }

  return (
    <div
      role="button"
      className="profile-picture-image-container"
      onClick={setPicture}
      onKeyDown
      tabIndex={props.index}
      ref={autoFocus}
    >
      <p className="picture-name">{props.image.name}</p>
      {props.image.svg}
    </div>
  );
}

export default ProfilePicture;
