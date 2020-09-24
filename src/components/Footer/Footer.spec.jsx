import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer.component';

describe('Test render footer', () => {
  let innerChildren;

  beforeEach(() => {
    const { container } = render(<Footer />);
    innerChildren = container.firstChild.children;
  });

  it('Renders the footer with three children', () => {
    expect(innerChildren.length).toBe(3);
  });

  it('Renders the app name in the first child', () => {
    expect(innerChildren[0].innerHTML).toBe('React Certification by Aldo Ruiz');
  });
});
