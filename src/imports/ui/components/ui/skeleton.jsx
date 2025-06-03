import React from 'react';
import { cn } from '../../../lib/utils'; // Assuming utils.js is in imports/lib/

function Skeleton({
  className,
  ...props
}) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-muted', className)} // Using 'bg-muted' from a typical Tailwind theme
      {...props}
    />
  );
}

export { Skeleton };
