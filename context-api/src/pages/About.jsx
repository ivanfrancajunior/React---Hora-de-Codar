import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { TitleColorContext } from "../context/TitleColorContex";

const About = () => {
  const { counter, dispatchCounter } = useContext(CounterContext);
  const { titleColor, setTitleColor } = useContext(TitleColorContext);
  
  const handleAdd = () => {
    dispatchCounter({ type: "INCREASE" });
  }
  const handleDecrease = () => {
    dispatchCounter({ type: "DECREASE" });
  }
  const handleReset = () => {
    dispatchCounter({ type: "RESET" });
  }
  
  return (
    <div>
      <h1>About Page</h1>
      <div className="flex flex-col items-center justify-center ">
        <h3>Change Context</h3>
        <h4 className="text-4xl" style={{ color: titleColor }}>
          {counter.value}
        </h4>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button onClick={handleAdd}>Up</button>
        <button onClick={handleDecrease}>Down</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default About;
