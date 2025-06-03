import React from 'react';
import { AppSidebar } from '../components/app-sidebar.jsx';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../components/ui/sidebar.jsx';
import UserDropdown from '../components/user-dropdown.jsx'; // Default import
import { SettingsPanelProvider, SettingsPanel } from '../components/settings-panel.jsx';
import Chat from '../components/chat.jsx'; // Default import

export const MainLayout = ({ children }) => {
  return (
    <SidebarProvider> {/* Assuming defaultOpen is true or handled internally by SidebarProvider */}
      <AppSidebar /> {/* Assuming this component knows its default side, variant etc. */}
      <SidebarInset className="bg-sidebar group/sidebar-inset"> {/* Ensure 'bg-sidebar' and other custom Tailwind names are defined or handled */}
        <header className="dark flex h-16 shrink-0 items-center gap-2 px-4 md:px-6 lg:px-8 bg-sidebar text-sidebar-foreground relative before:absolute before:inset-y-3 before:-left-px before:w-px before:bg-gradient-to-b before:from-white/5 before:via-white/15 before:to-white/5 before:z-50">
          <SidebarTrigger className="-ms-2" />
          <div className="flex items-center gap-8 ml-auto">
            <nav className="flex items-center text-sm font-medium max-sm:hidden">
              <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors px-2.5 py-1.5">Playground</a>
              <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors px-2.5 py-1.5">Assistants</a>
              <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors px-2.5 py-1.5">Documentation</a>
              <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors px-2.5 py-1.5">API</a>
              <a href="#" className="text-sidebar-foreground/50 hover:text-sidebar-foreground/70 transition-colors px-2.5 py-1.5">Community</a>
            </nav>
            <UserDropdown />
          </div>
        </header>
        <SettingsPanelProvider>
          <div className="flex h-[calc(100svh-4rem)] bg-[hsl(240_5%_92.16%)] md:rounded-s-3xl md:group-peer-data-[state=collapsed]/sidebar-inset:rounded-s-none transition-all ease-in-out duration-300">
            {/*
              The original page.tsx directly renders <Chat /> and <SettingsPanel /> here.
              To make MainLayout generic, the actual page content (like Chat) should be passed as `children`.
              SettingsPanel might be part of the layout or part of specific pages.
              For now, replicating the structure, but ideally, `children` would replace `Chat`.
            */}
            {children ? children : <Chat />} {/* Render children if provided, otherwise default to Chat for now */}
            <SettingsPanel />
          </div>
        </SettingsPanelProvider>
      </SidebarInset>
    </SidebarProvider>
  );
};
