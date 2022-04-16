import React from 'react'

function Todo({ todos, removeTodo }) {
  return todos.map((todo, index) => (

    <div key={todo.id} >

      <h3>{todo.text}</h3>



    </div>
  ));
}

export default Todo