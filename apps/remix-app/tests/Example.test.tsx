import { render, screen } from '@testing-library/react';

// -----------------------------------------------------------------------------

function Example(): JSX.Element {
  return <button>Example</button>;
}

// -----------------------------------------------------------------------------

test('renders <Example>', () => {
  render(<Example />);
  expect(screen.getByText(/Example/i)).toBeInTheDocument();
});
