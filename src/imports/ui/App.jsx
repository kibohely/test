import React from 'react';
import { MainLayout } from './layouts/MainLayout.jsx'; // Corrected path

// The original Hello and Info components can be removed if MainLayout is now the primary structure
// import { Hello } from './Hello.jsx';
// import { Info } from './Info.jsx';

export const App = () => (
  <MainLayout>
    {/* This is where page-specific content will go */}
    <div className="p-4 m-4 bg-white rounded-lg shadow"> {/* Added some basic styling for visibility */}
      <h2 className="text-2xl font-semibold text-gray-800">Main Application Content Area</h2>
      <p className="text-gray-600 mt-2">
        This content is passed as children to MainLayout. The actual page (e.g., Chat view)
        would replace this div. The Chat component previously rendered inside MainLayout
        by default will be overridden by this children prop.
      </p>
      {/*
        Optionally, we can include the old content here if needed for testing,
        but the idea is that MainLayout now dictates the overall page structure.
        For example, to include the old content:
        <div>
          <h1 className="text-3xl font-bold text-blue-600 underline p-4">Welcome to Meteor!</h1>
          <Hello />
          <Info />
        </div>
      */}
    </div>
  </MainLayout>
);
