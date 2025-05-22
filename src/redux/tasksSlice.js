import { createSlice } from "@reduxjs/toolkit";


const defaultTasks = [
  {
    id: "1",
    name: "Work out",
    time: "8:00 am",
    completed: true,
    category: "personal",
  },
  {
    id: "2",
    name: "Design team meeting",
    time: "2:30 pm",
    completed: false,
    category: "work",
  },
  {
    id: "3",
    name: "Hand off the project",
    time: "7:00 pm",
    completed: false,
    category: "freelance",
  },
];
const initialState = {
  taskList: JSON.parse(localStorage.getItem("tasks")) || defaultTasks,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
    updateTask: (state, action) => {
      const index = state.taskList.findIndex(ele => ele.id === action.payload.id);
      if (index !== -1) {
        state.taskList[index] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state.taskList));
      }
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter(ele => ele.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
    reorderTasks: (state, action) => {
      state.taskList = action.payload;
      localStorage.setItem("tasks", JSON.stringify(state.taskList));
    },
  },
});

export const { addTask, updateTask, deleteTask, reorderTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
