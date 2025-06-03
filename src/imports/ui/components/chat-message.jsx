import React from 'react';
import { cn } from '../../lib/utils'; // Assuming utils.js is in imports/lib/
import * as AvatarPrimitive from '@radix-ui/react-avatar';

// Basic Avatar components (can be moved to a separate ui/avatar.jsx if used elsewhere)
const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;


export function ChatMessage({
  className,
  children,
  isUser = false,
  // Add other props like 'avatarSrc', 'avatarFallback', 'name', 'timestamp' if needed from original
  ...props
}) {
  return (
    <div
      className={cn(
        'group relative flex items-start md:-ml-12', // Example base class
        isUser ? 'justify-end' : '',
        className
      )}
      {...props}
    >
      {!isUser && (
        <Avatar className="mr-3 size-8 shrink-0"> {/* Adjust size as needed */}
          <AvatarImage src="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp2/logo-01_upxvqe.png" alt="Bot" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'flex max-w-[calc(100%-48px)] flex-col gap-2 rounded-lg px-3 py-2 text-sm',
          isUser
            ? 'bg-primary text-primary-foreground' // Example user message styling
            : 'bg-muted', // Example bot message styling
          isUser ? 'rounded-br-none' : 'rounded-bl-none'
        )}
      >
        {children}
      </div>
      {isUser && (
         <Avatar className="ml-3 size-8 shrink-0"> {/* Adjust size as needed */}
          <AvatarImage src="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp2/user-02_mlqqqt.png" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
