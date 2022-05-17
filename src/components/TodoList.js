import React from "react"

const TodoList = (props) => {
    return (
        <div>
            <ul className="todo__list">
                {props.todos.map((todo) => {
                    return (
                        <li key={todo.id} className="todo__item">
                            <h2 className={todo.completed ? 'todo__completed' : ''}>{todo.name}</h2>
                            <div>
                                {!todo.completed && 
                                    <button className="btn btn-success btn__small" onClick={() => { props.completeTodo(todo.id) }} >
                                        Complete
                                    </button>
                                }
                                <button className="btn btn-secondary btn__small" onClick={() => props.deleteTodo(todo.id)}>
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