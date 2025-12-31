import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState = {
    todos: [{id:1, task: 'Sample Todo', isDone: false}],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { // Action creators and reducers
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo); // Immer allows us to write "mutating" logic in reducers
        },
        markAsDone: (state, action) => {
            // Find the todo with the given id and mark it as done  
            // Iterate through todos and update the isDone property
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    todo.isDone = true;
                }
            });
        },
        deleteTodo: (state, action) => {
            // Remove the todo with the given id
            // Filter out the todo to be deleted
            // and return a new array without it
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    },
}); 
