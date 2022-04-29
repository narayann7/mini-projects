import React, { useEffect } from "react";
import api from "../services/axios_api";
import { clientBaseUrl, serverBaseUrl } from "../utility/constants";

function Home() {
  const logout = () => {
    window.open(`${serverBaseUrl}/auth/logout`, "_self");
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
      {" "}
      <button onClick={logout}>logout</button>
    </div>
  );
}

export default Home;
