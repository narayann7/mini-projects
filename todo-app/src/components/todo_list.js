import { Paper, Typography } from "@mui/material";
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
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#060608",

        height: "100vh",
        width: "100vw"
      }}
    >
      <Paper
        sx={{
          height: "70vh",
          width: "40vw",
        }}
      >
        <h1>My Todo</h1>
        <TodoForm onSubmit={addTodo} />
        {isUpdate === -1 ? (
          <Todo todos={todos} removeTodo={removeTodo} updateTodo={updateTodo} />
        ) : (
          <UpdateForm updateTodoText={updateTodoText} todo={todos[isUpdate]} />
        )}
      </Paper>
    </main>
  );
}

export default Todo_list;
