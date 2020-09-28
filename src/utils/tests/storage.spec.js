import { storage } from '../storage';

describe('Test the storage function', () => {
  it('Should set a key value', () => {
    storage.set('SOME_KEY', 'SOME_VALUE');
  });

  it('Should get a key value', () => {
    const res = storage.get('SOME_KEY');
    expect(res).toBe('SOME_VALUE');
  });

  it('Should not get a key value', () => {
    const res = storage.get('SOME_INVALID_KEY');
    expect(res).toBeNull();
  });

  it('Should throw an error', () => {
    try {
      storage.set('INVALID_OBJECT', undefined);
      storage.get('INVALID_OBJECT');
    } catch (e) {
      expect(e.message).toBe('Error parsing storage item "INVALID_OBJECT".');
    }
  });
});
