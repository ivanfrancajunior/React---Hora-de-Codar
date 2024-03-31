import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create_todo, remove_todo, update_todo } from "./todoSlice";
import store from "../../store";
const TodoListComponent = () => {
  const [task, setTask] = useState("");

  const todos = useSelector((store) => store.todos.todo_list);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;

    dispatch(create_todo(task));
    setTask("");

    console.log(store.getState());
  };

  console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button>Add todo</button>
      </form>
      <div>
        {todos &&
          todos.map((item) => (
            <div key={item.id}>
              <h2>{item.todo}</h2>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoListComponent;
