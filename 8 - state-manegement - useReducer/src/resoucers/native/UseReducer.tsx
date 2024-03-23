import Button from "../../components/Button";
import React, { useReducer } from "react";
import {
  InitialStateType,
  REDUCER_TYPE_VALUES,
  ReducerActions,
} from "../../types/NativeReducerTypes";

const initialState = { count: 0, text: "" };

const reducer = (state: InitialStateType, action: ReducerActions) => {
  switch (action.type) {
    case REDUCER_TYPE_VALUES.INCREMENT:
      return { ...state, count: state.count + 1 };

    case REDUCER_TYPE_VALUES.DECREMENT:
      return { ...state, count: state.count - 1 };

    case REDUCER_TYPE_VALUES.NEW_INPUT:
      return { ...state, text: action.payload ?? "" };
    default:
      return state;
  }
};
const UseReducer = () => {
  const [state, dispactch] = useReducer(reducer, initialState);

  const handleTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispactch({ type: REDUCER_TYPE_VALUES.NEW_INPUT, payload: e.target.value });
  };
  return (
    <div className="flex flex-col items-center justify-center gap-10 min-h-[250px] bg-zinc-50/10 mt-10 rounded-md min-w-[250px] px-5 py-5 max-w-[80%]">
      <h2 className="text-2xl font-mono">useReducer</h2>

      <h2 className="text-6xl font-mono italic">{state.count} </h2>
      <div>{state.text === "" ? "your text here" : state.text}</div>

      <input
        type="text"
        className="text-zinc-800 p-2 rounded-md"
        value={state.text}
        placeholder="type some..."
        onChange={handleTextInput}
      />

      <div className="flex gap-4">
        <Button onClick={() => dispactch({ type: REDUCER_TYPE_VALUES.DECREMENT })}>
          Decrement
        </Button>

        <Button onClick={() => dispactch({ type: REDUCER_TYPE_VALUES.INCREMENT })}>
          Increment
        </Button>
      </div>
    </div>
  );
};

export default UseReducer;
