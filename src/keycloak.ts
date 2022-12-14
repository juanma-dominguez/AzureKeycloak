import Keycloak from 'keycloak-js';

// @see https://github.com/react-keycloak/react-keycloak/blob/master/packages/web/README.md#getting-started
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak: Keycloak = new Keycloak({
  url: `${process.env.REACT_APP_KEYCLOAK_URL}`,
  realm: process.env.REACT_APP_KEYCLOAK_REALM as string,
  clientId: process.env.REACT_APP_KEYCLOAK_CLIENTID as string,
});

export default keycloak;
