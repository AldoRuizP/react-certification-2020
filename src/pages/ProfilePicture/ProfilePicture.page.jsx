import React from 'react';

import { useAuth } from '../../providers/Auth';
import ProfilePictureCard from '../../components/ProfilePicture/Card';
import { AVATAR_MAP } from '../../components/Icons/avatars';
import './ProfilePicture.styles.css';

function SecretPage() {
  const { profilePicture } = useAuth();

  const avatars = Object.keys(AVATAR_MAP).map((avatarKey, index) => {
    return (
      <ProfilePictureCard
        id={avatarKey}
        index={index}
        image={AVATAR_MAP[avatarKey]}
        startActive={profilePicture === avatarKey}
      />
    );
  });

  return (
    <section className="profile-picture-container">
      <h2>Choose your preferred image!</h2>
      <div className="avatars-container">{avatars}</div>
    </section>
  );
}

export default SecretPage;
