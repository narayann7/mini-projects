import React, { useState } from 'react'
import TodoForm from './forms'
import Todo from './todo'

function Todo_list() {


    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        const newTodos = [...todos, todo]
        setTodos(newTodos)
        console.log(...todos)
    }
    const removeTodo = (index) => {
// console.log(todos[index]);
        todos.splice(index, 1)
        setTodos(todos)
        console.log(...todos);
    }

    return (

        <div>
            <h1>
                My Todo
            </h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} removeTodo={removeTodo} />
        </div>
    )
}

export default Todo_list