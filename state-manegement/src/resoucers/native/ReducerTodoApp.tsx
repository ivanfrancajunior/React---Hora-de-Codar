import React, { useState, useReducer } from "react";

type Todo = {
  id: number;
  text: string;
};

const ReducerTodoApp = () => {
  // const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState<string>('');

  // const handleAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   setTask(e.target.value);
  // };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(task);
    setTask("");
  };

  return (
    <div className="flex flex-col gap-1 mt-5 ">
      {/* {todos && todos.map((todo) => <div key={todo.id}>{todo.text}</div>)} */}
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          className="text-zinc-800 p-2 rounded-md"
          value={task}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
        />

        <button>click here</button>
      </form>
    </div>
  );
};

export default ReducerTodoApp;
