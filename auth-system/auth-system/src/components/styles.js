import styled from "@emotion/styled";
import { Box, Card, Typography } from "@mui/material/";

const BgBox = styled(Box)(({ theme }) => {
  return {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE1C6",
  };
});

const CenterCard = styled(Card)(({ theme }) => {
  return {
    height: "40vh",
    width: "20vw",
    display: "flex",
    justifyContent: "space-between",
    padding: "40px",
    alignItems: "center",
    flexDirection: "column",
  };
});

const CardButton = styled(Card)(({ theme }) => {  


    return {


        height: "8vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "15vw",
    }
  })


const styles = {
  BgBox,
  CenterCard,
    CardButton,
};
export default styles;
