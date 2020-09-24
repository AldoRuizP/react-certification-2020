import React from 'react';
import { render } from '@testing-library/react';
import SocialItem from './SocialItem.component';

describe('Test Social item', () => {
  describe(' Test social elements', () => {
    let innerChildren;

    beforeEach(() => {
      const { container } = render(<SocialItem social="facebook" />);
      innerChildren = container.children;
    });

    it('Renders the dropdown with one children', () => {
      expect(innerChildren.length).toBe(1);
    });

    it('Renders the icon in the first child', () => {
      expect(innerChildren[0].tagName).toBe('A');
      expect(innerChildren[0].children[0].tagName).toBe('SPAN');
      expect(innerChildren[0].children[0].children[0].tagName).toBe('svg');
    });
  });

  it('Renders the tag name as inner text', () => {
    const { getByText } = render(<SocialItem social="facebook" />);
    expect(getByText('Facebook')).toBeTruthy();
  });
});
