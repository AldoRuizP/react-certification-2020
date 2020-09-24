import React from 'react';
import { render } from '@testing-library/react';
import DropdownItem from './DropdownItem.component';
import * as NavigationIcons from '../../Icons/navigation';

describe('Test Dropdown item Icons', () => {
  const tagName = 'My menu name';

  describe(' Test dropdown elements', () => {
    let innerChildren;

    beforeEach(() => {
      const { container } = render(
        <DropdownItem tag={tagName} leftIcon={<NavigationIcons.Chevron />} />
      );
      innerChildren = container.children;
    });

    it('Renders the dropdown with one children', () => {
      expect(innerChildren.length).toBe(1);
    });

    it('Renders the icon in the first child', () => {
      expect(innerChildren[0].tagName).toBe('DIV');
      expect(innerChildren[0].children[0].tagName).toBe('SPAN');
      expect(innerChildren[0].children[0].children[0].tagName).toBe('svg');
    });
  });

  it('Renders the tag name as inner text', () => {
    const { getByText } = render(
      <DropdownItem tag={tagName} leftIcon={<NavigationIcons.Chevron />} />
    );
    expect(getByText(tagName)).toBeTruthy();
  });
});
