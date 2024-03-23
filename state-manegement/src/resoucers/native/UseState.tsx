import { useState } from "react";
import Button from "../../components/Button";

const UseState = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[200px] bg-zinc-50/10 mt-10 rounded-md w-[250px]">
      <h2 className="text-2xl font-mono">useState</h2>
      <Button onClick={() => setCounter(counter + 1)}>
        <h2 className="text-3xl font-mono">Count = {counter}</h2>
      </Button>
    </div>
  );
};

export default UseState;
