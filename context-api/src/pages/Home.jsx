import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { TitleColorContext } from "../context/TitleColorContex";

const Home = () => {
  const { counter, setCounter } = useContext(CounterContext);
  const { titleColor, setTitleColor } = useContext(TitleColorContext);
  return (
    <div>
      <section className="flex flex-col items-center justify-between gap-4 ">
        <h2 className="text-4xl font-bold underline"> {counter} </h2>
        <button onClick={() => setCounter(counter + 1)}>Up</button>
      </section>
      <section className="flex flex-col items-center justify-between gap-4">
        <h2 className="text-4xl font-bold underline" style={{ color: titleColor }}>
          {" "}
          Thats a title {titleColor}{" "}
        </h2>
        <div className="flex gap-2 items-center">
          <button onClick={() => setTitleColor("orange")}>orange</button>
          <button onClick={() => setTitleColor("green")}>green</button>
          <button onClick={() => setTitleColor("blue")}>blue</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
