import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, text: "Learn JavaScript", completed: true },
      { id: 2, text: "Learn React", completed: false },
      { id: 3, text: "Have a life!", completed: false },
    ],
  },
  reducers: {},
});
export default todosSlice.reducer;
