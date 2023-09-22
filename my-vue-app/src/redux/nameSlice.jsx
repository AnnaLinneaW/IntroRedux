import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: {
        name: ""
    },
    reducers: {
        setName: (state, action) => {
            console.log("Setting name");
            state.name = action.payload;
        }   
    }
});

export const { setName } = nameSlice.actions;

export default nameSlice.reducer;
