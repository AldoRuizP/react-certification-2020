import decodeHTMLEntities from '../escapeHTML';

describe('Test the decoding function', () => {
  it('Should decode all the escaped entities', () => {
    const testString = `It&#39;s Good Trump Didn&#39;t Create a COVID Panic`;
    const expectedDecoded = `It's Good Trump Didn't Create a COVID Panic`;
    const decodedString = decodeHTMLEntities(testString);
    expect(decodedString).toBe(expectedDecoded);
  });

  it('Should decode all the escaped entities', () => {
    const testString = `Stray Kids &quot;Back Door&quot; M/V Teaser`;
    const expectedDecoded = `Stray Kids "Back Door" M/V Teaser`;
    const decodedString = decodeHTMLEntities(testString);
    expect(decodedString).toBe(expectedDecoded);
  });

  it('Should decode all the escaped entities', () => {
    const testString = `Luke Combs - Lovin&#39; On You (Official Video)`;
    const expectedDecoded = `Luke Combs - Lovin' On You (Official Video)`;
    const decodedString = decodeHTMLEntities(testString);
    expect(decodedString).toBe(expectedDecoded);
  });
});
