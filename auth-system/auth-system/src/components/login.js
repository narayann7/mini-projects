import { React, useState, useEffect } from "react";
import api from "../services/axios_api";
import { Box, Card, Typography } from "@mui/material/";
import { serverBaseUrl, clientBaseUrl } from "../utility/constants";

import { AiOutlineGoogle } from "react-icons/ai";
function Login() {
  const googleSignIn = () => {
    window.open(`${serverBaseUrl}/auth/google`, "_self");
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
      <Box
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFE1C6",
        }}
      >
        <Card
          style={{
            height: "40vh",
            width: "20vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="outlined"
        >
          <Card
            onClick={googleSignIn}
            style={{
              height: "8vh",
              backgroundColor: "#af3b2f",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "15vw",
            }}
            variant="outlined"
          >
            <AiOutlineGoogle
              style={{
                color: "#ffffff",
                fontSize: "4vh",
                marginRight: "1vw",
              }}
            ></AiOutlineGoogle>
            <Typography 
            style={{
         cursor: "default",
        fontSize: "3vh",
          
            }}
            
            color={"white"}>google</Typography>
          </Card>
        </Card>
      </Box>
      {/* <button onClick={googleSignIn}>google</button> */}
    </div>
  );
}

export default Login;
