import { Button, FormControl, OutlinedInput } from "@mui/material";
import React, { useState } from "react";

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
    <FormControl
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "1.5vh",
      }}
      onSubmit={handleSubmit}
    >
      <OutlinedInput
        sx={{
          width: "20vw",
          height: "7vh",
        }}


        
        style={{
          backgroundColor: "#1F2232",
          color: "#ffffff",
          "& 	.MuiOutlinedInput-input": {
            backgroundColor: "#ffffff",

          },
       
        }}

        name="text"
        placeholder="Enter your todo"
        onChange={handleChange}
        value={input}
        type="text"
        
      />
      <Button
        sx={{
          height: "7vh",
        }}
        variant="contained"
        style={{
          marginLeft: "1vw",
          backgroundColor: "#1F2232",
        }}
      >
        add
      </Button>
    </FormControl>
  );
}

export default TodoForm;
//   <form className="todo_form" onSubmit={handleSubmit}>
//   <input
// className="todo_input"
// name="text"
// placeholder="Enter your todo"
// onChange={handleChange}
// value={input}
// type="text"
//   />
//   <button className="todo_button">add</button>
// </form>
