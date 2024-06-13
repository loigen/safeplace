// src/auth/Auth0ProviderWithHistory.js

import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

const Auth0ProviderWithHistory = ({ children }) => {
  const domain = 'dev-grm7aepo4ucj7v7p.us.auth0.com'; // Replace with your Auth0 domain
  const clientId = 'lln7cP3EwmoHkGsxvSajvA4SurQWHy1z'; // Replace with your Auth0 client ID
  const history = useHistory();

  const onRedirectCallback = (appState) => {
    history.push(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;
