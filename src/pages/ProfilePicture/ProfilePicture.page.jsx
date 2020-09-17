import React from 'react';

import ProfilePictureCard from '../../components/ProfilePicture/Card';
import { AVATAR_MAP } from '../../components/Icons/avatars';
import './ProfilePicture.styles.css';

function SecretPage() {
  const avatars = Object.keys(AVATAR_MAP).map((avatarKey) => {
    return <ProfilePictureCard id={avatarKey} image={AVATAR_MAP[avatarKey]} />;
  });

  return (
    <section className="profile-picture-container">
      <h2>Choose your preferred image!</h2>
      <div className="avatars-container">{avatars}</div>
    </section>
  );
}

export default SecretPage;
