import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";
import oldTodoSlice from './oldTodosSlice'

const store = configureStore({
    reducer: {
        todoSlice: todoSlice,
        oldTodoSlice: oldTodoSlice
    }
})
export default store