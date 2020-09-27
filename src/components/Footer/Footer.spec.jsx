import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer.component';

describe('Test the footer renders properly', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<Footer />);
  });

  it('Should render a footer element', () => {
    expect(wrapper.container.children[0].tagName).toBe('FOOTER');
  });

  it('Should render the first paragraph with the project name', () => {
    wrapper.getByText('React Certification by Aldo Ruiz');
  });

  it('Should render the second paragraph with the icons credit', () => {
    const iconCredits = ['Icons made byfrom', 'Freepik', 'www.flaticon.com'];
    iconCredits.forEach((text) => wrapper.getByText(text));
  });

  it('Should render the third paragraph with the avatars credit', () => {
    const avatarsCredits = [
      'Animal Flat Colors Icon Pack',
      'byon',
      'Kerismaker',
      'Iconscout',
    ];
    avatarsCredits.forEach((text) => wrapper.getByText(text));
  });
});
