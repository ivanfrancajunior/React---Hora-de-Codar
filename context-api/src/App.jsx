import { useContext } from "react";
import { CounterContext } from "./context/CounterContext";
function App() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <main className="App flex h-screen flex-col items-center justify-star mt-20">
      <h2 className="text-4xl font-bold underline"> {counter} </h2>

      <button onClick={() => setCounter(counter + 1)}>Up</button>
    </main>
  );
}

export default App;
