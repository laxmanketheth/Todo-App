import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// createAsyncThunk is used to handle asynchronous tasks in Reduxtoolkit
export const getOldTodos = createAsyncThunk('gettodo', async () => {
   const data = await fetch('http://localhost:8080/')
   const result = await data.json()
   return result;
});

export const deleteOldToDo = createAsyncThunk('deleteTodo', async (id) => {
   // console.log(id)
   const response = await fetch(`http://localhost:8080/todo/${id}`, {
      method: 'DELETE'
   })
   //  console.log(response);
   const result = await response.json();
   // console.log(result);
   return result;
});


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
            // console.log('state data after deleting')
            // console.log(state.data);
            // console.log(action.payload);
         })
         .addCase(deleteOldToDo.rejected, (state, action) => {
            state.deleteStatus = 'rejected'
         })
   }
})

// export const { add, deleteToDo } = oldTodoSlice.actions
export default oldTodoSlice.reducer;

