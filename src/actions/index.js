import actions from "../constants/actions"

export const addTodo = (todo) => ({
    type: actions.ADD_TODO,
    payload: todo
})

export const deleteTodo = (id) => ({
    type: actions.DELETE_TODO,
    payload: id
})

export const completeTodo = (index, todo) => ({
    type: actions.COMPLETE_TODO,
    payload: { index, todo }
})