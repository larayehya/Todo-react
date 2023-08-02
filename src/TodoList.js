import { useState } from "react";
import Todo from "./Todo";

function ToDoList() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]); //array of todos

  const addTodos = (todoText) => {
    const newTodos = [...todos, todoText]; //hatyna bl newTodos kl l todos w zedna 3lyun l todoText
    setTodos(newTodos);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle the form submission logic here, like adding the todo to the list.
    if (!todo) return;
    //eza ltodo fade tla3le mn l function
    addTodos(todo);
    setTodo("");
  };

  const removeTodo = () => {};
  const completeTodo = () => {};

  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          value={todo}
        />

        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo, index) => {
        //i want to show the todo
        return (
          <Todo
            todo={todo}
            index={index}
            key={index}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        );
      })}
    </>
  );
}

export default ToDoList;
