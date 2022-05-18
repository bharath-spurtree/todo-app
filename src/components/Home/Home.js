import React, { useState } from "react"
import AddTodo from "../AddTodo/AddTodo"
import TodoList from "../TodoList/TodoList"

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
        setTodos(prevState => [...prevState.slice(0, index), todo, ...prevState.slice(index+1)])
    }

    const editTodo = (id, text) => {
        let index = todos.findIndex(t => t.id === id)
        let todo = todos[index]
        todo.name = text
        setTodos(prevState => [...prevState.slice(0, index), todo, ...prevState.slice(index+1)])
    }

    return (
        <div className="container">
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} />
        </div>
    )
}

export default Home