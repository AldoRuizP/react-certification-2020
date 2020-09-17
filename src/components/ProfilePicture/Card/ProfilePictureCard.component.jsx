import React from 'react';

import './ProfilePictureCard.styles.css';

function ProfilePicture(props) {
  return (
    <div className="profile-picture-image-container">
      <p className="picture-name">{props.image.name}</p>
      {props.image.svg}
    </div>
  );
}

export default ProfilePicture;
