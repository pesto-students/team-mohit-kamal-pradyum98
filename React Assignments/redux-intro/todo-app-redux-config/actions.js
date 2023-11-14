// Action Types
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const DELETE_TASK = 'DELETE_TASK';

// Action Creators
export function addTask(task) {
    return { type: ADD_TASK, payload: task };
}

export function toggleTask(taskId) {
    return { type: TOGGLE_TASK, payload: taskId };
}

export function deleteTask(taskId) {
    return { type: DELETE_TASK, payload: taskId };
}
