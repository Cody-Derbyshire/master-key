import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      {/* <Auth0ProviderWithHistory> */}
      <App />
      {/* </Auth0ProviderWithHistory> */}
    </Router>
  </React.StrictMode>
);
