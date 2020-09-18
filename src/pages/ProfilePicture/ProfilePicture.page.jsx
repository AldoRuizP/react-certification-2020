import React from 'react';

import styled from 'styled-components';
import { useAuth } from '../../providers/Auth';
import ProfilePictureCard from '../../components/ProfilePicture/Card';
import { AVATAR_MAP } from '../../components/Icons/avatars';

const Title = styled.h2``;
const AvatarsContainer = styled.div`
  width: 85%;
  display: flex;
  flex-flow: wrap;
`;
const ProfilePictures = styled.section`
  min-height: 77vh;
  display: grid;
  place-items: center;
`;

function ProfilePicturePage() {
  const { profilePicture } = useAuth();

  const avatars = Object.keys(AVATAR_MAP).map((avatarKey, index) => (
    <ProfilePictureCard
      id={avatarKey}
      index={index}
      image={AVATAR_MAP[avatarKey]}
      startActive={profilePicture === avatarKey}
    />
  ));

  return (
    <ProfilePictures>
      <Title>Choose your preferred image!</Title>
      <AvatarsContainer>{avatars}</AvatarsContainer>
    </ProfilePictures>
  );
}

export default ProfilePicturePage;
