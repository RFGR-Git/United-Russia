import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Import the main App component

// Create a React root and render the App component into the 'root' div in index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
