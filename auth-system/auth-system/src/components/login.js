import { React, useState, useEffect } from "react";
import api from "../services/axios_api";
import { serverBaseUrl, clientBaseUrl } from "../utility/constants";
function Login() {
  const googleSignIn = () => {
    window.open(`${serverBaseUrl}/auth/google`, "_self");
    // window.open("http://localhost:5000/auth", "_self");
  };

  useEffect(() => {
    api
      .get("/auth")
      .then((res) => {
        if (res.status === 200) {
        } else {
          window.open(`${clientBaseUrl}/`, "_self");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <button onClick={googleSignIn}>google</button>
    </div>
  );
}

export default Login;
