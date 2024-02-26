import {createSlice} from '@reduxjs/toolkit';

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState: [],
    reducers: {
         add(state, action) {
            // console.log(action.payload);
            state.push(action.payload)
         },

         deleteToDo(state, action) {
            return state.filter(todo => todo._id !== action.payload)
            
         }
    }
})

export const {add,deleteToDo} = todoSlice.actions
export default todoSlice.reducer;