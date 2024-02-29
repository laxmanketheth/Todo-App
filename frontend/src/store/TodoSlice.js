import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const addCurrentTodo = createAsyncThunk('addCurrentTodo', async(todoData) => {
    const data =  await fetch('http://localhost:8080/addtodo', {
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
      const response =  fetch(`http://localhost:8080/todo/${id}`,{
            method: 'DELETE'
        })
       const result = await response.json()
       return result;
})


const todoSlice = createSlice({
   name: 'todoSlice',
   initialState: {
      data: [],
      status: 'idle',
      deleteStatus: 'idle'
   },
   reducers: {
      // add(state, action) {
      
      //    console.log('before'+ state.data.length);
      //    state.data.push(action.payload)
      //    console.log('add reducer');
      //    console.log('after' + state.data.length);
      //    console.log(state.status);
      //    // return state
      // },

      // deleteToDo(state, action) {
      //    state.data = state.data.filter(todo => todo._id !== action.payload)
      // }
   },
   extraReducers: (builder) => {
      builder
         .addCase(addCurrentTodo.pending, (state, action) => {
            state.status = 'pending'
         })
         .addCase(addCurrentTodo.fulfilled, (state, action) => {
            state.data.push(action.payload)
            // console.log(state);
            state.status = 'fulfilled'
         })
         .addCase(addCurrentTodo.rejected, (state, action)=> {
            state.status = 'rejected'
         })
         .addCase(deleteCurrentToDo.pending, (state, action) => {
            state.deleteStatus = 'pending'
         })
         .addCase(deleteCurrentToDo.fulfilled, (state, action) => {
            state.data = state.data.filter(todo => todo._id !== action.payload)
            // console.log(state);
            state.deleteStatus = 'fulfilled'
         })
         .addCase(deleteCurrentToDo.rejected, (state, action)=> {
            state.deleteStatus = 'rejected'
         })
   }
})

// export const {  deleteToDo } = todoSlice.actions
export default todoSlice.reducer;