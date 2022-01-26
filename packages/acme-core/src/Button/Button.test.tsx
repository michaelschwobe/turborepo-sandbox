import { render, screen } from '@testing-library/react';

import Button from './Button';

// -----------------------------------------------------------------------------

describe('Button', () => {
  test('should render', () => {
    render(<Button data-testid="Button">Example</Button>);
    expect(screen.getByTestId('Button')).toBeInTheDocument();
  });
});

/* TODO: Write <Button /> tests. */
