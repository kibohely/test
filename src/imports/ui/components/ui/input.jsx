import React from 'react';

export const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`placeholder-input ${className || ''}`}
      ref={ref}
      {...props}
    />
  );
});
