import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DropDownMenu from './DropdownMenu.component';

jest.mock('../../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {};
  }),
}));

it('Should render the dropdown menu', () => {
  const wrapper = render(
    <BrowserRouter>
      <DropDownMenu />
    </BrowserRouter>
  );
  expect(wrapper).not.toBeNull();
});
