import React, { useState } from 'react'
import TodoForm from './forms'

function Todo_list() {

    const addTodo = (todo) => { }

    return (

        <div>
            <h1>
                My Todo
            </h1>
            <TodoForm onSubmit={addTodo} />
        </div>
    )
}

export default Todo_list