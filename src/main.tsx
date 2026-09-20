import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { store } from './store';

// Core Services
import './services/apiService';

// Auth
import {
  loginRequest,
  type LoginPayload,
} from './store/auth/authSlice';

// Primary Default Entry Component
import { LoginPage } from './react-components/LoginPage';

import type { RootState, AppDispatch } from './store';


// ─────────────────────────────────────────────────────────────
// Login Container
// ─────────────────────────────────────────────────────────────

const LoginContainer: React.FC = () => {

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading, error } = useSelector(
    (state: RootState) => state.auth
  );

  const handleLogin = (
    username: string,
    password: string,
    rememberMe: boolean
  ) => {

    console.log('Login submitted:', {
      username,
      rememberMe,
    });

    const payload: LoginPayload = {
      username: username,
      password: password,
    };

    dispatch(loginRequest(payload));
  };

  return (
    <LoginPage
      isLoading={isLoading}
      errorMessage={error || undefined}
      onLogin={handleLogin}
      facilityName="HIMS"
    />
  );
};


// ─────────────────────────────────────────────────────────────
// Mount Application
// ─────────────────────────────────────────────────────────────

const rootElement = document.getElementById('root');

if (rootElement) {

  const root = createRoot(rootElement);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <LoginContainer />
      </Provider>
    </React.StrictMode>
  );

} else {

  console.error(
    'Failed to locate target element `#root` to render React application.'
  );

}