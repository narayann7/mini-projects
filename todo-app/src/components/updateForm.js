import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const TodoField = styled(TextField)(({ theme }) => ({
  width: "18vw",
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
        size="small"
        name="text"
        label="Update your todo"
        placeholder="Update your todo"
        onChange={handleChange}
        value={input}
        type="text"
        color="warning"

      />
      <Button
            onClick={handleSubmit}
        sx={{
          height: "5.5vh",
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
