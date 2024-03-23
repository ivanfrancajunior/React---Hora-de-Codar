import { useReducer, useState } from 'react';
/*
Assim como o useState o useReducer também gerencia valores, porém com a possibilidade de receber uma função para alterar este valor.
*/

const Reducer = () => {
  //#1 useReducer - simplest
  const [value, dispatch] = useReducer((state) => {
    return Math.round(Math.random(state) * 5000);
  });

  //#2 useReducer - complex
  const [todo, setTodo] = useState('');
  
  const initialTasks = [
    {
      id: 1,
      text: 'Learn React',
    },
    {
      id: 2,
      text: 'Practice React',
    },
    {
      id: 3,
      text: 'Learn Next.js',
    },
  ];


  const taskReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        const newTask = {
          id: Date.now(),
          text: todo,
        };
        setTodo('');
        return [...state, newTask];

      case 'DELETE':
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: 'ADD' });
  };

  const handleDelete = (id) => {
    dispatchTasks({ type: 'DELETE', id });
  };
  
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h2 className="italic text-4xl">UseReducer</h2>

        <p className="text-4xl">{value ? value : 'Clique para começar'}</p>

        <button onClick={() => dispatch(10)}>gerar</button>
      </div>
      <hr />

      <div>
        <h2 className="italic text-4xl">Todo with useReducer</h2>

        <div>
          <form className="flex items-center justify-center w-full" onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button
              onClick={() => {
                console.log('works');
              }}
            >
              Add
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center justify-center w-full mt-4 gap-2">
          {tasks.map((task) => (
            <div key={task.id} className="py-2 bg-gray-200 min-w-[300px] text-start px-4 rounded-md flex items-center justify-between">
              {task.text}{' '}
              <span className="cursor-pointer" onClick={() => handleDelete(task.id)}>
                ❌
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Reducer;
