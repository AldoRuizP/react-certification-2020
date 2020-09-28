import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Scroll from './Scroll.component';

describe('Test the video scroll component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <Scroll />
      </BrowserRouter>
    );
  });

  it('Should render the video scroll list', () => {
    expect(wrapper).not.toBeNull();
  });
});
