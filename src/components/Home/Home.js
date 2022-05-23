import React, { useState } from "react"
import AddTodo from "../AddTodo/AddTodo"
import TodoList from "../TodoList/TodoList"
import { addTodo, deleteTodo, completeTodo } from "../../actions";
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)

    const addTodoHandler = (todo) => {
        dispatch(addTodo({ id: Math.random().toString(), name: todo, completed: false }))
    }

    const deleteTodoHandler = (id) => {
        dispatch(deleteTodo(id))
    }

    const completeTodoHandler = (id) => {
        let index = todos.findIndex((t) => t.id === id)
        let todo = todos[index]
        todo.completed = true
        dispatch(completeTodo(index, todo))
    }

    const editTodo = (id, text) => {
        let index = todos.findIndex(t => t.id === id)
        let todo = todos[index]
        todo.name = text
        // setTodos(prevState => [...prevState.slice(0, index), todo, ...prevState.slice(index + 1)])
    }

    return (
        <div className="container">
            <AddTodo addTodo={addTodoHandler} />
            <TodoList todos={todos} deleteTodo={deleteTodoHandler} completeTodo={completeTodoHandler} editTodo={editTodo} />
        </div>
    )
}

export default Home