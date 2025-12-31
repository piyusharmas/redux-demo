import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        markAsDone: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.done = true;
            }
        },
    },
}); 

export const { addTodo, removeTodo, markAsDone } = todoSlice.actions;