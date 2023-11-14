import { createStore } from 'redux';
import { todoReducer } from './reducer';
// Initial state
const initialState = {
    todos: []
};

// Create Redux store
const store = createStore(() => todoReducer(initialState));

export default store;
