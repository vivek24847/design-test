import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state) => {
      
   
    }
    
  },
})

export const { add } = todoSlice.actions

export default todoSlice.reducer