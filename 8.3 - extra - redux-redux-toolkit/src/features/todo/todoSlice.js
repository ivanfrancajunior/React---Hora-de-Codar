const initialTodoState = {
  todo_list: [],
};

const todo_reducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case "create_todo":
      const new_todo = {
        id: Date.now(),
        todo: action.payload.todo,
        is_completed: false,
      };
      return { ...state, todo_list: [...state.todo_list, new_todo] };

    case "update_todo":
      const is_this_exists = state.todo_list.find((item) => item.id === action.payload);

      if (is_this_exists) {
        is_this_exists.is_completed = !is_this_exists.is_completed;
      }
      return { ...state };

    case "remove_todo":
      const index = state.todo_list.find((item) => item.id === action.payload);

      if (index) {
        state.todo_list.splice(index, 1);
      }

      return state;
      
    default:
      return state;
  }
};

export function create_todo(todo) {
  return { type: "create_todo", payload: { todo } };
}
export function update_todo(todo_id) {
  return { type: "update_todo", payload: { todo_id } };
}
export function remove_todo(todo_id) {
  return { type: "remove_todo", payload: { todo_id } };
}

export default todo_reducer;
