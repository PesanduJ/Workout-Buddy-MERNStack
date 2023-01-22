import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { WorkoutsContextProvider } from './context/WorkoutContext';       //use this to work with hooks

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
);


