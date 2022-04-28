import { React, useState, useEffect } from "react";
import Login from "./components/login";
import Home from "./components/home";
import { Routes, Route, Navigate } from "react-router-dom";
import api from "./services/axios_api";;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // useEffect(() => {
  //   api
  //     .get("/auth")
  //     .then((res) => {
  //       if (res.status === 200) {
  //         setLoggedIn(true);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
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
