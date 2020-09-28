import React from 'react';
import { render } from '@testing-library/react';
import App from './App.component';

describe('Test the application renders properly', () => {
  let container;
  beforeEach(() => {
    container = render(<App />);
  });

  it('should render the application container', () => {
    expect(container).not.toBeNull();
  });
});
