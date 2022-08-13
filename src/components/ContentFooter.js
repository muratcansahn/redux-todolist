import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { changeActiveFilter, clearCompleted } from "../redux/todos/todosSlice";
const ContentFooter = () => {
  const items = useSelector((state) => state.todos.items);
  const itemsLeft = items.filter((item) => !item.completed).length;
  const activeFilter = useSelector((state) => state.todos.activeFilter);
  const dispatch = useDispatch();
  const Filters = ["All", "Active", "Completed"];
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft} </strong>
        item{itemsLeft > 1 && "s"} left
      </span>

      <ul className="filters">
        {Filters.map((filter) => (
          <li
            onClick={() => dispatch(changeActiveFilter(filter))}
            key={nanoid()}
          >
            <a
              href="#/"
              className={activeFilter === "filter" ? "selected" : ""}
            >
              {filter}
            </a>
          </li>
        ))}
      </ul>
      {activeFilter === "All" && (
        <button
          className="clear-completed"
          onClick={() => dispatch(clearCompleted())}
        >
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default ContentFooter;
