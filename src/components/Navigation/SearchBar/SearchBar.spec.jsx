import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchBar from './SearchBar.component';

describe('Test the search bar', () => {
  describe(' Test dropdown elements', () => {
    it('Renders the searchBar with one element', () => {
      const { container } = render(<SearchBar />);
      expect(container.children.length).toBe(1);
    });

    it('Renders allows input to be inserted in the text bar', () => {
      const { getByPlaceholderText } = render(<SearchBar />);
      const inputArea = getByPlaceholderText('Search for a video...');

      fireEvent.keyDown(inputArea, {
        key: 'a',
        code: 'KeyA',
      });
      fireEvent.keyDown(inputArea, {
        key: 'b',
        code: 'KeyB',
      });
      expect(screen.getByPlaceholderText('Search for a video...').value).toBe('ab');
    });
  });
});
