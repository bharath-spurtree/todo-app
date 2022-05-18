import React, { useState, useRef, useEffect } from "react"

const TodoList = ({ todos, editTodo, completeTodo, deleteTodo }) => {
    const [text, setText] = useState('')
    const [editIndex, setEditIndex] = useState(-1)
    const textInput = useRef(null)

    const handleEdit = (id, name) =>  {
        setEditIndex(id);
        setText(name) ;
    }

    useEffect(() => {
        textInput.current?.focus()
    }, [editIndex])

    console.log(textInput)

    return (
        <div>
            <ul className="todo__list">
                {todos.map(({id, name, completed}) => {
                    return (
                        <li key={id} className="todo__item">
                            <input 
                                className={completed ? 'todo__completed' : ''} 
                                value={editIndex !== id ? name : text} 
                                disabled={editIndex !== id} 
                                onChange={(e) => setText(e.target.value)} 
                                ref={editIndex !== -1 ? editIndex === id ? textInput : undefined : undefined}
                            />
                            <div>
                                {!completed && 
                                    <>
                                        {editIndex !== id ? 
                                            <button className="btn btn-action btn__small" onClick={() => handleEdit(id, name)}>
                                                Edit
                                            </button>
                                            :
                                            <button className="btn btn-success btn__small" onClick={() => { editTodo(id, text); setEditIndex(-1) }}>
                                                Save
                                            </button>
                                        }
                                    </>
                                }
                                {!completed &&
                                    <button className="btn btn-success btn__small" onClick={() => { completeTodo(id) }} >
                                        Complete
                                    </button>
                                }
                                <button className="btn btn-secondary btn__small" onClick={() => deleteTodo(id)}>
                                    Delete
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default TodoList;