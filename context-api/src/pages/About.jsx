import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { TitleColorContext } from "../context/TitleColorContex";

const About = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const { titleColor, setTitleColor } = useContext(TitleColorContext);
  return (
    <div>
      <h1>About Page</h1>
      <div className="flex flex-col items-center justify-center ">
        <h3>Change Context</h3>
        <h4 className="text-4xl" style={{ color: titleColor }}>
          {counter}
        </h4>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button onClick={() => setCounter(counter + 1)}>Up</button>
        <button onClick={() => setCounter(counter - 1)}>Down</button>
        <button onClick={() => setCounter(0)}>Reset</button>
      </div>
    </div>
  );
};

export default About;
