import { React, useState } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { Routes, Route, Link, Navigate } from "react-router-dom";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={loggedIn ? <Home /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
