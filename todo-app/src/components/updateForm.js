import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const TodoField = styled(TextField)(({ theme }) => ({
  width: "20vw",
  variant: "outlined",

}));
function UpdateForm({ updateTodoText, todo }) {
  const [input, setInput] = useState(todo.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      updateTodoText({
        id: todo.id,
        text: input.replace(/\s+/g, " ").trim(),
      });
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1.5vh",
      }}
      className="todo_form"
      onSubmit={handleSubmit}
    >
      <TodoField
        className="todo_input"
        name="text"
        label="Update your todo"
        placeholder="Update your todo"
        onChange={handleChange}
        value={input}
        type="text"
        color="warning"

      />
      <Button
        sx={{
          height: "6vh",
        }}
        variant="contained"
        style={{
          marginLeft: "1vw",
          backgroundColor: "#1F2232",
          color: "#FDE8E9",
        }}
      >
        Update
      </Button>
    </form>
  );
}

export default UpdateForm;
