import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login.page';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return { login: jest.fn() };
  }),
}));

describe('Test login page renders properly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Login />);
  });

  it('Should render the login page', () => {
    expect(wrapper).not.toBeNull();
  });

  it('Should show a title', () => {
    const title = wrapper.getByText('Welcome back!');
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H1');
  });

  it('Should render a filed to input the username', () => {
    const input = wrapper.getByLabelText('username', { selector: 'input' });
    expect(input).not.toBeNull();
  });

  it('Should render a filed to input the password', () => {
    const input = wrapper.getByLabelText('password', { selector: 'input' });
    expect(input).not.toBeNull();
  });
});
