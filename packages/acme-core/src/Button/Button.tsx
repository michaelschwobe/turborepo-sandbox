import * as React from 'react';

// -----------------------------------------------------------------------------

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  /** Sets the content. */
  children: React.ReactNode;
  /** Sets the `class` attribute. */
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <button
        {...props}
        className={[className, 'Button'].filter(Boolean).join(' ')}
        ref={forwardedRef}
      >
        {children}
      </button>
    );
  },
);

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  Button.displayName = 'Button';
}

export default Button;
