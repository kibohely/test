import React from 'react';
import * as AvatarPrimitive from "@radix-ui/react-avatar"; // Using Radix Avatar directly
import { Button } from "./ui/button.jsx"; // Adjusted path
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"; // Using Radix Dropdown directly

import {
  RiLogoutCircleLine,
  RiTimer2Line,
  RiUserLine,
  RiFindReplaceLine,
  RiPulseLine,
} from "@remixicon/react";
import { cn } from '../../lib/utils'; // Assuming utils.js is in imports/lib/

// Re-creating basic Avatar components if not already part of a ui/avatar.jsx
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
      'flex h-full w-full items-center justify-center rounded-full bg-muted', // Assuming bg-muted is a Tailwind class
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;


export default function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar className="size-8">
            <AvatarImage
              src="https://raw.githubusercontent.com/origin-space/origin-images/refs/heads/main/exp2/user-02_mlqqqt.png"
              width={32}
              height={32}
              alt="Profile image"
            />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="max-w-64 p-2 border bg-popover text-popover-foreground shadow-md dark:bg-gray-800 rounded-md" // Example basic styling
        align="end"
      >
        <DropdownMenuLabel className="flex min-w-0 flex-col py-0 px-1 mb-2">
          <span className="truncate text-sm font-medium text-foreground mb-0.5">
            Mary P.
          </span>
          <span className="truncate text-xs font-normal text-muted-foreground">
            mary@askdigital.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuItem className="flex items-center gap-3 px-1 py-1.5 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <RiTimer2Line
            size={20}
            className="text-muted-foreground/70"
            aria-hidden="true"
          />
          <span>Dashboard</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 px-1 py-1.5 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <RiUserLine
            size={20}
            className="text-muted-foreground/70"
            aria-hidden="true"
          />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 px-1 py-1.5 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <RiPulseLine
            size={20}
            className="text-muted-foreground/70"
            aria-hidden="true"
          />
          <span>Changelog</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 px-1 py-1.5 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <RiFindReplaceLine
            size={20}
            className="text-muted-foreground/70"
            aria-hidden="true"
          />
          <span>History</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-3 px-1 py-1.5 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          <RiLogoutCircleLine
            size={20}
            className="text-muted-foreground/70"
            aria-hidden="true"
          />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
