import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../utils/fetchWrapper";

const Details = ({ todoId }) => {
  const { data, isLoading, error } = useQuery(
    ["todo", todoId], () => fetchTodo(todoId),
    { enabled: Boolean(todoId) }
  );

  if (error) return "Something went wrong " + error.message;

  return (
    <div
      className="p-3 card card-body text-center text-bg-primary"
      style={{ height: 200 }}
    >
      {!isLoading ? (
        <div className="fw-bolder pa-5">{data?.title?.toUpperCase()}</div>
      ) : (
        <small>Click any item on the list to begin...</small>
      )}
    </div>
  );
};

export default Details;
