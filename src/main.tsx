import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';

// Core Services
import './services/apiService';

// Primary Default Entry Component
import { LoginPage } from './react-components/LoginPage';


// --- Mount Default Application View ---

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error('Failed to locate target element `#root` to render React application.');
}