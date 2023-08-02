

 const Todo = ({ todo, index, key, removeTodo, completeTodo }) => {
  return (
    <div>
      {todo}
      <div>
        <button onClick={() => removeTodo(index)}>Remove</button>
        <button onClick={() => completeTodo(index)}>Complete</button>
      </div>
    </div>
  );
};

 export default Todo;
