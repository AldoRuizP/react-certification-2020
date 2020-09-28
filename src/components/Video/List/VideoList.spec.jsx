import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoList from './VideoList.component';

const mockProps = {
  videos: [{ videoId: 1 }, { videoId: 2 }, { videoId: 3 }],
};
describe('Test the video list component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <VideoList {...mockProps} />
      </BrowserRouter>
    );
  });

  it('renders the list', () => {
    expect(wrapper).not.toBeNull();
  });

  it('renders the children', () => {
    expect(wrapper.container.children[0].children[0].children.length).toBe(3);
  });
});
