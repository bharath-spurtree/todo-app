import actions from "../constants/actions"

const todos = (state=[], action) => {
    switch(action.type) {
        case actions.ADD_TODO: return [
                ...state,
                action.payload
            ];
        case actions.DELETE_TODO: 
            return state.filter((todo) => todo.id !== action.payload);
        case actions.EDIT_TODO:
        case actions.COMPLETE_TODO: 
            return [...state.slice(0, action.payload.index), action.payload.todo, ...state.slice(action.payload.index + 1)]
        default: return state
    }
}

export default todos