import * as React from 'react';

// -----------------------------------------------------------------------------

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Sets the content.
   */
  children: React.ReactNode;
}

const Button = ({ children = 'Boop', ...props }: ButtonProps) => {
  return <button {...props}>{children}</button>;
};

// -----------------------------------------------------------------------------

export default Button;
