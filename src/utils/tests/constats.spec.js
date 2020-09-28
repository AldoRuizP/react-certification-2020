import * as Constants from '../constants';

const AUTH_STORAGE_KEY = 'wa_cert_authenticated';
const PROFILE_PICTURE = 'wa_cert_profile_picture';
const FAVORITE_VIDEOS_KEY = 'wa_cert_favorites';

describe('Test the constants exports', () => {
  it('Should provide the auth storage key name', () => {
    expect(Constants.AUTH_STORAGE_KEY).toBe(AUTH_STORAGE_KEY);
  });

  it('Should provide the profile picture  key name', () => {
    expect(Constants.PROFILE_PICTURE).toBe(PROFILE_PICTURE);
  });

  it('Should provide the favorites video key name', () => {
    expect(Constants.FAVORITE_VIDEOS_KEY).toBe(FAVORITE_VIDEOS_KEY);
  });
});
