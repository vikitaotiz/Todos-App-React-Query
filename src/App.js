import { useQuery } from "@tanstack/react-query";
import Header from "./components/Header";
import Todos from "./components/Todos";
import { fetchTodos } from "./utils/fetchWrapper";

const numberOfTodos = 10;

function App() {
  const {data, isLoading, error} = useQuery(['todos'], () => fetchTodos(numberOfTodos))
  
  if(isLoading) return "Loading...";
  if(error) return "Something went wrong "+ error.message;

  return (
    <>
      <Header />
      <div className="container">
        <Todos todos={data} />
      </div>
    </>
  );
}

export default App;
