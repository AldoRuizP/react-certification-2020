import { storage } from '../storage';

describe('Test the storage function', () => {
  it('Should set a key value', () => {
    storage.set('SOME_KEY', 'SOME_VALUE');
  });

  it('Should get a key value', () => {
    const res = storage.get('SOME_KEY');
    expect(res).toBe('SOME_VALUE');
  });
});
