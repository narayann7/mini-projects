import { Box, Container, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import TodoForm from "./forms";
import Todo from "./todo";
import UpdateForm from "./updateForm";

function Todo_list() {
  const [todos, setTodos] = useState([]);
  const [isUpdate, setIsUpdate] = useState(-1);

  const addTodo = (todo) => {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(...todos);
  };
  const removeTodo = (index) => {
    const newTodo = [];
    for (let i = 0; i < todos.length; i++) {
      if (i !== index) {
        newTodo.push(todos[i]);
      }
    }
    setTodos(newTodo);
  };

  const updateTodo = (index) => {
    setIsUpdate(index);
  };
  const updateTodoText = (todo) => {
    const newTodo = [];
    for (let i = 0; i < todos.length; i++) {
      if (todo.id === todos[i].id) {
        newTodo.push(todo);
      } else {
        newTodo.push(todos[i]);
      }
    }
    setTodos(newTodo);
    setIsUpdate(-1);
  };

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100vw"}
      bgcolor={"#1F2232"}
    >
      <Paper
        sx={{
          height: "70vh",
          width: "42vw",
        }}
     
      >
        <Box
          sx={{
            height: "33%",
            width: "40vw",
          }}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"#596475"}
        >
          <Typography color={"1F2232"} fontFamily={"Popins"} fontSize={"30px"}>
            My Todo's
          </Typography>
          <TodoForm onSubmit={addTodo} />
        </Box>
    
          <Container
          sx={{
            height: "65%",
            width: "42vw",
          }}
          style={{
    
            overflow: "auto",
            backgroundColor: "#596475",
          }}
          >
                {isUpdate === -1 ? (
            <Todo
              todos={todos}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
                ) : (
          <UpdateForm updateTodoText={updateTodoText} todo={todos[isUpdate]} />

                )
}
          </Container>
                
     
      </Paper>
    </Box>
  );
}

export default Todo_list;
