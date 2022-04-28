import { React, useState, useEffect } from "react";
import api from "../services/axios_api";

function login() {
  const googleSignIn = () => {
    // window.open("http://localhost:5000/auth/google", "_self");
    // window.open("http://localhost:5000/auth", "_self");
console.log(process.env.clientBaseUrl);
  };

  return (
    <div>
      <button onClick={googleSignIn}>google</button>
    </div>
  );
}

export default login;
