import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import nameSlice from "./nameSlice";
import todoSlice from "./todoSlice";
import darkModeSlice from "./darkMode";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    name: nameSlice,
    toDo: todoSlice,
    darkMode: darkModeSlice
  }
});

export default store;
