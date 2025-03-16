import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';  // Import global styles (if you have them)
import App from './App';  // Import the App component

// Create a root element where React will render your app
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component into the root element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
