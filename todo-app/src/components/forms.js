import { Button, Container, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";

const TodoField = styled(TextField)(({ theme }) => ({
  width: "20vw",
  variant: "outlined",
}));
function TodoForm({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input.replace(/\s+/g, " ").trim(),
      });
      setInput("");
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "1.5vh",
        width: "28vw",
      }}
    >
      <form
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <TodoField
          label="Enter your todo"
          name="text"
          size="small"
          placeholder="Enter your todo"
          onChange={handleChange}
          value={input}
          type="text"
          color="warning"
        />
      </form>

      <Button
        onClick={handleSubmit}
        sx={{
          height: "5.5vh",
        }}
        variant="contained"
        style={{
          marginLeft: "2vw",
          backgroundColor: "#1F2232",
          color: "#FDE8E9",
        }}
      >
        add
      </Button>
    </Container>
  );
}

export default TodoForm;
