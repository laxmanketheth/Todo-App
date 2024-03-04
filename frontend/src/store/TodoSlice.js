import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addCurrentTodo = createAsyncThunk('addCurrentTodo', async(todoData) => {
    const data =  await fetch('https://todo-app-api-brown.vercel.app/addtodo', {
                  method: 'POST',
                  headers: {
                     'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(todoData)
   })
      const response = await data.json()
      return response;
});

export const deleteCurrentToDo = createAsyncThunk('deleteCurrentToDo', async(id) => {
      const response = await fetch(`https://todo-app-api-brown.vercel.app/todo/${id}`,{
            method: 'DELETE'
        })
       const result = await response.json()
       return result;
})


const todoSlice = createSlice({
   name: 'todoSlice',
   initialState: {
      data: [],
      status: 'pending',
      deleteStatus: 'pending'
   },
   reducers: {
     
   },
   extraReducers: (builder) => {
      builder
         .addCase(addCurrentTodo.pending, (state, action) => {
            state.status = 'pending'
         })
         .addCase(addCurrentTodo.fulfilled, (state, action) => {
            state.data.push(action.payload)
            state.status = 'fulfilled'
         })
         .addCase(addCurrentTodo.rejected, (state, action)=> {
            state.status = 'rejected'
         })

         .addCase(deleteCurrentToDo.pending, (state, action) => {
            state.deleteStatus = 'pending'
         })
         .addCase(deleteCurrentToDo.fulfilled, (state, action) => {
            state.deleteStatus = 'fulfilled'
            state.data = state.data.filter(todo => todo._id !== action.payload)
         })
         .addCase(deleteCurrentToDo.rejected, (state, action)=> {
            state.deleteStatus = 'rejected'
         })
   }
})

// export const {  deleteToDo } = todoSlice.actions
export default todoSlice.reducer;
