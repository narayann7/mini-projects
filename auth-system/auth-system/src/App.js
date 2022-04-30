import { React, useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { Routes, Route, Navigate } from "react-router-dom";
import api from "./services/axios_api";
import "./App.css";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    api
      .get("/auth")
      .then((res) => {
        if (res.status === 200) {
          setLoggedIn(true);
        } else {
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loggedIn]);
  return (
    <Routes>
      <Route
        path="/home"
        element={loggedIn ? <Home /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/home" /> : <Login />}
      />
      <Route
        path="/"
        element={loggedIn ? <Home /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
