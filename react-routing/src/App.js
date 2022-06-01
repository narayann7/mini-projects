import React from "react";
import "./App.css";
import { Home, Login, Profile, Error, Layout } from "./pages";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./protected_route";

const commonStyle = {
  backgroundColor: "grey",
  //   height: "100vh",
  //   width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
