import { useKeycloak } from '@react-keycloak/web';
import React, { useCallback } from 'react';

const LandingPage = (): JSX.Element => {
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    console.log('Keycloak no iniciado');
  }

  const keycloakLogin = useCallback(() => {
    keycloak.login({ redirectUri: process.env.REACT_APP_BASE_URL });
  }, [keycloak]);

  return (
    <div>
      <button onClick={keycloakLogin}>Log in</button>
    </div>
  );
};

export default LandingPage;
