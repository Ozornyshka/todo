import "./App.css";
import { useState, useEffect } from "react";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  function handleClick(event) {
    setTodos([...todos, todo]);
    setTodo({ title: "" });
  }

  function handleChangeTodo(event) {
    setTodo({
      id: todos.length + 1,
      title: event.target.value,
      completed: false,
    });
  }

  function handleDeleteTodo(todoToDelete) {
    setTodos(todos.filter((todo) => todo.id !== todoToDelete.id));
  }

  // function todoStatus(todo) {
  //   console.log({ ...todos });
  //   setTodos([...todos, (todo.completed = !todo.completed)]);
  // }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      });
  }, []);

  return (
    <div className="todo">
      <h1>ToDo List</h1>
      <form action="">
        <input onChange={handleChangeTodo} value={todo.title}></input>
        <button onClick={handleClick} type="button">
          Save todo
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            // todoStatus={todoStatus}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
