import { useState } from "react";
import Details from "./Details";
import Todo from "./Todo";

const Todos = ({ todos }) => {
  const [todoId, setTodoId] = useState("");
  const displayTodoDetails = (id) => setTodoId(id);

  return (
    <>
      <div className="mt-3 row gx-5">
        <div className="col">
          <div className="p-3 border bg-light">
            <ul className="list-group list-group-flush">
              {todos?.length > 0 &&
                todos?.map((todo) => (
                  <Todo
                    todo={todo}
                    key={todo.id}
                    displayTodoDetails={displayTodoDetails}
                  />
                ))}
            </ul>
          </div>
        </div>
        <div className="col">
          <Details todoId={todoId} />
        </div>
      </div>
    </>
  );
};

export default Todos;
