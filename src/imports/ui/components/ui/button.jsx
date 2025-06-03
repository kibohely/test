import React from 'react';

export const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  // Basic button, actual styling would come from global CSS or specific classes
  return (
    <button
      className={`placeholder-button ${className || ''}`}
      ref={ref}
      {...props}
    />
  );
});
