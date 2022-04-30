import { Box, Card, Typography } from "@mui/material";
import React, { useEffect, useState} from "react";
import api from "../services/axios_api";
import { clientBaseUrl, serverBaseUrl } from "../utility/constants";

function Home() {
  const [displayName, setDisplayName] = useState("");
  const logout = () => {
    window.open(`${serverBaseUrl}/auth/logout`, "_self");
  };
  useEffect(() => {
    api
      .get("/auth")
      .then((res) => {
        if (res.status === 200) {
          setDisplayName(res.data.user.displayName);
              console.log(res.data);
          
        } else {
          window.open(`${clientBaseUrl}/`, "_self");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
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
          padding: "40px",
          alignItems: "center",
          flexDirection: "column",
        }}
        variant="outlined"
      >
    <Typography
              style={{
                cursor: "default",
                fontSize: "2.5vh",
                margin: "10px",
              }}
              color={"black"}
            >
             login as {displayName}
            </Typography>

<Card
            onClick={logout}
            style={{
              height: "8vh",
              backgroundColor: "#FFC6D9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "15vw",
            }}
            variant="outlined"
          >
               <Typography
              style={{
                cursor: "default",
                fontSize: "3vh",
              }}
              color={"black"}
            >
              Logout
            </Typography>
            </Card>
         

      </Card>
    </Box>
    // <div>
    //   {" "}
    //   <button onClick={logout}>logout</button>
    // </div>
  );
}

export default Home;
