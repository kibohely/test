import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';

export const App = () => (
  <div>
    <h1 className="text-3xl font-bold text-blue-600 underline p-4">Welcome to Meteor!</h1>
    <Hello />
    <Info />
  </div>
);
