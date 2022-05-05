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
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  const googleSignIn = () => {
    // window.open(`${serverBaseUrl}/auth/google`, "_self");
    // document.setCookie("helloxx", "encrypted cookie string Value");

        console.log(getCookie("hello"));
    
    // console.log(document.cookie.hello);
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
