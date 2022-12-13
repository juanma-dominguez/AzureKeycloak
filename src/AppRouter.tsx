import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useKeycloak } from "@react-keycloak/web";

const HomePage = React.lazy(() => import("./pages/Home"));
const LoginPage = React.lazy(() => import("./pages/Login"));

export const AppRouter = () => {
  const { initialized } = useKeycloak();

  if (!initialized) {
    console.log("no iniciado");
    //return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
