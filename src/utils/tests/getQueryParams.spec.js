import GetQueryParam from '../getQueryParams';

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/some-route',
    search: '?my_key=my_value',
  }),
}));

describe('Test the getQueryParam function', () => {
  it('Should not retrieve  a query param', () => {
    const result = GetQueryParam('some_wrong_key');
    expect(result).toBeNull();
  });

  it('Should not retrieve  a query param', () => {
    const result = GetQueryParam('my_key');
    expect(result).toBe('my_value');
  });
});
