import React, { useEffect } from "react";
import api from "../services/axios_api";
import { clientBaseUrl } from "../utility/constants";

function Home() {
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
  return <div>home</div>;
}

export default Home;
