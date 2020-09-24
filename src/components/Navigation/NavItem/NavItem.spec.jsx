import React from 'react';
import { render } from '@testing-library/react';
import NavItem from './NavItem.component';
import * as NavigationIcons from '../../Icons/navigation';

describe('Test Navigation item', () => {
  describe('Test navigation item elements', () => {
    let innerChildren;

    beforeEach(() => {
      const { container } = render(
        <NavItem icon={<NavigationIcons.Chevron />}>
          <div>Test</div>
        </NavItem>
      );
      innerChildren = container.children;
    });

    it('Renders the dropdown with one children', () => {
      expect(innerChildren.length).toBe(1);
    });

    it('Renders the icon in the first child', () => {
      expect(innerChildren[0].tagName).toBe('DIV');
      expect(innerChildren[0].children[0].tagName).toBe('LI');
      expect(innerChildren[0].children[0].children[0].tagName).toBe('DIV');
      expect(innerChildren[0].children[0].children[0].children[0].tagName).toBe('svg');
    });
  });
});
