import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import customer_reducer from "./features/customers/customerSlice";
import account_reducer from "./features/account/accountSlice";

const rootReducer = combineReducers({
  customer: customer_reducer,
  account: account_reducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());

export default store;
