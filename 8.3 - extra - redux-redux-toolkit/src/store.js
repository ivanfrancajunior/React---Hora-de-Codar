import { configureStore } from "@reduxjs/toolkit";

import customer_reducer from "./features/customers/customerSlice";

import account_slice from "./features/account/accountSlice";
import todo_reducer from "./features/todo/todoSlice";

const store = configureStore({
  reducer: {
    customer: customer_reducer,
    account: account_slice,
    todos: todo_reducer,
  },
});

console.log(store.getState());

export default store;
