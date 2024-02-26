import { configureStore} from "@reduxjs/toolkit";
import todoSlice from "./TodoSlice";

const store = configureStore({
    reducer: {
        todoSlice: todoSlice
    }
})
export default store