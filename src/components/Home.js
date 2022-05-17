import React, { useState } from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

const Home = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        setTodos(previousState => {
            return [
                ...previousState, 
                { id: Math.random().toString(), name: todo, completed: false }
            ]
        })
    }

    const deleteTodo = (id) => {
        console.log(id)
        setTodos(previousState => previousState.filter((todo) => todo.id !== id))
    }

    const completeTodo = (id) => {
        let index = todos.findIndex((t) => t.id === id)
        let todo = todos[index]
        todo.completed = true
        setTodos((prevState) => {
            let lTodos = prevState.filter((t) => t.id !== id)
            return [...lTodos, todo]
        })
    }

    console.log(todos)
    return (
        <div className="container">
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} />
        </div>
    )
}

export default Home