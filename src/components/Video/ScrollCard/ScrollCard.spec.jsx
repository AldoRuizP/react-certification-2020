import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ScrollCard from './ScrollCard.component';

const mockProps = {
  thumbnail: 'https://i.ytimg.com/vi/x7ZyYqQXPaA/hqdefault.jpg',
  title:
    'Max Kellerman breaks down the Raptors defeating the Celtics in Game 6 | First Take',
  channelTitle: 'ESPN',
  videoId: '8fETbjg9V-M',
};

describe('Test the scroll card component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(
      <BrowserRouter>
        <ScrollCard {...mockProps} />
      </BrowserRouter>
    );
  });

  it('Should render a component', () => {
    expect(wrapper.container.children).not.toBeNull();
  });

  it('Should render an image for the video scroll card', () => {
    const image = screen.getByAltText(mockProps.title);
    expect(image).not.toBeNull();
    expect(image.tagName).toBe('IMG');
    expect(image.getAttribute('src')).toBe(mockProps.thumbnail);
    expect(image.getAttribute('alt')).toBe(mockProps.title);
  });

  it('Should render a title for the video scroll card', () => {
    const title = screen.getByText(mockProps.title);
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('H2');
  });

  it('Should render a channel for the video scroll card', () => {
    const title = screen.getByText(mockProps.channelTitle);
    expect(title).not.toBeNull();
    expect(title.tagName).toBe('P');
  });

  it('Should render a link for the video scroll card', () => {
    const anchor = wrapper.container.children[0].children[0];
    expect(anchor).not.toBeNull();
    expect(anchor.tagName).toBe('A');
    expect(anchor.getAttribute('href')).toBe(`/watch?v=${mockProps.videoId}`);
  });
});
