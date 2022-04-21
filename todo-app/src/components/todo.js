import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { Container, Typography, useTheme } from "@mui/material";
function Todo({ todos, removeTodo, updateTodo }) {
  const theme = useTheme();

  function giveColour(){
    var index=Math.floor(Math.random()*3);

    return index;

  }

  return todos.map((todo, index) => (
    <Container
      sx={{
        height: "5.5vh",
        width: "28vw",
      }}
      style={{
        borderRadius: "5px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1.5vh",
        backgroundColor: giveColour()===0?theme.palette.primary.main:giveColour()===1?theme.palette.secondary.main:theme.palette.info.main

      }}
    >
      <Typography> {todo.text}</Typography>

      <Container
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "3vw",
          alignItems: "center",
          height: "5.5vh",
          padding: "0px",
          margin: "0px",
        }}
      >
        <MdDelete
          color={theme.palette.background.default}
          onClick={()=>{

            removeTodo(index)
          }
            
            
       }
        />
        <FiEdit2 onClick={() => updateTodo(index)} />
      </Container>
    </Container>
  ));
}

export default Todo;
