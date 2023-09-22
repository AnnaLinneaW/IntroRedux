import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [
            {title: "Buy soup", description: "At store" },
            {title: "Paint wall", description: "with color" },
            {title: "Yoga", description: "At home" },
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload,1);
        },
        editTodo: (state, action) => {
            state.todos[action.payload.index].title = action.payload.title;
            state.todos[action.payload.index].description = action.payload.description;
        }
    }
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;