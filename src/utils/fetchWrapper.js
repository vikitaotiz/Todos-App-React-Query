const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = async (numberOfTodos) => {
    console.log(numberOfTodos);
  const res = await fetch(`${url}?_start=0&_limit=${numberOfTodos}`);
  const data = await res.json();
  return data;
};

export const fetchTodo = async (id) => {
  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  return data;
};
