import React from "react";

const Todo = (props) => {
  const { todo, handleDeleteTodo, todoStatus } = props;
  return (
    <>
      <li
        key={todo.id}
        className={`${todo.completed}`}
        // onClick={() => todoStatus(todo)}
      >
        {todo.title}
        <button onClick={() => handleDeleteTodo(todo)}>🗑️</button>
      </li>
    </>
  );
};

export default Todo;
