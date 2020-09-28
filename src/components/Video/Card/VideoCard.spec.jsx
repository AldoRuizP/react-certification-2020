import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VideoCard from './VideoCard.component';

const mockProps = {
  thumbnail: 'https://i.ytimg.com/vi/x7ZyYqQXPaA/hqdefault.jpg',
  title:
    'Max Kellerman breaks down the Raptors defeating the Celtics in Game 6 | First Take',
  channelTitle: 'ESPN',
  description:
    'Max Kellerman reacts to the Boston Celtics losing Game 6 to the Toronto Raptors. #FirstTake #NBA ✔️Subscribe to ESPN+https://plus.espn.com/ ✔️ Get the ...',
  publishTime: 'Thu Sep 10 2020',
  videoId: '8fETbjg9V-M',
};
describe('Test the video cards', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <VideoCard {...mockProps} />
      </BrowserRouter>
    );
  });

  it('Should render a component', () => {
    expect(wrapper.container.children).not.toBeNull();
  });

  it('Should render an image for the video card', () => {
    const image = screen.getByAltText(mockProps.title);
    expect(image).not.toBeNull();
    expect(image.tagName).toBe('IMG');
    expect(image.getAttribute('src')).toBe(mockProps.thumbnail);
    expect(image.getAttribute('alt')).toBe(mockProps.title);
  });

  it('Should render a title for the video card', () => {
    const title = screen.getByText(mockProps.title);
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H2');
  });

  it('Should render a channel for the video card', () => {
    const title = screen.getByText(mockProps.channelTitle);
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('P');
  });

  it('Should render a description for the video card', () => {
    const description = screen.getByText(mockProps.description);
    expect(description).not.toBeNull();
    expect(description.tagName).toBe('P');
  });

  it('Should render a timestamp for the video card', () => {
    const timestamp = screen.getByText(mockProps.publishTime);
    expect(timestamp).not.toBeNull();
    expect(timestamp.tagName).toBe('P');
  });

  it('Should render a link for the video card', () => {
    const link = screen.getByText('Watch');
    expect(link).not.toBeNull();
    expect(link.getAttribute('href')).toBe(`/watch?v=${mockProps.videoId}`);
  });
});
