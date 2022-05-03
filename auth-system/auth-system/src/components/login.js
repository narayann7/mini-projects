import { React, useState, useEffect } from "react";
import api from "../services/axios_api";
import { Box, Card, Typography } from "@mui/material/";
import styles from "./styles.js";
import { serverBaseUrl, clientBaseUrl } from "../utility/constants";
import {
  AiOutlineGoogle,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";

var BgBox = styles.BgBox;
var CenterCard = styles.CenterCard;
var CardButton = styles.CardButton;


function Login() {
  const googleSignIn = () => {
    window.open(`${serverBaseUrl}/auth/google`, "_self");
  };
  const githubSignIn = () => {
    window.open(`${serverBaseUrl}/auth/github`, "_self");
  };
  const twitterSignIn = () => {
    window.open(`${serverBaseUrl}/auth/twitter`, "_self");
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
    <BgBox>
      <CenterCard variant="outlined">
        <CardButton
          onClick={googleSignIn}
          style={{
            backgroundColor: "#af3b2f",
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
            color={"white"}
          >
            google
          </Typography>
        </CardButton>

        <CardButton
          onClick={githubSignIn}
          style={{
            backgroundColor: "#1b1f23",
          }}
          variant="outlined"
        >
          <AiFillGithub
            style={{
              color: "#ffffff",
              fontSize: "4vh",
              marginRight: "1vw",
            }}
          ></AiFillGithub>
          <Typography
            style={{
              cursor: "default",
              fontSize: "3vh",
            }}
            color={"white"}
          >
            github
          </Typography>
        </CardButton>

        {/* twitter------------ */}
        <CardButton
          onClick={twitterSignIn}
          style={{
            backgroundColor: "#00aced",
          }}
          variant="outlined"
        >
          <AiOutlineTwitter
            style={{
              color: "#ffffff",
              fontSize: "4vh",
              marginRight: "1vw",
            }}
          ></AiOutlineTwitter>
          <Typography
            style={{
              cursor: "default",
              fontSize: "3vh",
            }}
            color={"white"}
          >
            twitter
          </Typography>
        </CardButton>
      </CenterCard>
    </BgBox>
  );
}

export default Login;
