import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseURL from '../variables'

// createAsyncThunk is used to handle asynchronous tasks in Reduxtoolkit
export const getOldTodos = createAsyncThunk('gettodo', async () => {
   const data = await fetch(baseURL + '/')
   const result = await data.json()
   return result;
});

export const deleteOldToDo = createAsyncThunk('deleteTodo', async (id) => {
   // console.log(id)
   const response = await fetch(`${baseURL}/todo/${id}`, {
      method: 'DELETE'
   })
   //  console.log(response);
   const result = await response.json();
   // console.log(result);
   return result;
});

export const deleteAlltodos = createAsyncThunk('deleteAlltodo', async () => {
   const response = fetch(baseURL + '/deleteAlltodos', {
      method: 'DELETE'
   })
   const data = await response.json()
   return data;
})


const oldTodoSlice = createSlice({
   name: 'oldTodoSlice',
   initialState: {
      data: [],
      status: 'idle',
      deleteStatus: 'idle'
   },
   reducers: {
      // add(state, action) {
      //    return action.payload
      // },
      // deleteToDo(state, action) {
      //    return state.filter(todo => todo._id !== action.payload)
      // }
   },

   // extraReducers is a feature of Redux Toolkit that helps handle asynchronous tasks
   // by allowing you to define how the state should be modified based on different stages of the async operation.
   //getProducts and deleteTodo are the action creators inside extraReducers //

   extraReducers: (builder) => {
      builder
         .addCase(getOldTodos.pending, (state, action) => {
            state.status = 'pending'
         })
         .addCase(getOldTodos.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.data = action.payload
            // console.log(state);
         })
         .addCase(getOldTodos.rejected, (state, action) => {
            state.status = 'rejected'
         })

         //the below is a new case that includes deleteTodo case
         .addCase(deleteOldToDo.pending, (state, action) => {
            state.deleteStatus = 'pending'
         })
         .addCase(deleteOldToDo.fulfilled, (state, action) => {
            state.deleteStatus = 'fulfilled'
            state.data = state.data.filter(todo => todo._id !== action.payload)
         })
         .addCase(deleteOldToDo.rejected, (state, action) => {
            state.deleteStatus = 'rejected'
         })

         //the below is a new case that includes deleteAlltodos case
         .addCase(deleteAlltodos.pending, (state, action) => {
            state.deleteStatus = 'pending'
         })
         .addCase(deleteAlltodos.fulfilled, (state, action) => {
            state.deleteStatus = 'fulfilled'
            
         })
         .addCase(deleteAlltodos.rejected, (state, action) => {
            state.deleteStatus = 'rejected'
         })
         
   }
})

// export const { add, deleteToDo } = oldTodoSlice.actions
export default oldTodoSlice.reducer;

