import { FaCheck } from "react-icons/fa";

const Todo = ({ todo, displayTodoDetails }) => {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action"
      onClick={() => displayTodoDetails(todo.id)}
    >
      <FaCheck className="text-primary" /> {todo.title}
    </button>
  );
};

export default Todo;
