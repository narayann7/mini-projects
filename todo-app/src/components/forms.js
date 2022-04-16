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
    <form className="todo_form" onSubmit={handleSubmit}>
      <input
        className="todo_input"
        name="text"
        placeholder="Enter your todo"
        onChange={handleChange}
        value={input}
        type="text"
      />
      <button className="todo_button">add</button>
    </form>
  );
}

export default TodoForm;
