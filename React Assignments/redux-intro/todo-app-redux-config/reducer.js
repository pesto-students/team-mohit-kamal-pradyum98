function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };
        case TOGGLE_TASK:
            return {
                ...state,
                todos: state.todos.map((task) =>
                    task.id === action.payload ? { ...task, completed: !task.completed } : task
                )
            };
        case DELETE_TASK:
            return {
                ...state,
                todos: state.todos.filter((task) => task.id !== action.payload)
            };
        default:
            return state;
    }
}
