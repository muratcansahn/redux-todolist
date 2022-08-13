import { useSelector, useDispatch } from "react-redux";
import { toggle, deleteTodo } from "../redux/todos/todosSlice";
const TodoList = () => {
  const items = useSelector((state) => state.todos.items);
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTodo(id));
    }
  };
  let filteredItems = [];

  // if (activeFilter !== "All") {
  //   filteredItems = items.filter((item) => {
  //     activeFilter === "Active"
  //       ? (item.completed = false && item)
  //       : (item.completed = true && item);
  //   });
  // }
  activeFilter === "Active"
    ? (filteredItems = items.filter((item) => !item.completed))
    : (filteredItems = items.filter((item) => item.completed));
  activeFilter === "All" && (filteredItems = items);

  return (
    <ul className="todo-list">
      {filteredItems.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
              checked={item.completed}
            />
            <label>{item.text}</label>
            <button
              className="destroy"
              onClick={() => {
                handleDelete(item.id);
              }}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
