import React from 'react';
import { render, fireEvent } from '@testing-library/react';
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

describe('Test the input fields are accesible and updated', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Login />);
  });

  it('Should allow input in the fields ', () => {
    const userInput = wrapper.getByLabelText('username', { selector: 'input' });
    const passwordInput = wrapper.getByLabelText('password', { selector: 'input' });
    const submit = wrapper.getByRole('button');
    fireEvent.keyDown(userInput, { key: 'A', code: 'KeyA' });
    fireEvent.keyDown(passwordInput, { key: 'B', code: 'KeyB' });
    fireEvent.click(submit);
  });
});
