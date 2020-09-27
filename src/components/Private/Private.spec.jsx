import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Private from './Private.component';
import { useAuth } from '../../providers/Auth';

jest.mock('../../providers/Auth', () => ({
  useAuth: jest.fn(),
}));

const componentWrapper = (
  <BrowserRouter>
    <Private>
      <p>A private component!</p>
    </Private>
  </BrowserRouter>
);

describe('Test private routes', () => {
  it('Should render', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: true,
      };
    });
    const wrapper = render(componentWrapper);
    expect(wrapper).not.toBeNull();
  });

  it('Should render the private component', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: true,
      };
    });
    const wrapper = render(componentWrapper);
    const mockComponent = wrapper.queryByText('A private component!');
    expect(mockComponent).not.toBeNull();
  });

  it('Should not render the private component', () => {
    useAuth.mockImplementation(() => {
      return {
        authenticated: false,
      };
    });
    const wrapper = render(componentWrapper);
    const mockComponent = wrapper.queryByText('A private component!');
    expect(mockComponent).toBeNull();
  });
});
