import { CreateCustomer } from "./features/customers/CreateCustomer";
import { Customer } from "./features/customers/Customer";
import { AccountOperations } from "./features/account/AccountOperations";
import { BalanceDisplay } from "./features/account/BalanceDisplay";
import { useSelector } from "react-redux";
import TodoListComponent from "./features/todo/TodoListComponent";

function App() {
  const user = useSelector((store) => store.customer.fullname);
  return (
    <div>
      <>
        <h1>🏦 The React-Redux Bank ⚛️</h1>
        {user === "" ? (
          <CreateCustomer />
        ) : (
          <>
            <Customer />
            <AccountOperations />
            <BalanceDisplay />
          </>
        )}
      </>
      <TodoListComponent />
    </div>
  );
}

export default App;
