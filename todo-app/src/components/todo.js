import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";

function Todo({ todos, removeTodo ,updateTodo}) {
  return todos.map((todo, index) => (
    <div key={todo.id}>
      <h3>
        {todo.text}
        <MdDelete onClick={() => removeTodo(index)} />
        <FiEdit2 onClick={() => updateTodo(index)} />

      </h3>
     
    </div>
  ));
}

export default Todo;
