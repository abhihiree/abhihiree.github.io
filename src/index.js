import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import './index.css';
import App from './App';

// Create root using 'createRoot' instead of 'render'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Use the root object to render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
