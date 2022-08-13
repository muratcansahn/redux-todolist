import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      { id: 1, text: "Learn JavaScript", completed: true },
      { id: 2, text: "Learn React", completed: false },
      { id: 3, text: "Have a life!", completed: false },
    ],
    activeFilter: "All",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },

    toggle(state, action) {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.completed = !item.completed;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);
      state.items = filtered;
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      const filtered = state.items.filter((item) => !item.completed);
      state.items = filtered;
    },
  },
});
export const selectTodos = (state) => state.todos.items;
export const selectFilteredTodos = (state) => {
  const activeFilter = state.todos.activeFilter;
  const items = state.todos.items;
  let filteredItems = [];
  activeFilter === "Active"
    ? (filteredItems = items.filter((item) => !item.completed))
    : (filteredItems = items.filter((item) => item.completed));
  activeFilter === "All" && (filteredItems = items);
  return filteredItems;
};
export const {
  addTodo,
  toggle,
  deleteTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;
export default todosSlice.reducer;
