import ReducerTodoApp from "./resoucers/native/ReducerTodoApp";
import UseReducer from "./resoucers/native/UseReducer";
import UseState from "./resoucers/native/UseState";

function App() {
  return (
    <main className="flex flex-col w-full min-h-screen h-full items-center justify-start mt-10 gap-1">
      <h2 className="text-3xl font-bold">State manegement </h2>

      <UseState />
      <UseReducer />
      <ReducerTodoApp />
    </main>
  );
}

export default App;
