import React, { useState } from "react";

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
    <form className="todo_form" onSubmit={handleSubmit}>
      <input
        className="todo_input"
        name="text"
        placeholder="Update your todo"
        onChange={handleChange}
        value={input}
        type="text"
      />
      <button className="todo_button">update</button>
    </form>
  );
}

export default UpdateForm;
