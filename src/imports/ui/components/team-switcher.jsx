import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu"; // Assuming direct Radix usage

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar.jsx"; // Adjusted path

import { RiExpandUpDownLine, RiAddLine } from "@remixicon/react";

export function TeamSwitcher({
  teams,
}) {
  const [activeTeam, setActiveTeam] = React.useState(teams?.[0] ?? null);

  if (!teams || !teams.length) return null;

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              // size="lg" // The simplified SidebarMenuButton doesn't use CVA variants for size. Styling should be direct if needed.
              // The className prop can still be used for custom styling.
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground gap-3 [&>svg]:size-auto"
            >
              <div className="flex aspect-square size-9 items-center justify-center rounded-md overflow-hidden bg-sidebar-primary text-sidebar-primary-foreground relative after:rounded-[inherit] after:absolute after:inset-0 after:shadow-[0_1px_2px_0_rgb(0_0_0/.05),inset_0_1px_0_0_rgb(255_255_255/.12)] after:pointer-events-none">
                {activeTeam && (
                  <img
                    src={activeTeam.logo}
                    width={36}
                    height={36}
                    alt={activeTeam.name}
                  />
                )}
              </div>
              <div className="grid flex-1 text-left text-base leading-tight">
                <span className="truncate font-medium">
                  {activeTeam?.name ?? "Select a Team"}
                </span>
              </div>
              <RiExpandUpDownLine
                className="ms-auto text-sidebar-foreground/50"
                size={20}
                aria-hidden="true"
              />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            // The className "dark w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-md"
            // needs to be handled. Radix DropdownMenuContent doesn't directly take w-(...) utility classes.
            // These would need to be applied via global styles or a wrapper component if using Tailwind JIT for CSS variables.
            // For now, applying basic classes that Tailwind would understand.
            className="min-w-[224px] rounded-md border bg-popover p-1 text-popover-foreground shadow-md dark:bg-gray-800" // Example basic styling
            align="start"
            side="bottom"
            sideOffset={4}
          >
            <DropdownMenuLabel className="px-2 py-1.5 text-xs font-semibold uppercase text-muted-foreground/70">
              Teams
            </DropdownMenuLabel>
            {teams.map((team, index) => (
              <DropdownMenuItem
                key={team.name}
                onClick={() => setActiveTeam(team)}
                className="flex items-center gap-2 p-2 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
              >
                <div className="flex size-6 items-center justify-center rounded-md overflow-hidden">
                  <img src={team.logo} width={24} height={24} alt={team.name} /> {/* Adjusted size for consistency */}
                </div>
                {team.name}
                {/* DropdownMenuShortcut might need a specific implementation or be a simple span */}
                <span className="ml-auto text-xs tracking-widest opacity-60">⌘{index + 1}</span>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator className="h-px my-1 bg-border" />
            <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-sm cursor-default select-none outline-none hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
              <RiAddLine className="opacity-60" size={16} aria-hidden="true" />
              <div className="font-medium">Add team</div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
