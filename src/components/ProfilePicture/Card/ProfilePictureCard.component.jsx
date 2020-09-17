import React from 'react';
import { useAuth } from '../../../providers/Auth';
import './ProfilePictureCard.styles.css';

function ProfilePicture(props) {
  const { setProfilePicture } = useAuth();

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
    >
      <p className="picture-name">{props.image.name}</p>
      {props.image.svg}
    </div>
  );
}

export default ProfilePicture;
