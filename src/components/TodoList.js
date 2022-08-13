import { useSelector, useDispatch } from "react-redux";
import {
  toggle,
  deleteTodo,
  selectTodos,
  selectFilteredTodos,
} from "../redux/todos/todosSlice";
const TodoList = () => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteTodo(id));
    }
  };
  const filteredTodos = useSelector(selectFilteredTodos);

  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
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
