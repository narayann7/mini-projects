import React, { useState } from 'react'

function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: input
        });
        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (

        <form className="todo_form" onSubmit={handleSubmit}>

            <input
                className='todo_input'
                name="text"
                placeholder='Enter your name'
                onChange={handleChange}
                value={input}
                type="text" />
            <button className='todo_button' >add</button>

        </form>

    )
}

export default TodoForm