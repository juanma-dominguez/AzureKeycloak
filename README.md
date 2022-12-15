## Architecture diagram

![alt text](https://github.com/juanma-dominguez/AzureKeycloak/blob/main/docs/arch.png?raw=true)

# Getting Started

Run Keycloak in local: `docker run --name keycloak_dev -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -e KEYCLOAK_FRONTEND_URL=http://localhost quay.io/keycloak/keycloak:latest start-dev`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Azure Active Directory

Create an App registrations in Azure Active Directory. We must create a secret and configure the keycloak identity provider with this data.

## Keycloak clients

Create a client in keycloak and add this data to .env.local file to connect the react app.
