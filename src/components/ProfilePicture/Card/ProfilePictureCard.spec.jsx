import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ProfilePictureCard from './ProfilePictureCard.component';
import { ReactComponent as Lion } from '../../../assets/icons/avatars/lion.svg';

jest.mock('../../../providers/Auth', () => ({
  useAuth: jest.fn(() => {
    return {
      profilePicture: 'lion',
      authenticated: 'true',
    };
  }),
}));

const mockProps = {
  id: 'lion',
  index: 0,
  image: {
    name: 'Lion',
    svg: <Lion />,
  },
  startActive: false,
};

describe('Renders the card properly', () => {
  let container;

  beforeEach(() => {
    container = render(<ProfilePictureCard {...mockProps} />).container;
  });

  it('Should render the profile picture card', () => {
    expect(container).not.toBeNull();
  });

  it('Should render an element with two childs', () => {
    expect(container.children[0].children.length).toBe(2);
  });

  it('Should render a paragraph as the first child', () => {
    expect(container.children[0].children[0].tagName).toBe('P');
  });

  it('Should render an svg as the second child', () => {
    expect(container.children[0].children[1].tagName).toBe('svg');
  });
});

describe('Shows the proper information for the profile picture card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<ProfilePictureCard {...mockProps} />);
  });

  it('Should show the current image name', () => {
    wrapper.getByText('Lion');
  });

  it('Should show the current image svg', () => {
    wrapper.getByText('lion.svg');
  });
});

describe('Test the click behavior of the card element', () => {
  it('Sets the new profile picture when clicked', () => {
    const onClickMock = jest.fn();
    const wrapper = render(<ProfilePictureCard onClick={onClickMock} {...mockProps} />);
    const button = wrapper.getByRole('button');
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
