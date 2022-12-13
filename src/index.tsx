import React from "react";
import ReactDOM from "react-dom/client";
import { AppRouter } from "./AppRouter";
import reportWebVitals from "./reportWebVitals";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./keycloak";

const eventLogger = (event: unknown, error: unknown) => {
  console.log("onKeycloakEvent", event, error);
};

const tokenLogger = (tokens: unknown) => {
  console.log("onKeycloakTokens", tokens);
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventLogger}
      onTokens={tokenLogger}
    >
      <AppRouter />
    </ReactKeycloakProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();