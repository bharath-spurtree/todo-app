import React, { useState } from "react"

const AddTodo = (props) => {
    const [text, setText] = useState('')

    const changeHandler = (e) => {
        setText(e.target.value)
    }

    const addTodoHandler = () => {
        props.addTodo(text)
        setText('')
    }

    const onEnter = (e) => {
        if(e.key === 'Enter')
            addTodoHandler()
    }

    return (
        <>
            <label htmlFor="todo" className="todo__label">My Todos</label>
            <div className="todo__form">
                <input 
                    id="todo" 
                    type="text" 
                    placeholder="Enter todo description" 
                    onChange={changeHandler} 
                    className="todo__input" 
                    value={text} 
                    onKeyPress={onEnter} 
                />
                <button onClick={addTodoHandler} className="btn btn-primary">
                    Add Todo
                </button>
            </div>
        </>
    )
}

export default AddTodo;