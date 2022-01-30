import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

// -----------------------------------------------------------------------------

test('renders <Button> from @acme/core', () => {
  render(<App />);
  expect(screen.getByText(/button/i)).toBeInTheDocument();
});
